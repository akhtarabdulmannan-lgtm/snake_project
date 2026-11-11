# Commit history

Step-by-step commit history of the Snake project, generated from `git log`.

- Repository: `akhtarabdulmannan-lgtm/snake_project`
- Branch: `arena/f761716a-snake-project`
- Covers: 16 commits, from `8fb7cb1` (Initial commit) to `34b4e9b` (step 15)
- Generated: 2026-11-11 (UTC)

## About this history

Steps 1 to 15 are a **reconstructed** history. The finished project was committed as a
single commit, `3e5a5b0a773473cd41d45d6ce615177d01781d6e` (2026-11-09). On 2026-11-11 an
AI coding agent (the `arena-agent` co-author named in each of these commits) split that
commit into one commit per logical step.

The steps show how the project divides into parts. They are not a record of how or when
the code was written: all 15 commits were created within 14 seconds, between 21:02:50 and
21:03:04 UTC. Each commit says so itself. Its subject starts with `[reconstructed]` and
its message names the source commit.

After step 15 the project files are identical to the finished commit.

## Steps

| Step | Commit | Date and time (UTC) | Commit message | Files | Lines |
| --- | --- | --- | --- | --- | --- |
| start | `8fb7cb1` | 2026-11-09 12:56:09 | Initial commit | `README.md` (new) | +1 |
| 1 | `9649f64` | 2026-11-11 21:02:50 | [reconstructed] chore: add .gitignore | `.gitignore` (new) | +13 |
| 2 | `91b0542` | 2026-11-11 21:02:51 | [reconstructed] chore: add snake-tutor Copilot agent | `.github/agents/snake-tutor.agent.md` (new) | +86 |
| 3 | `0c1c64d` | 2026-11-11 21:02:52 | [reconstructed] feat: add page markup for HUD, board and controls | `index.html` (new) | +54 |
| 4 | `cbf31b7` | 2026-11-11 21:02:53 | [reconstructed] style: add stylesheet for the game UI | `index.html`, `style.css` (new) | +215 |
| 5 | `2e0a548` | 2026-11-11 21:02:54 | [reconstructed] feat: draw board, snake and food on the canvas | `index.html` | +67 |
| 6 | `62b3f12` | 2026-11-11 21:02:55 | [reconstructed] feat: add game loop with start and restart | `index.html` | +112 -1 |
| 7 | `bb745b1` | 2026-11-11 21:02:56 | [reconstructed] feat: add arrow-key and WASD steering | `index.html` | +51 |
| 8 | `83bc693` | 2026-11-11 21:02:57 | [reconstructed] feat: add food, growth and scoring | `index.html` | +42 -1 |
| 9 | `82f5a16` | 2026-11-11 21:02:58 | [reconstructed] feat: detect wall and self collisions, end the game | `index.html` | +44 -1 |
| 10 | `6efbdfd` | 2026-11-11 21:02:59 | [reconstructed] feat: add pause and resume | `index.html` | +66 -2 |
| 11 | `c65b652` | 2026-11-11 21:03:00 | [reconstructed] feat: add speed levels | `index.html` | +14 -2 |
| 12 | `1a9345a` | 2026-11-11 21:03:01 | [reconstructed] feat: store best score in localStorage | `index.html` | +34 -1 |
| 13 | `0d30fc4` | 2026-11-11 21:03:02 | [reconstructed] test: add headless game-logic test | `tests/game-logic.test.js` (new) | +394 |
| 14 | `aca936e` | 2026-11-11 21:03:03 | [reconstructed] docs: write README | `README.md` | +57 -1 |
| 15 | `34b4e9b` | 2026-11-11 21:03:04 | [reconstructed] docs: add test, report and submission checklists | `REPORT-OUTLINE.md` (new), `SUBMISSION-CHECKLIST.md` (new), `TEST-CHECKLIST.md` (new) | +225 |

The commit that adds this file comes after step 15. It is not listed because a file cannot
contain the hash of its own commit.

To see the same list in the project folder, run `git log --oneline --reverse`.

