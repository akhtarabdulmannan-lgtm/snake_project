# Snake Game — AI-assisted assignment project

A complete, runnable JavaScript Snake game built on the instructor's starter file.
Plain HTML, CSS and JavaScript: **no installation, no build step, no dependencies.**

## Run it

Windows: double-click `index.html`. It opens in your default browser.

VS Code: open the folder, then either
- right-click `index.html` → *Reveal in File Explorer* → double-click it, or
- install the *Live Server* extension and click *Go Live* (optional; `file://` works fine).

## Controls

| Input | Action |
| --- | --- |
| Arrow keys or W A S D | Steer |
| Space | Pause / resume |
| Enter | Start / restart / resume |
| Pause / Restart buttons | Same as above |

## Features

- Timed game loop (`setTimeout` chain, one pending timer at most)
- Direction buffer so quick key presses are not lost and reversals are rejected
- Food spawns only on unoccupied cells; eating grows the snake and scores a point
- Wall and self collision, including the "tail cell is free this tick" rule
- Game-over message with final score, best score and restart
- Pause/resume (button and Space)
- Speed increases every 5 points (150 ms → 70 ms floor)
- High score stored in `localStorage` with a try/catch fallback for blocked storage

## Files

```
index.html                       game markup, styling link and all game logic
style.css                        board, HUD, overlay and button styling
.github/agents/snake-tutor.agent.md   custom Copilot tutor agent
tests/game-logic.test.js         optional Node.js logic check (23 assertions)
```

## Optional logic check

```
node tests/game-logic.test.js
```

This is a developer convenience only. It is not required to play the game.

## Agent configuration

`.github/agents/snake-tutor.agent.md` is the starter agent with a **predict-then-test**
loop added: for every step the tutor asks the learner to predict what happens during one
game tick, then test that prediction in the browser before writing a fix. The `tools:`
line, the ban on complete code, the step-by-step progression and the git reminders are
unchanged.
