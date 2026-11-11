---
title: What is erdos
description: An open-source entity relationship diagram tool that lives in git.
---

erdos is an open-source entity relationship diagram (ERD) tool. You draw and edit tables in a browser, but what is saved is [DBML](https://dbml.dbdiagram.io/), one plain file per table in a folder tree, so a data model can be branched, diffed and reviewed like code. It is built for teams that use dbt.

It is a single Go server with the web app embedded and no runtime dependencies. The storage backend and sign-in are pluggable.

New to entity relationship diagrams, or want to see how the usual terms map to erdos? Read [ERD concepts in erdos](/docs/concepts/erd-concepts/).

## What it gives you

- **A workspace.** A diagram canvas with an explorer and an inspector floating over it. Move tables, edit DBML with linting and completion, and see column properties, dbt tests and the diff for your branch.
- **Standards you can check.** Naming, documentation, keys and entity templates (hubs, links, marts) are declared in YAML. The app shows them read-only, and the same engine runs in CI. See [Governance and standards](/docs/guides/governance/).
- **dbt in and out.** Import a `manifest.json` to seed a model, keep dbt-only properties beside each table, and export dbt YAML. See [Import a dbt project](/docs/guides/import-dbt/).
- **Published views.** Share a diagram read-only, without login, or embed it in an iframe. See [Published views](/docs/guides/published-views/).

## How it fits with dbt

One erdos project corresponds to one dbt project. erdos keeps its model in a repository of its own, so nothing is added to your dbt repository. The link to dbt is descriptive: a project records where its dbt project lives, and the card shows it.

## Where to start

1. [Quick start](/docs/quick-start/) runs erdos locally with sample data.
2. [Projects](/docs/concepts/projects/) and [Repository layout](/docs/concepts/repository-layout/) explain how a model is stored.
3. [Configuration](/docs/reference/configuration/) lists every setting.

:::note
erdos is in early development. The local store works today. A GitHub store and single sign-on are planned; see the [roadmap](/docs/project/roadmap/).
:::
