# Report outline — 400–800 words of your own text

> Fill this in with **your** words. This outline gives structure, prompts and word budgets;
> it deliberately contains no sentences for you to copy. Screenshots do not count toward the
> word count. The report must be your own account of your own session.

**Target:** 400–800 words. Aim for ~650 so you have room to trim.
**Screenshots required:** 3–5 Copilot Chat interactions.

---

## 1. Setup and agent configuration (~150–200 words)

### 1.1 Copilot setup
Prompts to answer:
- When did you start the student verification, and how long did it take?
- Which documentation did you follow (VS Code setup page, GitHub student page)?
- Did Copilot sign-in, the Chat panel, or the agent file give you trouble? What exactly?

### 1.2 The custom agent
- What did you keep from the starter file without changing? (tools line, no-complete-code rule, git reminders)
- **What did you change and why?** (e.g. the predict-then-test loop: ask for a one-tick prediction, then test it)
- What teaching approach did you pick — Socratic hints, small snippets after two hints, explicit JavaScript vocabulary?
- Where does the agent file live, and how did you select it in the Chat panel? *(screenshot idea #1: the agent picker with `snake-tutor` selected)*

## 2. Development process (~200–300 words, 3–5 moments)

Pick **3–5 real moments**. For each, use this mini-template (60–80 words each):

> **Moment N — [step: movement / controls / growth / collision / improvement]**
> - What I asked the agent:
> - What it replied (screenshot):
> - What I predicted would happen in one tick:
> - What actually happened when I ran it:
> - Did I follow its guidance or find another solution?

Screenshot ideas (choose the ones you actually have):
1. Selecting the custom agent / its first reply about the predict-then-test loop.
2. The tutor refusing to write the whole game and redirecting you to one substep.
3. A hint that was wrong or incomplete, and your correction.
4. The reversal-prevention or timer discussion (this is where duplicate timers usually appear).
5. Inline ghost-text suggestion vs. the Chat answer, side by side.

## 3. Reflection (~250–350 words)

Answer each question in 1–3 sentences:

- **Agent configuration → behaviour.** How did the predict-then-test instruction change the
  shape of the conversation compared with a normal "fix my code" prompt?
- **JavaScript concepts from the lectures.** Name the specific ones you used and point to the
  line or function: e.g. `setTimeout` recursion vs `setInterval`, array methods
  (`unshift`, `pop`, `some`, `slice`), objects and references, `addEventListener` and
  `event.key`, boolean state flags (`status`), `localStorage` + `try/catch`.
- **New or unfamiliar concepts.** Which ones were new? What kind of explanation made them click
  — an analogy, a trace through one tick, or a `console.log` experiment?
- **Chat agent vs inline suggestions.** A concrete example: what did ghost text offer while you
  were typing, and how did it differ from the tutor's answer?
- **Something incorrect or unhelpful.** Be specific about one suggestion and how you caught it.
- **What you would change in the agent configuration** next time.
- **Where Copilot + `.agent.md` sits** on the chatbot → assistant → AI-IDE → agent scale, and
  whether the control–automation balance shifts compared with plain Copilot. Argue a position;
  do not just list categories.

---

## Pre-submission self-checks for the report

- [ ] 400–800 words of my own prose (check with the word counter, screenshots excluded)
- [ ] 3–5 screenshots, each with a caption saying which step it belongs to
- [ ] Every screenshot shows a real Chat panel interaction from my own session
- [ ] Exported to `report.pdf` (not `.docx`, not a shared link)
- [ ] No section is copied from an AI answer without my own analysis around it
