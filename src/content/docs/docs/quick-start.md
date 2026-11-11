---
title: Quick start
description: Run erdos locally with the sample projects.
---

## With Nix

The repository has a flake that provides Go, Node and make.

```bash
git clone https://github.com/erdos-labs/erdos.git
cd erdos
nix run .#dev
```

This starts the API on `:8080` and the web app on `:5173` with hot reload. Open <http://localhost:5173>.

## Without Nix

You need Go and Node 22.

```bash
make build
ERDOS_PROJECTS_FILE=examples/projects.json \
ERDOS_STANDARDS_DIR=examples/standards \
./bin/erdos
```

Open <http://localhost:8080>. The web app is embedded in the binary.

## Try the samples

The default project is empty. To see a populated model, run the sample projects instead:

```bash
make dev-api-samples
```

This serves a Data Vault project (hubs, links, satellites, marts) and a small sandbox project.

## First steps in the app

1. Open a project from the landing page. `main` is read-only, so choose **New branch**.
2. Use **New database**, or **Import dbt manifest**, to start a model.
3. Add tables from the **+** next to a database or schema in the explorer.
4. Open the **Changes** tab to see what your branch changes, then commit.

## Check the model like CI would

```bash
make validate REPO=examples/samples/data-vault/main
```

This runs the governance rules against the sample and exits non-zero if there are errors. See [Validate in CI](/docs/guides/ci-validation/).
