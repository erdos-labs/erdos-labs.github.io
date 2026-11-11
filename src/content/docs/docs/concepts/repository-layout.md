---
title: Repository layout
description: How a model is laid out as files.
---

A model is a folder tree. The path tells erdos where each thing belongs.

```
governance.yaml                                     project standards
published.yaml                                      public views
dbdesign.yaml                                       description and source
<database>/<schema>/_schema.dbml                    enums, TablePartials
<database>/<schema>/[<group>/...]<name>.dbml        table
<database>/<schema>/[<group>/...]<name>.view.dbml   SQL view
<database>/<schema>/[<group>/...]<name>.source.dbml dbt source
<database>/<schema>/.../<name>.dbt.yaml             dbt properties for a table
<database>/_views/<name>.dbml                       saved diagram (DBML DiagramView)
<database>/_views/<name>.layout.json                node positions for that diagram
layout.json                                         positions for the whole-model sheet
```

## Rules of the layout

- Files use schema-qualified names, like dbdiagram: `Table marts.orders`.
- All files in a database share one namespace, so references across files need no imports.
- Saved diagrams are native DBML `DiagramView` blocks, so other DBML tools can still read them.
- Moving a table is saved with the branch, in `layout.json` for the whole model or next to the diagram, and committed like any other change.

## Example

A table in the Data Vault sample, `raw_vault/links/lnk_customer_order.dbml`:

```text
Table raw_vault.lnk_customer_order {
  hk_customer_order binary [pk]
  hk_customer binary [not null, ref: > raw_vault.hub_customer.hk_customer]
  hk_order binary [not null, ref: > raw_vault.hub_order.hk_order]
  ~dv_meta
}
```

`~dv_meta` includes a `TablePartial` defined in `_schema.dbml`, which adds the shared metadata columns.
