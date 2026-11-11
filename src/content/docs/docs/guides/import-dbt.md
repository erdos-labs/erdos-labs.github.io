---
title: Import a dbt project
description: Seed a model from a dbt manifest, and export it back.
---

erdos reads a dbt `manifest.json` (and `catalog.json` for column types when you have it) and turns the models into DBML tables.

## Import

1. Generate a manifest in your dbt project: `dbt parse` is enough for most projects.
2. In the workspace, on a branch, choose **Import dbt manifest** and select the file.
3. erdos checks every table before writing anything. Tables that DBML cannot hold, most often seeds with no documented columns, are listed with the reason and left out by default. You can import them with a placeholder column instead.
4. Review and commit.

Importing again is a refresh from the manifest. See [dbt mapping](/docs/reference/dbt-mapping/) for how each dbt concept becomes DBML.

## Export

**Export** writes dbt YAML from the model. dbt-only properties kept beside a table in `<table>.dbt.yaml` are merged into the generated `schema.yml`. Generated tests are kept and yours are added.

## Keep dbt-only properties

DBML holds structure. Everything else dbt accepts on a model (`config`, `meta`, `tags`, `data_tests`, `columns.<name>.*`) lives in `<table>.dbt.yaml` next to the table.

Projects can define the fields their team fills in. They appear as a form in *Properties*. A key with dots nests, and a field can be text, a number, yes/no, a choice, a list, or free-form YAML or JSON. It can be saved under `meta`, under `config`, or at the top of the model.

```yaml
dbtFields:
  owner: { label: Owner, level: model, target: meta, required: true, scope: "*/marts/**" }
  contains_pii: { level: column, target: meta, type: boolean }
  dagster.group: { level: model, target: meta }            # saved as meta.dagster.group
  tags: { level: model, target: root, type: list }          # a top-level list
  materialized: { level: model, target: config, type: select, choices: [view, table, incremental] }
```

Required fields produce findings like any other rule.

:::note
erdos does not write into your dbt repository. The model lives in its own store. Write-back to dbt as a pull request is on the [roadmap](/docs/project/roadmap/).
:::
