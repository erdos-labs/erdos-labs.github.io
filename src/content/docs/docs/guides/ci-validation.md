---
title: Validate in CI
description: Run the same governance checks in a pipeline.
---

`erdos-validate` runs the editor's governance engine over a model folder. It prints GitHub annotations and exits `1` if there are errors, so it can gate a pull request.

## Locally

```bash
make validate REPO=path/to/model
```

This builds the CLI (`cd web && npm run build:cli`) and runs it. The built file is a single Node script, `web/dist-cli/erdos-validate.mjs`:

```bash
node web/dist-cli/erdos-validate.mjs path/to/model --standards path/to/standards
```

`--standards` takes the same folders as `ERDOS_STANDARDS_DIR`. The repository's own `standards/` folder is read as well.

## In a pipeline

Check out the erdos repository, build the CLI, and run it against your model repository. Because the engine is the same one the editor uses, a model that passes in the app passes in CI.
