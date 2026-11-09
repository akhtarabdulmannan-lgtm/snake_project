// Headless harness: runs the real <script> from index.html with a stubbed DOM + fake timers.
const fs = require("fs");
const vm = require("vm");
const assert = require("assert");

const html = fs.readFileSync(require("path").join(__dirname, "..", "index.html"), "utf8");
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];

function makeEl(id) {
  const el = {
    id, textContent: "", disabled: false,
    _classes: new Set(), _handlers: {},
    addEventListener(type, fn) { (el._handlers[type] = el._handlers[type] || []).push(fn); },
    click() { (el._handlers.click || []).forEach((fn) => fn({})); },
    getContext() { return new Proxy({}, { get: () => () => {}, set: () => true }); },
    width: 400, height: 400,
  };
  el.classList = {
    add: (c) => el._classes.add(c),
    remove: (c) => el._classes.delete(c),
    contains: (c) => el._classes.has(c),
  };
  return el;
}

const ids = ["gameCanvas","score","highScore","level","info","overlay","overlayTitle","overlayText","startBtn","pauseBtn","restartBtn"];
const els = {};
ids.forEach((id) => { els[id] = makeEl(id); });

const docHandlers = {};
const document = {
  getElementById: (id) => els[id],
  addEventListener: (type, fn) => { (docHandlers[type] = docHandlers[type] || []).push(fn); },
};

const store = new Map();
const window = { localStorage: {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, v),
}};

let now = 0, nextId = 1;
const timers = new Map();
const setTimeoutFake = (fn, delay) => { const id = nextId++; timers.set(id, { fn, at: now + delay }); return id; };
const clearTimeoutFake = (id) => { timers.delete(id); };
const pending = () => timers.size;

function advance(ms) {
  const target = now + ms;
  for (;;) {
    let next = null;
    for (const [id, t] of timers) if (t.at <= target && (!next || t.at < next.t.at)) next = { id, t };
    if (!next) break;
    timers.delete(next.id);
    now = next.t.at;
    next.t.fn();
  }
  now = target;
}

const sandbox = { document, window, setTimeout: setTimeoutFake, clearTimeout: clearTimeoutFake, Math, console, String };
vm.createContext(sandbox);
vm.runInContext(script, sandbox);

const key = (k) => docHandlers.keydown.forEach((fn) => fn({ key: k, preventDefault() {} }));
const get = () => JSON.parse(vm.runInContext("JSON.stringify({ snake, direction, food, score, status, timerId })", sandbox));
const run = (code) => vm.runInContext(code, sandbox);
const setFood = (x, y) => run(`food = { x: ${x}, y: ${y} }`);
const TICK = 150;

const results = [];
function test(name, fn) {
  try { fn(); results.push(["PASS", name]); }
  catch (e) { results.push(["FAIL", name + "\n        " + e.message.replace(/\n/g, "\n        ")]); }
}
const eq = (a, b, msg) => assert.strictEqual(JSON.stringify(a), JSON.stringify(b), msg);

// ---- 1. initial state ----
test("initial state: 3 segments, score 0, ready, overlay shown, no timer", () => {
  const s = get();
  eq(s.snake, [{x:10,y:10},{x:9,y:10},{x:8,y:10}]);
  assert.strictEqual(s.score, 0);
  assert.strictEqual(s.status, "ready");
  assert.strictEqual(pending(), 0);
  assert.strictEqual(els.score.textContent, "0");
  assert.ok(els.overlay._classes.has("overlay--visible"));
});

// ---- 2. movement ----
test("movement: first arrow key starts the game; one tick = one cell", () => {
  key("ArrowRight");
  assert.strictEqual(get().status, "running");
  assert.strictEqual(pending(), 1, "exactly one timer after start");
  advance(TICK);
  let s = get();
  eq(s.snake[0], {x:11,y:10});
  assert.strictEqual(s.snake.length, 3);
  advance(TICK);
  s = get();
  eq(s.snake[0], {x:12,y:10});
  assert.strictEqual(pending(), 1, "still exactly one timer");
  assert.strictEqual(s.score, 0);
});

