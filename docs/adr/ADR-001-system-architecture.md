# ADR-001 — Overall System Architecture

- **Status:** Proposed
- **Date:** 2026-07-24
- **Deciders:** Architect role (Grok agent contribution)
- **Related:** ADR-003 (theme system), TASK-001, TASK-002, TASK-004, TASK-007
- **Supersedes / Superseded by:** —

## Context

Me-google is a multi-platform AI xrOS — an operating system extended into virtual and augmented reality. Users enter their OS, persist identity and state across real-world movement, place favourites spatially across multiple layers, share experiences in real-time, and do all of this with privacy as the foundational guarantee (inspired by Samurai Wallet + Tor anonymity models).

The system must support:
- iOS / visionOS (Swift, SwiftUI, RealityKit)
- Android / ARCore (Kotlin, Jetpack Compose)
- Web / WebXR (TypeScript, React, Three.js / Babylon.js)
- Meta Quest (Horizon OS / WebXR)

Core requirements from the project vision:
1. **Privacy-first** — no user data leaves the device without explicit consent; anonymous networking by default.
2. **Spatial-first UI** — all UI components designed for 3D space.
3. **Multi-platform** with shared core logic.
4. **Real-time collaboration** with low-latency sharing.
5. **Modular & composable** features.

This ADR establishes the high-level module boundaries, data flow, and technology choices so that subsequent tasks (scaffolding, data models, networking, platform shells) have a clear target architecture.

## Decision

### 1. Layered Architecture

```
┌─────────────────────────────────────────────────────┐
│                  Platform Layer                       │
│  (ios / android / web / quest — spatial UI shells)   │
├─────────────────────────────────────────────────────┤
│                  Core Logic Layer                     │
│  (Spatial Item, User, Session, Favourites, Themes)   │
├─────────────────────────────────────────────────────┤
│               Services / Networking Layer             │
│  (Anonymous identity, E2E sync, Tor/I2P routing)      │
├─────────────────────────────────────────────────────┤
│                  Storage Layer                        │
│  (Local encrypted store, optional anonymous remote)  │
└─────────────────────────────────────────────────────┘
```

- **Platform Layer** (`platform/*`): thin, platform-native shells that render spatial UI and bind to core models. No business logic.
- **Core Logic Layer** (`core/`): pure, platform-agnostic data models, algorithms, and state machines. Fully unit-tested.
- **Services Layer** (`services/`): anonymous networking, identity, real-time sync protocol. Privacy review required for every change.
- **Storage Layer**: local-first encrypted persistence; remote only via anonymous channels.

### 2. Core Domain Models (high-level)

| Model | Responsibility |
|-------|----------------|
| **SpatialItem** | A placeable favourite / object with 3D pose (position, orientation, scale), layer, metadata, and optional content payload. |
| **User** | Anonymous identity (public key / session ID only). No PII. |
| **Session** | Active presence in a shared spatial context; manages connected peers and live updates. |
| **Theme** | DTCG token set + accessibility overrides (see ADR-003). |
| **FavouritesStore** | Encrypted local collection of SpatialItems belonging to the user. |

Exact schemas are deferred to TASK-004.

### 3. Privacy & Networking Principles

- All network traffic is routed through an anonymity layer (Tor / I2P / custom onion-style). See TASK-007.
- User identity is a cryptographic keypair generated on-device; never a username, email, or device ID.
- Real-time sync uses end-to-end encrypted channels; the relay nodes see only ciphertext and ephemeral circuit IDs.
- Local storage is encrypted at rest (platform keystore / Secure Enclave / Keystore).

### 4. Directory Targets (from TASK-002)

```
Me-google/
├── core/                 # shared models + tests
├── platform/
│   ├── ios/
│   ├── android/
│   ├── web/
│   └── quest/             # already partially present (theme system)
├── services/             # anonymous networking + sync
├── docs/adr/             # architecture decision records
├── scripts/              # generate_tasks.py, reflect.py, theme_pipeline.py
└── .github/              # agent instructions, rules, skills, workflows
```

### 5. Agent Collaboration

Agents follow `AGENTS.md`. Critical tasks (architecture, scaffolding, core models, privacy research) take priority. Every PR references a TASK-ID and updates `TASKS.md` after merge.

## Consequences

**Positive**
- Clear separation of concerns enables parallel work by different agent roles.
- Privacy is structural, not bolted on.
- Shared core maximises code reuse across platforms.

**Negative / trade-offs**
- Thin platform shells require disciplined API design in core to avoid leaky abstractions.
- Anonymous networking introduces latency; real-time collaboration must budget for it (TASK-009).

## Alternatives considered

- **Monolithic per-platform apps** — rejected; violates multi-platform shared-logic principle and makes privacy guarantees harder to audit.
- **Centralised identity server** — rejected; violates privacy-first foundation.
- **Fully decentralised DHT without anonymity layer** — rejected for initial version; anonymity is non-negotiable.

## Next Steps

1. TASK-002: Scaffold the directory structure with README.md stubs.
2. TASK-004: Implement concrete data models and unit tests.
3. TASK-007: Research and document the concrete anonymous networking approach.
4. Platform scaffolding tasks (TASK-010, TASK-013, TASK-016) can proceed once directories exist.
