# Submission checklist — `Lastname_Firstname_WOH-AI.zip`

## 1. What is already in the project folder (generated for you)

- [x] `index.html` — complete game: timed movement, arrow/WASD controls, reversal prevention
      with a direction buffer, food on free cells, growth, scoring, wall + self collision,
      game over, restart (single-timer guarantee), pause/resume, speed levels, high score
- [x] `style.css` — board, HUD, overlay, buttons; linked from `index.html`
- [x] `.github/agents/snake-tutor.agent.md` — tutor with the predict-then-test loop; the
      `tools: ['read', 'search', 'web']` line is unchanged
- [x] `README.md`, `TEST-CHECKLIST.md`, `REPORT-OUTLINE.md` — helper documents
- [x] `tests/game-logic.test.js` — optional Node.js logic check (23/23 passing at hand-off)

## 2. What only YOU can produce — do not submit without these

These are graded artefacts of *your* work. They do not exist yet and must not be invented.

- [ ] **`report.pdf`** — your own 400–800-word report, built from `REPORT-OUTLINE.md`
- [ ] **3–5 Copilot Chat screenshots** embedded in that report, from your own VS Code session
- [ ] **`chat.json`** — VS Code Command Palette → **Chat: Export Chat**, saved in the project root
- [ ] **`.git/` with a real, incremental history.** This repo currently has one synthetic commit
      from the hand-off. Your submission must show *your* steps:
      ```
      git init                     # only if you start a fresh folder
      git add index.html
      git commit -m "chore: add starter index.html"
      # after each step you actually complete:
      git commit -am "feat: add game loop for snake movement"
      git commit -am "feat: add arrow-key controls with reversal guard"
      git commit -am "feat: grow snake and respawn food on eating"
      git commit -am "feat: detect wall and self collisions"
      git commit -am "feat: add pause/resume and high score"
      git commit -am "docs: add report and agent notes"
      ```
      Commit **after each step you actually do**, not all at once at the end. Do not rewrite
      dates to fake a timeline.
- [ ] **Your VS Code sessions** — open the folder, select the `snake-tutor` agent in the Chat
      panel, and work through the steps yourself. A screenshot of a session you did not run is
      academic misconduct, not a completion step.
- [ ] **Student verification for Copilot** — if it is still pending, start it today; the
      deadline is 13.11.2026.

## 3. Build the zip

The grader needs `index.html`, `style.css`, `.github/agents/snake-tutor.agent.md`, `.git/`,
`report.pdf` and `chat.json`. Keep `.git/` inside the zip, and drop `node_modules` / `.DS_Store`
if any exist.

```
# from the parent folder of the project
zip -r Lastname_Firstname_WOH-AI.zip snake_project \
    -x "*/node_modules/*" -x "*.DS_Store" -x "*__pycache__*"
```

Windows PowerShell equivalent:

```powershell
Compress-Archive -Path .\snake_project\* -DestinationPath .\Lastname_Firstname_WOH-AI.zip -Force
```

**Warning:** `Compress-Archive` skips dot-folders such as `.git` and `.github`. Verify the
archive contents afterwards — if `.git` or `.github` is missing, zip the folder with 7-Zip
instead and include hidden files.

## 4. Final verification before uploading

- [ ] `unzip -l Lastname_Firstname_WOH-AI.zip` lists `.git/`, `.github/agents/snake-tutor.agent.md`,
      `index.html`, `style.css`, `report.pdf`, `chat.json`
- [ ] Unzip to a scratch folder and double-click `index.html` — the game still runs
- [ ] `report.pdf` opens, is 400–800 words, and contains 3–5 screenshots
- [ ] `git log --oneline` in the unzipped folder shows your progressive commits
- [ ] The file is named exactly `Lastname_Firstname_WOH-AI.zip` with your real name

## 5. Honest status of this hand-off

| Requirement | Status |
| --- | --- |
| Game runs | Code complete; logic verified headlessly (23/23). **Not yet clicked through in a real browser by a human.** |
| `style.css` | Complete |
| Agent file with unchanged tools line | Complete |
| Git history reflecting your steps | **Missing — yours to create** |
| `chat.json` | **Missing — export from your VS Code** |
| Screenshots | **Missing — take them in your session** |
| `report.pdf` | **Missing — write it from the outline** |
