# Services Layer

Anonymous networking, identity, and real-time sync micro-services for Me-google xrOS.

## Purpose

This directory holds the **Services / Networking Layer** as defined in ADR-001:

- Anonymous identity generation and management (no PII)
- End-to-end encrypted real-time sync protocol
- Tor / I2P / custom anonymity routing
- Relay and circuit management (privacy-preserving)

## Privacy & Security Requirements (from AGENTS.md)

- No plaintext credentials or tokens in source
- User identity is never sent in cleartext over the network
- New network endpoints must be documented in `docs/api/`
- Data stored locally is encrypted at rest
- Third-party dependencies reviewed for privacy policy compliance

## Status

Scaffolded as part of **TASK-A008** (auto-detected gap).

Next related tasks:
- TASK-007 — Research and document anonymous networking approach
- TASK-008 — Implement anonymous identity layer
- TASK-009 — Design real-time sync protocol

## Directory Layout (planned)

```
services/
├── README.md          # this file
├── identity/          # keypair generation, session IDs
├── networking/        # anonymity layer adapters
├── sync/              # E2E encrypted spatial item sharing
└── tests/
```

Role: Privacy/Networking Engineer
