---
title: dbt mapping
description: How dbt concepts map to DBML.
---

| dbt | DBML |
|---|---|
| model, seed, snapshot (`view` becomes `.view.dbml`; ephemeral is skipped) | Table |
| source table | `.source.dbml`, group is the `source_name` |
| `description` | `Note` / `note:` |
| `data_type`, else `catalog.json` | column type |
| `not_null`, `unique` (both on one column become `pk`), `primary_key` | settings, or a `[pk]` index |
| `accepted_values` | column `check: \`col IN (...)\`` |
| `relationships`, `foreign_key` | `ref: >` |
| `dbt_utils.unique_combination_of_columns` | composite `[unique]` index |
| `dbt_utils.expression_is_true` (model level) | `checks {}` |

Anything else dbt accepts on a model is kept in `<table>.dbt.yaml`; see [Import a dbt project](/docs/guides/import-dbt/).
