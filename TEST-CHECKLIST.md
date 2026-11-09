# Test checklist

Two columns matter here: what was **actually executed** while building this project, and
what **you** must confirm in your own browser before submitting. Nothing in the "you run
this" column was verified by a human on a real screen.

## A. Executed automatically (Node.js harness over the real `index.html` script)

Run it yourself with `node tests/game-logic.test.js`. Result at hand-off: **23/23 passed.**

| # | Test | Expected result | Status |
| --- | --- | --- | --- |
| A1 | Initial state | snake at (10,10),(9,10),(8,10), score 0, status `ready`, start overlay visible, 0 timers | PASS |
| A2 | Movement | one tick moves the head exactly one cell; length unchanged; exactly one pending timer | PASS |
| A3 | Single reversal | pressing the opposite arrow is ignored; the snake keeps its direction and survives | PASS |
| A4 | Rapid keys (3 in one tick) | only the first legal turn applies per tick, the rest stay buffered; snake survives | PASS |
| A5 | Rapid keys (30× reversing key) | snake survives and keeps moving right | PASS |
| A6 | Rapid corner (down then left) | legal corner over two ticks, never an instant U-turn | PASS |
| A7 | Eating | score 1, length 4, new food not on any snake cell, inside the 20×20 board | PASS |
| A8 | Growth repeated | 8 items → score 8, length 11 (length is always score + 3) | PASS |
| A9 | Pause | status `paused`, 0 timers, snake frozen for 2000 ms of virtual time | PASS |
| A10 | Resume | exactly one new timer, movement continues (Space and button paths) | PASS |
| A11 | Restart ×5 | exactly **1** pending timer, score 0, length 3, direction right, one cell per tick | PASS |
| A12 | Wall (right) | status `over`, 0 timers, head stays on column 19, "Game over" overlay with final score | PASS |
| A13 | Walls (all 4 edges) | game ends on the correct edge cell for each direction | PASS |
| A14 | Self collision | curling into the body ends the game with the "own body" message | PASS |
| A15 | Tail cell rule | moving into the cell the tail vacates is legal | PASS |
| A16 | Self collision while growing | no tail exemption when the head lands on food → game over | PASS |
| A17 | High score | stored under `snakeHighScore`, survives a restart, shown in the HUD | PASS |
| A18 | Worse run | a lower score does not overwrite the stored best | PASS |
| A19 | Speed / level | 150 ms at 0 points, level 2 at 5 points, clamped at 70 ms | PASS |
| A20 | Board full | `spawnFood` reports "no free cell" and shows the win message instead of crashing | PASS |
| A21 | Focus guard | Space/Enter with a focused button does not double-toggle; arrows still work | PASS |
| A22 | Live best score | the HUD best updates the moment it is beaten and is saved straight away | PASS |
| A23 | Fuzz (4000 random keys/ticks) | never throws, never more than one timer, no segment leaves the board | PASS |

These are **logic** results with a stubbed DOM and fake timers. They do not prove that the
CSS renders correctly or that keyboard focus behaves the same in a real browser.

## B. You should run these in your own browser

Open `index.html` by double-clicking it and work down the list. Write down what you saw —
you will need it for the report's "Development process" section.

| # | Test | How | Expected result | ☐ |
| --- | --- | --- | --- | --- |
| B1 | Load | double-click `index.html` | dark themed card, 400×400 grid, snake at the middle-left, orange food, score 0 / best 0 / speed 1, "Ready?" overlay over the board | ☐ |
| B2 | Start | press Enter or click *Start game* | overlay hides, snake slides right, one cell per step | ☐ |
| B3 | Movement | press ↑ ↓ ← → | the snake turns at the next step, not instantly mid-cell | ☐ |
| B4 | Reversal | while moving right, press ← repeatedly | nothing bad happens; the snake never eats itself | ☐ |
| B5 | Rapid turns | press ↓ then ← quickly within one step | one clean corner, no death | ☐ |
| B6 | Eating | steer onto the food | score +1, snake visibly longer by one square, new food appears elsewhere | ☐ |
| B7 | Speed | reach 5 points | "Speed" shows 2 and the snake moves noticeably faster; the colour/speed change is visible | ☐ |
| B8 | Wall | run into any edge | game stops, overlay shows "Game over", final and best score | ☐ |
| B9 | Self | grow to ~6 long, curl into your own body | game ends with the "own body" message | ☐ |
| B10 | Pause | press Space mid-run | snake freezes, button reads *Resume*, hint line changes | ☐ |
| B11 | Resume | press Space again | snake continues from the same cell with the same direction | ☐ |
| B12 | Restart ×5 | click *Restart* five times quickly | every restart begins from (10,10) with score 0 and normal speed; the snake never speeds up or double-steps (a duplicate timer would look like teleporting) | ☐ |
| B13 | Restart after game over | die, then click *Play again* | fresh game, best score still displayed | ☐ |
| B14 | High score | close the tab, reopen the file | "Best" still shows the previous high score | ☐ |
| B15 | Arrow-key scrolling | press arrows while playing | the page does not scroll | ☐ |
| B16 | Window size | make the window narrow | the board shrinks and stays centred, nothing overlaps | ☐ |

## C. Things a browser test cannot fix

- The `file://` localStorage fallback: if your browser blocks storage for local files, the
  best score will be 0 after a reload and nothing will break. Try VS Code Live Server if you
  want to confirm the behaviour — but note the game is expected to be opened by double-click.
- Screenshots and the exported `chat.json` must come from your own VS Code session.