// ---- 3. single reversal blocked ----
test("reversal: pressing the opposite arrow is ignored", () => {
  key("ArrowLeft");
  advance(TICK);
  eq(get().snake[0], {x:13,y:10});
  assert.strictEqual(get().status, "running");
});

// ---- 4. rapid keys ----
test("rapid turns: three keys in one tick are buffered; one turn per tick", () => {
  els.restartBtn.click();
  key("ArrowDown");
  key("ArrowRight");
  key("ArrowUp");   // reverses the queued "down" -> must be rejected
  advance(TICK);
  let s = get();
  eq(s.snake[0], {x:10,y:11}, "first tick applies the down turn only");
  assert.strictEqual(s.status, "running");
  advance(TICK);
  s = get();
  assert.strictEqual(s.status, "running");
});

test("rapid turns: hammering the reversing key does not kill the snake", () => {
  els.restartBtn.click();
  key("ArrowRight");
  for (let i = 0; i < 30; i += 1) key("ArrowLeft");
  for (let i = 0; i < 5; i += 1) advance(TICK);
  const s = get();
  assert.strictEqual(s.status, "running");
  eq(s.snake[0], {x:15,y:10});
});

test("rapid turns: a quick down-then-left pair performs a legal corner, not a U-turn", () => {
  els.restartBtn.click();
  key("ArrowRight");
  advance(TICK);            // head 11,10 moving right
  key("ArrowDown");
  key("ArrowLeft");         // buffered; must not become an instant reversal
  advance(TICK);            // head 11,11 moving down
  eq(get().snake[0], {x:11,y:11});
  assert.strictEqual(get().status, "running");
  advance(TICK);            // head 10,11 moving left
  eq(get().snake[0], {x:10,y:11});
  assert.strictEqual(get().status, "running");
});

// ---- 5. eating / growth ----
test("eating: +1 score, one new segment, new food on an empty cell", () => {
  els.restartBtn.click();
  key("ArrowRight");
  advance(TICK);
  setFood(12, 10);
  advance(TICK);
  const s = get();
  assert.strictEqual(s.score, 1);
  assert.strictEqual(els.score.textContent, "1");
  assert.strictEqual(s.snake.length, 4);
  eq(s.snake[0], {x:12,y:10});
  assert.ok(!s.snake.some((seg) => seg.x === s.food.x && seg.y === s.food.y), "food must not be on the snake");
  assert.ok(s.food.x >= 0 && s.food.x < 20 && s.food.y >= 0 && s.food.y < 20);
  assert.strictEqual(s.status, "running");
});

test("eating: eight items in a straight line -> score 8, length 11", () => {
  els.restartBtn.click();
  key("ArrowRight");
  advance(TICK);
  for (let i = 0; i < 8; i += 1) {
    const head = get().snake[0];
    setFood(head.x + 1, head.y);
    advance(TICK);
    assert.strictEqual(get().status, "running", "died on item " + (i + 1));
  }
  const s = get();
  assert.strictEqual(s.score, 8);
  assert.strictEqual(s.snake.length, 11, "length is always score + 3");
});

// ---- 6. pause / resume ----
test("pause: freezes the snake and clears the timer", () => {
  els.restartBtn.click();
  key(" ");
  assert.strictEqual(get().status, "paused");
  assert.strictEqual(pending(), 0);
  const before = JSON.stringify(get().snake);
  advance(2000);
  assert.strictEqual(JSON.stringify(get().snake), before, "nothing moves while paused");
  assert.strictEqual(els.pauseBtn.textContent, "Resume");
});

test("resume: exactly one timer, movement continues (space and button)", () => {
  const before = JSON.stringify(get().snake);
  key(" ");
  assert.strictEqual(get().status, "running");
  assert.strictEqual(pending(), 1);
  advance(TICK);
  assert.notStrictEqual(JSON.stringify(get().snake), before);
  assert.strictEqual(pending(), 1);
  els.pauseBtn.click();
  assert.strictEqual(get().status, "paused");
  els.pauseBtn.click();
  assert.strictEqual(get().status, "running");
  assert.strictEqual(pending(), 1);
});

