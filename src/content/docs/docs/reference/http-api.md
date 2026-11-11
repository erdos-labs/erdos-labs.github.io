---
title: HTTP API
description: The REST endpoints the app uses.
---

The app talks to the server over a small JSON API. It is not yet a stable public interface and may change.

| Method and path | Role | Purpose |
|---|---|---|
| `GET /api/me` | any | the signed-in user and role |
| `GET /api/projects` | any | projects the user can see |
| `GET /api/standards` | any | shared standards the server provides |
| `GET /api/instance` | any | instance settings, such as whether public views are on |
| `GET /api/projects/{project}/branches` | viewer | list branches |
| `POST /api/projects/{project}/branches` | editor | create a branch |
| `DELETE /api/projects/{project}/branches/{name}` | editor | delete a branch |
| `GET /api/projects/{project}/snapshot?ref=` | viewer | all files at a ref |
| `GET /api/projects/{project}/summary` | viewer | model size and description, cached per revision |
| `GET /api/projects/{project}/published` | viewer | the project's published views |
| `POST /api/projects/{project}/commits` | editor | commit files to a branch; `409` if the branch moved |
| `POST /api/projects/{project}/reviews` | editor | open a review, if the store supports it |
| `GET /api/public/{project}/{view}` | none | a published view; only when public views are on |
| `GET /healthz` | none | liveness |
