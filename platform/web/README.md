# Web / WebXR Platform

TypeScript + Vite + Three.js scaffold for Me-google xrOS (TASK-016).

## Purpose

Browser and Meta Quest Browser client. Shared domain models live in `../../core/`. This layer owns:

- WebXR Device API session management
- Spatial UI shell (Three.js scene — expanded in TASK-017)
- Theme token bridge
- Future local encrypted storage and anonymous sync clients

## Status

**TASK-016 scaffold complete.** Next:

- TASK-017 — Implement spatial UI shell (controllers, anchors, Three.js scene)
- TASK-018 — Integrate `core/` data models

## Layout

```
platform/web/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── main.ts
│   ├── xr/shell.ts
│   ├── ui/placeholder.ts
│   └── theme/tokens.ts
└── tests/
    └── shell.test.ts
```

## Running

```bash
cd platform/web
npm install
npm run dev          # Vite dev server
npm run typecheck
npm test
```

Privacy: no network calls in this scaffold; no PII. Role: Web/WebXR Engineer.
