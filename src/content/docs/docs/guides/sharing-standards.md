---
title: Share standards
description: Reuse one set of standards across projects.
---

Shared standards are YAML files such as `naming.yaml` and `data-vault.yaml`. Any project lists them under `extends`. They can live in more than one place, and erdos merges them: when two have the same name the later one wins, and a project's own repository wins over the server.

| Where | How | When changes show up |
|---|---|---|
| **The project's repository** | a `standards/` folder at the repo root | with the next merge; nothing to deploy |
| **A mounted folder** | mount it anywhere and set `ERDOS_STANDARDS_DIR` (several folders separated by `:`) | on the next request; no restart |

In the app, *Standards → Overview* shows which shared standards a project follows and where each comes from, and *See everything that applies* shows the merged result. The CI validator reads the same folders.

The repository ships two examples in `examples/standards`: `naming.yaml` (snake case, documentation) and `data-vault.yaml` (hubs, links, satellites).
