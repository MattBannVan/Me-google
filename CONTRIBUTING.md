# Contributing to Me-google

Thank you for contributing to **Me-google**, a multi-platform AI xrOS built around privacy-first, spatial-first design.

This guide covers how humans and AI agents collaborate on the project. For agent-specific roles and automation, also read [`AGENTS.md`](./AGENTS.md) and [`.github/copilot-instructions.md`](./.github/copilot-instructions.md).

---

## Before you start

1. Read the [README](./README.md) for project vision.
2. Read [`AGENTS.md`](./AGENTS.md) for roles, workflow, and the privacy checklist.
3. Check [`TASKS.md`](./TASKS.md) for prioritised open work. Prefer tasks whose dependencies are already marked done.
4. Search open pull requests and issues to avoid duplicating work.

---

## Workflow

```
1. PLAN   → Read TASKS.md. Choose an open task whose dependencies are satisfied.
2. BRANCH → git checkout -b feat/TASK-XXX-short-description
3. BUILD  → Implement in small commits (Conventional Commits).
4. TEST   → Add or update tests. Run the relevant platform test suite.
5. PR     → Open a PR titled: [TASK-XXX] Short description
6. REVIEW → Address review comments from agents or humans.
7. MERGE  → Prefer squash-merge. After merge, regenerate TASKS.md if needed.
```

### Claiming work

- Comment on the related issue or open a draft PR so others know the task is claimed.
- No single contributor should hold more than **three** open tasks at once.
- If blocked, mark the task status as `blocked` in the task system and explain why.

---

## Commit messages (Conventional Commits)

Every commit must begin with a type prefix:

| Prefix | Use for |
|--------|--------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation only |
| `refactor:` | Code change with no feature or fix |
| `test:` | Tests only |
| `chore:` | Tooling, dependencies, CI |
| `ci:` | CI configuration |
| `perf:` | Performance improvement |
| `research:` | Research / investigation notes |

Examples:

```
docs: [TASK-020] add CONTRIBUTING.md with code style guide and PR process
feat: [TASK-005] implement encrypted local favourites storage
test: [TASK-006] add unit tests for core session model
```

PR titles must include the task ID when applicable: `[TASK-XXX] Short description`.

---

## Code style and standards

- **Languages**: Swift (iOS/visionOS), Kotlin (Android), TypeScript strict (web / shared core).
- **Shared logic** lives in `core/` and must ship with unit tests.
- **No hard-coded credentials, tokens, or device identifiers** anywhere in the tree.
- Prefer small, focused modules. Keep source files under ~500 lines when practical.
- Every new module directory under `core/`, `services/`, or `platform/` should include a `README.md` describing purpose, public API, and how to run tests.
- When adding a source file in `core/` or `services/`, add a corresponding test file in the same change.

### Privacy & security (required for networking or storage changes)

- [ ] No plaintext credentials or tokens in source
- [ ] User identity is never sent in cleartext over the network
- [ ] New network endpoints documented under `docs/api/`
- [ ] Data stored locally is encrypted at rest
- [ ] Third-party dependencies reviewed for privacy policy compliance

---

## Pull requests

- Keep PRs small and focused on one task when possible.
- Reference the task ID in the title.
- Describe what changed, which role you acted under, and how you tested.
- Leave review comments on anything that touches privacy or spatial UI layers.
- After merge, the Task Manager (or the merging agent) should run:

  ```bash
  python3 scripts/generate_tasks.py --done TASK-XXX --write
  ```

  and commit the updated `TASKS.md` when appropriate.

---

## Architecture decisions

Significant design choices belong in `docs/adr/ADR-XXX-title.md` **before** large implementation work. Existing ADRs cover system architecture, anonymous networking, the theme system, Quest UI standards, accessibility, QA, and the theme pipeline.

---

## Tooling agents may use

```bash
# Current prioritised task list
python3 scripts/generate_tasks.py
python3 scripts/generate_tasks.py --json
python3 scripts/generate_tasks.py --write
python3 scripts/generate_tasks.py --done TASK-XXX --write

# Self-improvement reflection (rules, skills, report)
python3 scripts/reflect.py run-all
python3 scripts/reflect.py report
```

Derived rules and skills live under `.github/rules/` and `.github/skills/`. High-severity rules are injected into `.github/copilot-instructions.md`.

---

## Questions and coordination

- Open a GitHub Issue tagged `question` and mention the relevant agent role from `AGENTS.md`.
- Prefer discussion in the PR for review feedback.

Thank you for helping build a private, spatial operating system.
