---
title: Roadmap
description: What works today and what is planned.
---

## Today

- Local store, multi-project, branches, and protected `main`.
- DBML editing with linting, completion and hover; canvas with saved layouts and diagrams.
- Governance rules, entity types and dbt fields, in the app and in CI.
- dbt manifest import and dbt YAML export.
- Rule-based pull request summaries.
- Published views, off until an operator enables them.
- Themeable with a CSS file.

## Planned

1. **GitHub store:** snapshots, commits, pull requests and a webhook, using the signed-in person's own GitHub token.
2. **Sign-in:** GitHub login mapped to roles, then OIDC with group-to-role mapping per project.
3. **Form editing** of columns and constraints, and quick fixes for governance findings.
4. **SQL DDL** import and export; parsing in a Web Worker for very large projects.
5. **Branch diff** to migration SQL, shown on the canvas.
6. **Connected dbt projects:** read structure from a manifest committed in the dbt repository or produced by a `dbt parse` sidecar, then write agreed fields back to dbt YAML as a pull request.
7. **A hosted demo** built from the sample projects.

The roadmap is a direction, not a promise. Follow [the issues](https://github.com/erdos-labs/erdos/issues) for what is in progress.
