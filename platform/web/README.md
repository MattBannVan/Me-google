# Web / WebXR Platform

TypeScript, React, and WebXR implementation for Me-google xrOS.

## Purpose

This directory holds the **Web / WebXR client** that runs in browsers and Meta Quest Browser (and other WebXR-capable runtimes).

Shared core logic lives in `core/`; this platform layer provides:

- WebXR Device API session management
- Spatial UI shell (Three.js / Babylon.js or equivalent)
- Theme system integration (via Quest theme tokens where applicable)
- Local encrypted favourites storage bridge
- Anonymous real-time sync client (when services/ layer is available)

## Guiding Principles (from project)

1. **Privacy-first** — no user data leaves the device without explicit consent.
2. **Spatial-first UI** — all UI designed for 3D space, not flat 2D adaptations.
3. **Modular** — features are self-contained modules.

## Status

Scaffolded as part of **TASK-A016** (auto-detected gap).

Next related tasks:
- TASK-016 — Scaffold TypeScript/React WebXR project (package.json, Vite, etc.)
- TASK-017 — Implement spatial UI shell using WebXR Device API + Three.js / Babylon.js
- TASK-018 — Integrate core data layer into web app

## Planned Layout

```
platform/web/
├── README.md          # this file
├── package.json
├── tsconfig.json
├── src/
│   ├── main.ts
│   ├── xr/
│   ├── ui/
│   └── theme/
└── tests/
```

## Running (once scaffolded further)

```bash
cd platform/web
npm install
npm run dev
```

Role: Web/WebXR Engineer
