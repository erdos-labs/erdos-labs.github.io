---
title: Using the workspace
description: The explorer, diagrams, inspector and shortcuts.
---

The diagram grid is the base layer. The explorer and the inspector float over it as cards and resize by dragging their edge. The theme follows your OS and can be switched in the top bar.

## Explorer

The model as a database sees it: databases, schemas, tables and views, and under a table its columns, relationships and constraints. Files never appear. Hover a database or schema and use **+** to add a schema, a table, a view, a source, or any entity type from your standards.

## Diagrams

A diagram is a saved subset of the model (an "ensemble" in Data Vault terms), stored as a DBML `DiagramView`. Create one with **+** next to *Diagrams*: name it, then pick its tables. While one is open, every table in the explorer has a switch to add or remove it.

## Inspector

- **Properties:** description, columns with constraints and dbt tests, dbt fields, and a live YAML preview.
- **Source:** the DBML for the selected table.
- **Changes:** uncommitted edits, or the whole branch against `main`, with line diffs and a **Pull request summary**.
- **Problems:** findings from the standards.

## Wizards

Creating things (an entity, a diagram, a schema, a commit, an import or an export) walks through short steps and ends with a review.

## Shortcuts

| Key | Action |
|---|---|
| `B` | toggle the explorer |
| `I` | toggle the inspector |
| `F` | fit the diagram |
| `L` | auto-layout |
| `Esc` | clear the selection |

On the landing page: `/` finds a project, `s` opens shared standards, `p` opens published views and `t` switches theme.
