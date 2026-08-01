# Me-google

A multi-platform AI xrOS — an operating system extended into virtual reality, by the xr-intelligence group.

Enter your operating system and stay there as you operate in the real world. Place your favourites anywhere you want in the world, on multiple levels, and share your experience with others in real-time. Hosted anonymously using the same concepts as Samurai Wallet and Tor; privacy is the foundational structure.

## Vision

Me-google is a privacy-first, spatial-first operating system that lives across devices and into XR. Core principles:

- **Local-first** — your data stays on your device by default.
- **Anonymous by design** — no PII in network traffic; rotating unlinkable identities.
- **Spatial-first UI** — favourites, windows, and collaboration surfaces are 3D entities, not flat widgets.
- **Multi-platform** — shared core logic with native adapters for iOS/visionOS, Android/ARCore, WebXR, and Meta Quest.

See [docs/adr/ADR-001-system-architecture.md](docs/adr/ADR-001-system-architecture.md) for the full architecture decision.

## Repository layout

```text
Me-google/
├── core/             Platform-agnostic domain models, validation, serialization
├── platform/
│   ├── ios/          Swift / SwiftUI / RealityKit / visionOS
│   ├── android/      Kotlin / Jetpack Compose / ARCore
│   ├── web/          TypeScript / React / WebXR
│   └── quest/        Meta Quest theme system, Orb Collector game, QA
├── services/         Optional anonymous relay, rendezvous, sync microservices
├── docs/             ADRs, API references, architecture guides
├── scripts/          generate_tasks.py, reflect.py, theme_pipeline.py
└── reports/          Self-improvement reflection reports
```

## Getting started

### Prerequisites

- Git
- Python 3.10+ (for task tooling and reflection)
- Node.js 18+ / npm (for core TypeScript tests and Quest web game)
- Platform SDKs as needed (Xcode, Android Studio, etc.)

### Clone

```bash
git clone https://github.com/Bannon-github/Me-google.git
cd Me-google
```

(Or clone a fork and add the upstream remote.)

### Task system

The single source of truth for work is the automated task list:

```bash
python3 scripts/generate_tasks.py          # view prioritised open tasks
python3 scripts/generate_tasks.py --json   # machine-readable
python3 scripts/generate_tasks.py --write  # regenerate TASKS.md
```

Always read [TASKS.md](TASKS.md) and [AGENTS.md](AGENTS.md) before starting work. Prefer tasks whose dependencies are already marked done.

### Core models (TypeScript)

```bash
cd core
npm install   # if package.json present
npx tsc --noEmit
# run tests when available (session, spatial_item, user)
```

### Contributing

1. Read [AGENTS.md](AGENTS.md) for agent roles and workflow.
2. Read [CONTRIBUTING.md](CONTRIBUTING.md) (if present) for Conventional Commits, code style, and PR process.
3. Branch: `feat/TASK-XXX-short-description`
4. Implement, test, open PR titled `[TASK-XXX] Short description`.
5. After merge, regenerate tasks: `python3 scripts/generate_tasks.py --done TASK-XXX --write`

Privacy checklist (required for any networking or storage change) is documented in AGENTS.md and CONTRIBUTING.md.

## Project roadmap (high level)

| Phase | Focus | Key tasks |
|-------|--------|-----------|
| 1 Foundation | Architecture, monorepo scaffold, core models, anonymous networking ADR | TASK-001–007 (largely complete upstream) |
| 2 Platform shells | iOS/visionOS, Android/ARCore, WebXR spatial UI scaffolds + core integration | TASK-010–018 |
| 3 Privacy & sync | Anonymous identity layer, encrypted favourites storage, real-time sync protocol | TASK-005, 008, 009 |
| 4 Theme & QA | Second built-in theme, visual-regression baselines, ThemeManager wiring | THEME-002–005 |
| 5 Docs & DX | Expanded README, CONTRIBUTING, CI/CD | TASK-019, 020, 003 |

Detailed prioritised list lives in [TASKS.md](TASKS.md). Architecture decisions are recorded under `docs/adr/`.

## Meta Quest / WebXR demos

- **Chromabound** — Zelda-like experience (see GAME.md and root `index.html` / `game.js` when present upstream).
- **Orb Collector** — Meta Quest 3 spatial game under `platform/quest/game/`.
- Theme system, QA validators, and pipeline live under `platform/quest/`.

## License & privacy

Privacy is non-negotiable. No plaintext credentials, no cleartext identity on the wire, local data encrypted at rest. Review third-party dependencies for privacy policy compliance before adding them.

---

Built with agent collaboration. See [AGENTS.md](AGENTS.md) for how humans and AI agents work together on this project.
