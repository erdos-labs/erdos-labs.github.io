---
title: Configuration
description: Every environment variable the server reads.
---

The server is configured with environment variables.

| Variable | Default | Meaning |
|---|---|---|
| `ERDOS_ADDR` | `:8080` | listen address |
| `ERDOS_PROJECTS_FILE` | none | JSON file listing projects; see [Projects](/docs/concepts/projects/) |
| `ERDOS_STORE` | `local` | store driver for the single default project |
| `ERDOS_STORE_*` | none | driver options, for example `ERDOS_STORE_ROOT=./data` becomes `{"root": "./data"}` |
| `ERDOS_AUTH` | `none` | auth provider |
| `ERDOS_AUTH_*` | none | provider options, for example `ERDOS_AUTH_ROLE=viewer` |
| `ERDOS_DEFAULT_BRANCH` | `main` | the protected default branch |
| `ERDOS_STANDARDS_DIR` | none | shared standards folders, separated by `:`; later wins |
| `ERDOS_PUBLIC_VIEWS` | off | set to `true` to serve [published views](/docs/guides/published-views/) |
| `ERDOS_EMBED_ORIGINS` | `*` | origins allowed to embed a published view |
| `ERDOS_THEME_FILE` | none | CSS file served as `/theme.css` |

With `ERDOS_AUTH=none` everyone is signed in as one user with the role in `ERDOS_AUTH_ROLE`. Use it for local trials only.

## Health check

`GET /healthz` returns `ok`.