// ---- 7. repeated restarts ----
test("restart x5: one timer only, state fully reset", () => {
  els.pauseBtn.click();
  for (let i = 0; i < 5; i += 1) els.restartBtn.click();
  assert.strictEqual(pending(), 1, "pending timers after 5 restarts: " + pending());
  const s = get();
  assert.strictEqual(s.score, 0);
  assert.strictEqual(s.snake.length, 3);
  eq(s.snake[0], {x:10,y:10});
  eq(s.direction, {x:1,y:0});
  assert.strictEqual(s.status, "running");
  advance(TICK);
  eq(get().snake[0], {x:11,y:10}, "exactly one cell per tick");
  assert.strictEqual(pending(), 1);
});

// ---- 8. wall collision ----
test("wall: right wall ends the game, clears the timer, shows a message", () => {
  els.restartBtn.click();
  for (let i = 0; i < 9; i += 1) advance(TICK);
  assert.strictEqual(get().snake[0].x, 19);
  assert.strictEqual(get().status, "running");
  advance(TICK);
  const s = get();
  assert.strictEqual(s.status, "over");
  assert.strictEqual(pending(), 0, "no timer after game over");
  eq(s.snake[0], {x:19,y:10}, "head stays on the board");
  assert.match(els.overlayTitle.textContent, /Game over/i);
  assert.ok(els.overlayText.textContent.includes("Final score"));
  assert.ok(els.overlay._classes.has("overlay--visible"));
  assert.strictEqual(els.pauseBtn.disabled, true);
  advance(3000);
  assert.strictEqual(get().status, "over", "game over is stable");
});

test("wall: all four directions end the game on the correct edge", () => {
  const cases = [
    [[], "x", 19],
    [["ArrowDown"], "y", 19],
    [["ArrowUp"], "y", 0],
    [["ArrowUp", "ArrowLeft"], "x", 0]
  ];
  cases.forEach(([keys, axis, value]) => {
    els.restartBtn.click();
    keys.forEach(key);
    for (let i = 0; i < 40 && get().status === "running"; i += 1) advance(TICK);
    assert.strictEqual(get().status, "over", keys.join("+") + " should end the game");
    assert.strictEqual(get().snake[0][axis], value, keys.join("+") + " head stopped at " + JSON.stringify(get().snake[0]));
  });
});

// ---- 9. self collision ----
test("self: curling into the body ends the game", () => {
  els.restartBtn.click();
  run(`snake = [{x:5,y:5},{x:5,y:6},{x:4,y:6},{x:4,y:5},{x:4,y:4}]; direction = {x:0,y:1}; score = 0; food = {x:15,y:15};`);
  advance(TICK);
  const s = get();
  assert.strictEqual(s.status, "over");
  assert.ok(els.overlayText.textContent.toLowerCase().includes("body"), els.overlayText.textContent);
  assert.strictEqual(pending(), 0);
});

test("self: moving into the cell the tail is vacating is allowed", () => {
  els.restartBtn.click();
  run(`snake = [{x:5,y:5},{x:4,y:5},{x:4,y:6},{x:5,y:6}]; direction = {x:0,y:1}; food = {x:15,y:15};`);
  advance(TICK);
  const s = get();
  assert.strictEqual(s.status, "running", "tail cell is free this tick");
  eq(s.snake[0], {x:5,y:6});
});

test("self: eating while coiled still detects the collision (no tail exemption when growing)", () => {
  els.restartBtn.click();
  // head would move into its own tail cell, and the food is there too -> must die
  run(`snake = [{x:5,y:5},{x:4,y:5},{x:4,y:6},{x:5,y:6}]; direction = {x:0,y:1}; food = {x:5,y:6}; score = 0;`);
  advance(TICK);
  assert.strictEqual(get().status, "over");
});

// ---- 10. high score ----
test("high score: saved to localStorage and kept after restart", () => {
  els.restartBtn.click();
  store.clear();
  run("highScore = 0; updateHud();");
  els.restartBtn.click();
  key("ArrowRight");
  advance(TICK);
  setFood(12, 10);
  advance(TICK);
  assert.strictEqual(get().score, 1);
  for (let i = 0; i < 25 && get().status === "running"; i += 1) advance(TICK);
  assert.strictEqual(get().status, "over");
  assert.strictEqual(store.get("snakeHighScore"), "1", "stored: " + store.get("snakeHighScore"));
  assert.strictEqual(els.highScore.textContent, "1");
  els.restartBtn.click();
  assert.strictEqual(get().score, 0);
  assert.strictEqual(els.highScore.textContent, "1", "best score survives a restart");
});