## Full log

Output of `git log --reverse --stat --date=iso 34b4e9b`, oldest commit first:

```text
commit 8fb7cb1050197434099bb3dbdb5136ba9fe1ff3f
Author: arena-ai-coding-agent[bot] <298482267+arena-ai-coding-agent[bot]@users.noreply.github.com>
Date:   2026-11-09 12:56:09 +0000

    Initial commit

 README.md | 1 +
 1 file changed, 1 insertion(+)

commit 9649f64e09619361c7ae8ef156f76352b32a5be3
Author: akhtarabdulmannan-lgtm <332351145+akhtarabdulmannan-lgtm@users.noreply.github.com>
Date:   2026-11-11 21:02:50 +0000

    [reconstructed] chore: add .gitignore

    Ignore editor and OS files, node_modules and npm logs (Node.js is only
    used by the optional logic test) and local scratch files.

    Reconstructed history: split after the fact from the single finished
    commit 3e5a5b0a773473cd41d45d6ce615177d01781d6e ("feat: complete Snake
    game with pause, speed levels and tests", Arena Agent, 2026-11-09).
    A logical breakdown, not a record of how or when the code was written.

    Co-authored-by: arena-agent <297053741+arena-agent@users.noreply.github.com>

 .gitignore | 13 +++++++++++++
 1 file changed, 13 insertions(+)

commit 91b054228ab7723890a182cf6b8fb8fac93fb535
Author: akhtarabdulmannan-lgtm <332351145+akhtarabdulmannan-lgtm@users.noreply.github.com>
Date:   2026-11-11 21:02:51 +0000

    [reconstructed] chore: add snake-tutor Copilot agent

    Add .github/agents/snake-tutor.agent.md, the custom Copilot agent for
    this project. It tutors the Snake build step by step instead of handing
    out finished code, asks for a one-tick prediction before each change
    (predict-then-test) and reminds the student to commit after each step.

    Reconstructed history: split after the fact from the single finished
    commit 3e5a5b0a773473cd41d45d6ce615177d01781d6e ("feat: complete Snake
    game with pause, speed levels and tests", Arena Agent, 2026-11-09).
    A logical breakdown, not a record of how or when the code was written.

    Co-authored-by: arena-agent <297053741+arena-agent@users.noreply.github.com>

 .github/agents/snake-tutor.agent.md | 86 +++++++++++++++++++++++++++++++++++++
 1 file changed, 86 insertions(+)

commit 0c1c64d2eae83043c3b4a2f62b3b5bb38f6253e5
Author: akhtarabdulmannan-lgtm <332351145+akhtarabdulmannan-lgtm@users.noreply.github.com>
Date:   2026-11-11 21:02:52 +0000

    [reconstructed] feat: add page markup for HUD, board and controls

    Static index.html: title, score/best/speed counters, a 400x400 canvas
    with a start overlay, Pause and Restart buttons and a hint line.

    No script or stylesheet yet, so nothing is drawn or interactive; the
    counters and hint text describe behaviour that later commits add.

    Reconstructed history: split after the fact from the single finished
    commit 3e5a5b0a773473cd41d45d6ce615177d01781d6e ("feat: complete Snake
    game with pause, speed levels and tests", Arena Agent, 2026-11-09).
    A logical breakdown, not a record of how or when the code was written.

    Co-authored-by: arena-agent <297053741+arena-agent@users.noreply.github.com>

 index.html | 54 ++++++++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 54 insertions(+)

commit cbf31b7d59fe86b0d0a96c75eb1723253967eae8
Author: akhtarabdulmannan-lgtm <332351145+akhtarabdulmannan-lgtm@users.noreply.github.com>
Date:   2026-11-11 21:02:53 +0000

    [reconstructed] style: add stylesheet for the game UI

    Add style.css and link it from index.html: dark card layout, counter
    tiles, board frame, overlay, buttons, hint line and a small-screen
    adjustment. The overlay is hidden until a script adds
    .overlay--visible.

    Reconstructed history: split after the fact from the single finished
    commit 3e5a5b0a773473cd41d45d6ce615177d01781d6e ("feat: complete Snake
    game with pause, speed levels and tests", Arena Agent, 2026-11-09).
    A logical breakdown, not a record of how or when the code was written.

    Co-authored-by: arena-agent <297053741+arena-agent@users.noreply.github.com>

 index.html |   1 +
 style.css  | 214 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 2 files changed, 215 insertions(+)

commit 2e0a54800c10b4901a055a6fd723f412ecfe0f9b
Author: akhtarabdulmannan-lgtm <332351145+akhtarabdulmannan-lgtm@users.noreply.github.com>
Date:   2026-11-11 21:02:54 +0000

    [reconstructed] feat: draw board, snake and food on the canvas

    Add the script block with the grid constants, the starting snake and
    food, and drawGame(), which paints the background, grid lines, food
    and snake. The board is drawn once on load; nothing moves yet.

    Reconstructed history: split after the fact from the single finished
    commit 3e5a5b0a773473cd41d45d6ce615177d01781d6e ("feat: complete Snake
    game with pause, speed levels and tests", Arena Agent, 2026-11-09).
    A logical breakdown, not a record of how or when the code was written.

    Co-authored-by: arena-agent <297053741+arena-agent@users.noreply.github.com>

 index.html | 67 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 67 insertions(+)

commit 62b3f12ebce5b2c6c79e2c41b783dcc59e819380
Author: akhtarabdulmannan-lgtm <332351145+akhtarabdulmannan-lgtm@users.noreply.github.com>
Date:   2026-11-11 21:02:55 +0000

    [reconstructed] feat: add game loop with start and restart

    Move the snake one cell every 150 ms using a setTimeout chain.
    scheduleTick() clears any pending timer first, so restarting never
    leaves two timers running. A "Ready?" overlay starts the game from its
    button or Enter, and Restart resets and starts again.

    The snake only moves right and the walls do not stop it yet. The
    on-screen hints already mention steering and pausing, which later
    commits add.

    Reconstructed history: split after the fact from the single finished
    commit 3e5a5b0a773473cd41d45d6ce615177d01781d6e ("feat: complete Snake
    game with pause, speed levels and tests", Arena Agent, 2026-11-09).
    A logical breakdown, not a record of how or when the code was written.

    Co-authored-by: arena-agent <297053741+arena-agent@users.noreply.github.com>

 index.html | 113 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-
 1 file changed, 112 insertions(+), 1 deletion(-)

commit bb745b1a575a93969cb657be3ddca65e26111621
Author: akhtarabdulmannan-lgtm <332351145+akhtarabdulmannan-lgtm@users.noreply.github.com>
Date:   2026-11-11 21:02:56 +0000

    [reconstructed] feat: add arrow-key and WASD steering

    Map the arrow keys and W/A/S/D to directions. Presses go into a
    two-entry buffer and one turn is applied per tick, so quick presses
    are not lost; reversals and repeats are rejected. A direction key also
    starts the game from the ready screen.

    Reconstructed history: split after the fact from the single finished
    commit 3e5a5b0a773473cd41d45d6ce615177d01781d6e ("feat: complete Snake
    game with pause, speed levels and tests", Arena Agent, 2026-11-09).
    A logical breakdown, not a record of how or when the code was written.

    Co-authored-by: arena-agent <297053741+arena-agent@users.noreply.github.com>

 index.html | 51 +++++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 51 insertions(+)

commit 83bc6932b807f8873d8ce01f385789d79da8ea2c
Author: akhtarabdulmannan-lgtm <332351145+akhtarabdulmannan-lgtm@users.noreply.github.com>
Date:   2026-11-11 21:02:57 +0000

    [reconstructed] feat: add food, growth and scoring

    Eating the food grows the snake by one segment, adds a point and
    updates the Score counter. New food appears on a random cell that the
    snake does not occupy. Restarting resets the score and the food.

    Reconstructed history: split after the fact from the single finished
    commit 3e5a5b0a773473cd41d45d6ce615177d01781d6e ("feat: complete Snake
    game with pause, speed levels and tests", Arena Agent, 2026-11-09).
    A logical breakdown, not a record of how or when the code was written.

    Co-authored-by: arena-agent <297053741+arena-agent@users.noreply.github.com>

 index.html | 43 ++++++++++++++++++++++++++++++++++++++++++-
 1 file changed, 42 insertions(+), 1 deletion(-)

commit 82f5a160a8d9074701e187a26718573896f6df95
Author: akhtarabdulmannan-lgtm <332351145+akhtarabdulmannan-lgtm@users.noreply.github.com>
Date:   2026-11-11 21:02:58 +0000

    [reconstructed] feat: detect wall and self collisions, end the game

    Hitting a wall or the snake's own body ends the game: the timer stops
    and the overlay shows the reason and the final score, with Play again
    or Enter to restart. The cell the tail is leaving counts as free unless
    the snake is growing on that tick. Filling the whole board ends the
    game as a win.

    Reconstructed history: split after the fact from the single finished
    commit 3e5a5b0a773473cd41d45d6ce615177d01781d6e ("feat: complete Snake
    game with pause, speed levels and tests", Arena Agent, 2026-11-09).
    A logical breakdown, not a record of how or when the code was written.

    Co-authored-by: arena-agent <297053741+arena-agent@users.noreply.github.com>

 index.html | 45 ++++++++++++++++++++++++++++++++++++++++++++-
 1 file changed, 44 insertions(+), 1 deletion(-)

commit 6efbdfd733388d2aab56ae176094923520b45845
Author: akhtarabdulmannan-lgtm <332351145+akhtarabdulmannan-lgtm@users.noreply.github.com>
Date:   2026-11-11 21:02:59 +0000

    [reconstructed] feat: add pause and resume

    Space or the Pause button freezes the game and shows a "Paused"
    overlay; Space, Enter or Resume continues it. Space also starts a game
    from the ready and game-over screens.

    Space and Enter are ignored while a button has focus, because the
    browser already activates that button and the game would otherwise
    react twice.

    Reconstructed history: split after the fact from the single finished
    commit 3e5a5b0a773473cd41d45d6ce615177d01781d6e ("feat: complete Snake
    game with pause, speed levels and tests", Arena Agent, 2026-11-09).
    A logical breakdown, not a record of how or when the code was written.

    Co-authored-by: arena-agent <297053741+arena-agent@users.noreply.github.com>

 index.html | 68 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++--
 1 file changed, 66 insertions(+), 2 deletions(-)

commit c65b6521f6fe11db5fc2f6d5dbba8d777448a19d
Author: akhtarabdulmannan-lgtm <332351145+akhtarabdulmannan-lgtm@users.noreply.github.com>
Date:   2026-11-11 21:03:00 +0000

    [reconstructed] feat: add speed levels

    Every 5 points the speed level goes up by one and the tick gets 10 ms
    shorter, from 150 ms down to a floor of 70 ms. The Speed counter shows
    the current level.

    Reconstructed history: split after the fact from the single finished
    commit 3e5a5b0a773473cd41d45d6ce615177d01781d6e ("feat: complete Snake
    game with pause, speed levels and tests", Arena Agent, 2026-11-09).
    A logical breakdown, not a record of how or when the code was written.

    Co-authored-by: arena-agent <297053741+arena-agent@users.noreply.github.com>

 index.html | 16 ++++++++++++++--
 1 file changed, 14 insertions(+), 2 deletions(-)

commit 1a9345a57a51c9add54e9d19408a39ef9ef99515
Author: akhtarabdulmannan-lgtm <332351145+akhtarabdulmannan-lgtm@users.noreply.github.com>
Date:   2026-11-11 21:03:01 +0000

    [reconstructed] feat: store best score in localStorage

    Keep the best score under the snakeHighScore key: load it at start-up,
    show it in the Best counter and the game-over text, and save it as
    soon as it is beaten. Storage access is wrapped in try/catch so the
    game still runs where localStorage is blocked.

    index.html is now identical to the finished file.

    Reconstructed history: split after the fact from the single finished
    commit 3e5a5b0a773473cd41d45d6ce615177d01781d6e ("feat: complete Snake
    game with pause, speed levels and tests", Arena Agent, 2026-11-09).
    A logical breakdown, not a record of how or when the code was written.

    Co-authored-by: arena-agent <297053741+arena-agent@users.noreply.github.com>

 index.html | 35 ++++++++++++++++++++++++++++++++++-
 1 file changed, 34 insertions(+), 1 deletion(-)

commit 0d30fc43cec31087e8620a39bfe4508524cfba1a
Author: akhtarabdulmannan-lgtm <332351145+akhtarabdulmannan-lgtm@users.noreply.github.com>
Date:   2026-11-11 21:03:02 +0000

    [reconstructed] test: add headless game-logic test

    Add tests/game-logic.test.js, an optional Node.js check that runs the
    real script from index.html against a stubbed DOM and fake timers
    (23 tests). Run it with: node tests/game-logic.test.js

    Reconstructed history: split after the fact from the single finished
    commit 3e5a5b0a773473cd41d45d6ce615177d01781d6e ("feat: complete Snake
    game with pause, speed levels and tests", Arena Agent, 2026-11-09).
    A logical breakdown, not a record of how or when the code was written.

    Co-authored-by: arena-agent <297053741+arena-agent@users.noreply.github.com>

 tests/game-logic.test.js | 394 +++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 394 insertions(+)

commit aca936e55a813e4158b5690f47268576b6f8480d
Author: akhtarabdulmannan-lgtm <332351145+akhtarabdulmannan-lgtm@users.noreply.github.com>
Date:   2026-11-11 21:03:03 +0000

    [reconstructed] docs: write README

    Replace the placeholder README with how to run the game, the controls,
    the feature list, a file overview, the optional logic check and a note
    on the tutor agent configuration.

    Reconstructed history: split after the fact from the single finished
    commit 3e5a5b0a773473cd41d45d6ce615177d01781d6e ("feat: complete Snake
    game with pause, speed levels and tests", Arena Agent, 2026-11-09).
    A logical breakdown, not a record of how or when the code was written.

    Co-authored-by: arena-agent <297053741+arena-agent@users.noreply.github.com>

 README.md | 58 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++-
 1 file changed, 57 insertions(+), 1 deletion(-)

commit 34b4e9bd6583233214668d0dd149d5ab4766506d
Author: akhtarabdulmannan-lgtm <332351145+akhtarabdulmannan-lgtm@users.noreply.github.com>
Date:   2026-11-11 21:03:04 +0000

    [reconstructed] docs: add test, report and submission checklists

    Add TEST-CHECKLIST.md (automated results plus browser checks to run by
    hand), REPORT-OUTLINE.md (structure and prompts for the report) and
    SUBMISSION-CHECKLIST.md (what the folder contains and what still has
    to be produced before submitting).

    The files are unchanged from the finished commit, so the checklist's
    remark about "one synthetic commit" refers to that hand-off commit,
    not to this reconstructed branch.

    Reconstructed history: split after the fact from the single finished
    commit 3e5a5b0a773473cd41d45d6ce615177d01781d6e ("feat: complete Snake
    game with pause, speed levels and tests", Arena Agent, 2026-11-09).
    A logical breakdown, not a record of how or when the code was written.

    Co-authored-by: arena-agent <297053741+arena-agent@users.noreply.github.com>

 REPORT-OUTLINE.md       | 72 ++++++++++++++++++++++++++++++++++++++++++
 SUBMISSION-CHECKLIST.md | 84 +++++++++++++++++++++++++++++++++++++++++++++++++
 TEST-CHECKLIST.md       | 69 ++++++++++++++++++++++++++++++++++++++++
 3 files changed, 225 insertions(+)
```
