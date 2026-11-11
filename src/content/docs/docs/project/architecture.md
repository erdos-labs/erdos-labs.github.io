---
title: Architecture
description: How erdos is built and where it can be extended.
---

```
Browser                                                Go server (stdlib only)
┌──────────────────────────────────────────┐   REST   ┌─────────────────────────────┐
│ workspace: canvas · explorer · inspector │ ──────▶ │ project.Registry (projects) │
│ model/       DBML ⇄ IR, views, layout    │          │   └ store.Store (registry)  │──▶ local fs | GitHub | …
│ governance/  rules engine (+ CLI for CI) │ ◀────── │ auth.Provider   (registry)  │
│ language/    lint · completion · hover   │          │ policy · standards folders  │
│ interop/     dbt import/export           │          └─────────────────────────────┘
└──────────────────────────────────────────┘
```

The server is Go standard library only. The web app is React and TypeScript, built with Vite and embedded in the binary. DBML is parsed with `@dbml/parse`, and the canvas uses `@xyflow/react`.

## Extension points

Each of these sits behind a small interface and a registry, so a backend can be added without touching the rest.

| Change | Implement | Register |
|---|---|---|
| Storage backend | `store.Store` (and optionally `store.Reviewer`) | `store.Register` in `init()`, blank-imported in `main.go` |
| Auth or SSO | `auth.Provider` (`Identify`, and `Routes` under `/auth/`) | `auth.Register` |
| Import or export format | `interop.Importer` (to the IR) or `interop.Exporter` (from it) | `web/src/interop/index.ts` |
| Governance rule | `governance.RuleKind` | `registerRuleKind` |
| DBML parser | `model.ModelParser` | `defaultParser` |

The language service (`diagnostics`, `complete`, `hover`) is editor-agnostic, so it could later be wrapped in a language server for VS Code.
