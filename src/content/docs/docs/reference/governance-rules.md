---
title: Rule kinds
description: What each governance rule kind checks.
---

Every rule takes `severity` (`error`, `warn` or `info`), `scope` and `exclude` (path globs), `message` (with a `{name}` placeholder) and `enabled`.

| Kind | Checks |
|---|---|
| `naming` | `target` is one of schema, table, view, source, group, column, index or check. Supports `case`, `prefix`, `suffix`, `pattern`, `maxLength`, `reserved`, and a column filter `where: {pk, fk, type, name, fromPartial}` |
| `required` | table `note` or `pk`; column `note` or `type` |
| `required-columns` | columns that must exist, optionally with a type pattern |
| `types` | allowed or denied type patterns, optionally only for columns matching `where` |
| `fk-naming` | foreign key name template, such as `{to.column}` or `{to.table}_id` |
| `references` | how many tables matching `to` an entity must reference (`min`, `max`) |
| `partials` | `TablePartial`s an entity must include, such as `dv_meta` |

## Example

```yaml
rules:
  marts-pk:
    kind: required
    target: table
    fields: [pk]
    scope: "*/marts/**"
    severity: error
  column-docs:
    kind: required
    target: column
    fields: [note]
    scope: "*/marts/core/**"
    severity: info
```

New kinds are added in code: implement `RuleKind` and call `registerRuleKind` (see [Architecture](/docs/project/architecture/)).
