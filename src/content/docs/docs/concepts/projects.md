---
title: Projects
description: One erdos project is one dbt project and its model.
---

A project is the unit you open in erdos: one dbt project and the erdos model for it. The operator lists projects in a JSON file (`ERDOS_PROJECTS_FILE`). Each entry says where erdos keeps its files (`store`) and, optionally, where the dbt project lives (`source`).

```yaml
projects:
  - id: analytics
    name: Analytics
    description: Revenue and customer models        # optional
    source: { url: https://github.com/acme/analytics, path: dbt/analytics, ref: main }
    store: { driver: local, options: { root: /data/analytics } }
```

## What the landing page shows

Each project is a row with its description, source repository, model size (databases, schemas, tables), when `main` last changed, and a **Continue** shortcut to your most recently updated branch.

The description and source can also come from the project's own `dbdesign.yaml` (`description`, `source`, `source_path`, `source_ref`), so they travel with the model. When both are set, the server configuration wins.

## The project dashboard

At `/projects/<id>`:

- **Overview:** models, databases, schemas and diagrams; the branch count and the revision of `main`; a catalog of everything on `main`; and the standards status.
- **Branches:** find, open and create branches.
- **Standards:** the project's standards, read-only.
- **Published views:** the public diagrams the project publishes, with links and embed code.

Commits and contributors appear when the store can report them. The local store cannot.
