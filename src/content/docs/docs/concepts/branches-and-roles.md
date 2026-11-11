---
title: Branches and roles
description: How editing, protection and permissions work.
---

Every change happens on a branch. `main` (the default branch) is never writable from the app, so work is reviewed before it lands.

## Roles

A person's effective role is the project override for their login, else the `*` override, else the global role.

| Role | Can |
|---|---|
| `viewer` | view and export |
| `editor` | write to `u/<login>/*` branches only |
| `admin` | write to any unprotected branch |
| `none` | the project is hidden from that person |

Roles per project are set in the projects file:

```json
{ "projects": [ { "id": "analytics", "name": "Analytics DW",
    "store": { "driver": "local", "options": { "root": "/data/analytics" } },
    "roles": { "*": "viewer", "alice": "admin" } } ] }
```

## Concurrent edits

Commits carry a `parentSha`. If the branch moved since you loaded it, the server returns `409` and the app asks you to reload, so edits are not silently overwritten.

## Pull request summary

From the **Changes** tab, erdos writes a rule-based summary of what the branch changes compared with `main`, in model terms: tables added, changed or removed with their column changes, relationships, diagrams and standards impact. It is deterministic, not AI, and it only describes the diff; the rest of the pull request process is up to your team.
