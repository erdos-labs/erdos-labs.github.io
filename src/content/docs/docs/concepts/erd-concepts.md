---
title: ERD concepts in erdos
description: The parts of an entity relationship diagram, and where each lives in erdos.
---

If you already know entity relationship diagrams, this page maps the vocabulary to erdos. If you don't, it is a short introduction.

An **entity relationship diagram (ERD)** shows the things a system stores and how they relate. Teams use one to design a database before building it, to understand an existing one, and to give technical and non-technical people a shared picture.

## The parts of an ERD

| ERD term | What it is | In erdos |
|---|---|---|
| **Entity** | A thing the business cares about: a customer, a product, an order | A table, a view or a dbt source: one `.dbml` file each. Your standards can give entities a type, such as hub, link or mart |
| **Attribute** | A property of an entity: a name, an email | A column, with a type, `not null`, a description (`note`), constraints and indexes |
| **Relationship** | How two entities connect: a customer places an order | A reference (`ref`) from a column to the column it points at, drawn as a line between the two columns |
| **Cardinality** | How many of one side relate to the other | The operator on the reference; see below |

## Cardinality

DBML writes cardinality in the reference operator:

| Operator | Meaning |
|---|---|
| `>` | many-to-one: many rows here point at one row there (the usual foreign key) |
| `<` | one-to-many |
| `-` | one-to-one |
| `<>` | many-to-many |

```text
Table raw_vault.lnk_customer_order {
  hk_customer binary [ref: > raw_vault.hub_customer.hk_customer]   // many links, one customer
}
```

erdos keeps the cardinality in the model. On the canvas, a one-to-one line is labelled `1:1` and a many-to-many line `n:n`. A many-to-one line, the common case, has no label. There are no crow's-foot symbols yet.

## Conceptual, logical and physical

ERDs are often drawn at three levels of detail:

| Level | Shows | Audience |
|---|---|---|
| **Conceptual** | The main business objects and how they relate, with no technical detail | Business stakeholders |
| **Logical** | Attributes, keys and business rules, still independent of any database | Analysts and modellers |
| **Physical** | Data types, constraints, indexes and schemas as the database builds them | Engineers |

Tools commonly keep these as separate drawings, each updated separately. erdos keeps **one model** and reads it at each level:

- **Conceptual:** a [saved diagram](/docs/guides/workspace/) holding only the key tables, such as an "ensemble" of the customer and its orders. Table descriptions say what each one means, and entity types from your [standards](/docs/guides/governance/) give them business roles (a hub is a business key). Publish the diagram to share it with people who will never open the app: see [Published views](/docs/guides/published-views/).
- **Logical:** primary keys, references and cardinality live in the model, and [governance rules](/docs/reference/governance-rules/) state the business rules around them: every mart has a key, every table is documented, names follow the convention.
- **Physical:** column types, `not null`, checks and indexes are in the same DBML files. [Importing a dbt manifest](/docs/guides/import-dbt/) brings in what is actually built, and the dbt export writes it back out.

:::note
There is no separate conceptual mode: every table on the canvas shows its columns, and a conceptual diagram is a small diagram of the key tables with descriptions. A control for the amount of detail shown on tables (names only, keys, all columns) is not implemented.
:::

## What teams use it for

- **Design before building.** Sketch tables on a branch, review the diff and the [pull request summary](/docs/concepts/branches-and-roles/), and merge when it is agreed.
- **Understand an existing model.** Import a dbt manifest to see what is there, and use the Problems list to find undocumented tables and missing keys.
- **Talk about it.** Publish a diagram, or share the summary of what a branch changes, so everyone discusses the same picture.
