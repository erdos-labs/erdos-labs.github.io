---
title: Governance and standards
description: Declare naming, documentation and structure rules as code.
---

Standards are managed as code. They are set in the project's `governance.yaml`, in a `standards/` folder in its repository, or in the server configuration, and they are **read-only in the app**. Nothing is switched on or off from the UI. *Standards* shows every rule in plain words, where it comes from, whether the model passes, the entity templates and the dbt fields.

## A project's governance.yaml

```yaml
extends: [naming, data-vault]   # shared standards from ERDOS_STANDARDS_DIR
enforce: true                   # optional: block commits while errors exist
rules:
  table-docs: { severity: error, scope: "*/marts/**" }   # override an inherited rule by id
  column-docs: { enabled: false }                        # or switch it off
  marts-pk: { kind: required, target: table, fields: [pk], scope: "*/marts/**" }
```

Every rule takes `severity`, `scope` and `exclude` (path globs), `message` (with a `{name}` placeholder) and `enabled`. See [Rule kinds](/docs/reference/governance-rules/) for what each kind checks.

## Entity types

The built-in types are **database, schema, table, view and source**. Customise any of them, or define your own (hub, link, a mart table). A type fixes where its entities live, how they are named, and what they start with: columns, shared `TablePartial`s, and which tables they must connect to. With `enforce`, it also checks every entity of the type.

```yaml
entityTypes:
  link:
    label: Link
    path: raw_vault/links          # entities here are governed by this type
    prefix: lnk_
    partials: [dv_meta]            # must already exist as a TablePartial
    parents: { match: "^hub_", min: 2, label: hub }
    columns:
      - { name: "hk_{name}", type: binary, pk: true }   # {name} = the name without its prefix
    enforce: { severity: error, requireDescription: true }
  table:                           # a built-in type, customised
    enforce: { case: snake }
```

A project overrides any inherited rule by id in its own `governance.yaml`.

## Where the engine runs

- **Editor:** squiggles in the DBML and a Problems list.
- **Canvas:** issue badges on table nodes.
- **CI:** `erdos-validate`. See [Validate in CI](/docs/guides/ci-validation/).

For sharing standards across projects, see [Share standards](/docs/guides/sharing-standards/).