test("high score: a worse run does not overwrite the best", () => {
  els.restartBtn.click();
  for (let i = 0; i < 25 && get().status === "running"; i += 1) advance(TICK);
  assert.strictEqual(get().status, "over");
  assert.strictEqual(store.get("snakeHighScore"), "1");
});

// ---- 11. speed / level ----
test("speed: level and interval scale with score, floored at 70ms", () => {
  els.restartBtn.click();
  assert.strictEqual(run("getInterval()"), 150);
  run("score = 5");   assert.strictEqual(run("getLevel()"), 2);
  assert.strictEqual(run("getInterval()"), 140);
  run("score = 500"); assert.strictEqual(run("getInterval()"), 70);
  run("score = 0");   run("updateHud()");
  assert.strictEqual(els.level.textContent, "1");
});

// ---- 12. board full ----
test("board full: no free cell -> win message, no crash", () => {
  els.restartBtn.click();
  run("snake = Array.from({length: 400}, (_, i) => ({ x: i % 20, y: Math.floor(i / 20) }))");
  assert.strictEqual(run("spawnFood()"), false);
  assert.strictEqual(get().status, "over");
  assert.match(els.overlayTitle.textContent, /win/i);
});


// ---- 13. focused-button guard ----
test("focus guard: Space/Enter with a focused button does not double-toggle", () => {
  els.restartBtn.click();
  assert.strictEqual(get().status, "running");
  const pressWithButtonFocus = (k) => docHandlers.keydown.forEach((fn) => fn({
    key: k, preventDefault() {}, target: { tagName: "BUTTON" }
  }));
  pressWithButtonFocus(" ");
  assert.strictEqual(get().status, "running", "browser handles the button click, not our handler");
  assert.strictEqual(pending(), 1);
  pressWithButtonFocus("Enter");
  assert.strictEqual(get().status, "running");
  assert.strictEqual(pending(), 1);
  // arrows still work while a button has focus
  pressWithButtonFocus("ArrowDown");
  advance(TICK);
  eq(get().snake[0], {x:10,y:11});
});

test("live best score: the HUD best updates the moment it is beaten", () => {
  els.restartBtn.click();
  run("highScore = 0; score = 0; updateHud();");
  key("ArrowRight");
  advance(TICK);
  setFood(12, 10);
  advance(TICK);
  assert.strictEqual(els.highScore.textContent, "1");
  assert.strictEqual(store.get("snakeHighScore"), "1");
});

// ---- fuzz: random keys + ticks must never crash or duplicate timers ----
test("fuzz: 4000 random actions keep exactly <=1 timer and never throw", () => {
  const keys = ["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d"," ","Enter"];
  els.restartBtn.click();
  for (let i = 0; i < 4000; i += 1) {
    if (Math.random() < 0.4) key(keys[Math.floor(Math.random() * keys.length)]);
    else advance(Math.floor(Math.random() * 200));
    if (pending() > 1) throw new Error("duplicate timers: " + pending() + " at step " + i);
    const s = get();
    if (s.status === "running" && s.snake.length < 3) throw new Error("snake shrank below 3 at step " + i);
    if (s.snake.some((seg) => seg.x < 0 || seg.x > 19 || seg.y < 0 || seg.y > 19)) {
      throw new Error("segment off board at step " + i);
    }
  }
});

results.forEach(([st, name]) => console.log(`${st}  ${name}`));
const failed = results.filter((r) => r[0] === "FAIL").length;
console.log(`\n${results.length - failed}/${results.length} passed`);
process.exit(failed ? 1 : 0);

/*
Optional developer check (not part of the game):
    node tests/game-logic.test.js
It pulls the real <script> out of index.html, stubs the DOM and the timers,
and asserts the game logic. The game itself needs no Node.js at all.
*/
