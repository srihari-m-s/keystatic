# Copilot Repo Instructions

Last-updated: 2025-11-30

Purpose: provide concise, actionable guidance to Copilot Chat sessions working on this repository.

Rules:

Quick checklist for Copilot Chat sessions:

Contact: create `HANDOFF.md` if you need to surface questions to the repo owner.
```instructions
# Copilot Repo Instructions

Last-updated: 2025-11-30

Purpose: provide concise, actionable guidance to Copilot Chat sessions working on this repository.

Rules:
- Read `PROJECT_PLAN.md` at the repository root and treat it as the authoritative project plan.
- Before making changes, summarize current progress by reading `PROJECT_PLAN.md` and the `src/` folder.
- When updating progress, check or uncheck items in `PROJECT_PLAN.md` and commit with clear messages (e.g., `chore: mark X complete`).
- Focus work on Phase 1 tasks listed in `PROJECT_PLAN.md` unless asked otherwise.
- Do not change `package.json` dependencies without confirming with the repository owner.
- Tailwind CSS and DaisyUI have been initialized — do not validate their presence in new Sessions.

Quick checklist for Copilot Chat sessions:
- Open and read `PROJECT_PLAN.md` and `keystatic.config.ts`.
- Assume Tailwind/DaisyUI are configured and available; do not run verification checks.
- Confirm Keystatic collections required for Phase 1; propose schema changes if needed.
- When finished with a task, update `PROJECT_PLAN.md` and commit.

Contact: open an issue or update `PROJECT_PLAN.md` if you need to surface questions to the repo owner.
