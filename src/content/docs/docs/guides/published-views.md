---
title: Published views
description: Share a read-only diagram publicly or embed it.
---

A published view is a static, interactive diagram of the models you choose (all of them, or one diagram). It is served without login and can be embedded in an iframe, for documentation or sharing.

## Choose what is public

What is public is a versioned file, `published.yaml`, on the project's default branch. It changes through a normal branch and review, and nothing is public unless it is listed.

```yaml
views:
  - id: customer-overview      # the URL: /view/<project>/customer-overview
    title: Customer overview
    diagram: customer_overview # a diagram's name, or "all" for every model
```

In the workspace, a diagram's menu has **Publish as a public view…**.

## Switch it on

Public views are **off by default**. An operator turns them on with `ERDOS_PUBLIC_VIEWS=true`. Until then the project page and landing page show the views but they are not reachable.

The server answers `/api/public/<project>/<view>` with only the tables of that view. References to anything outside it are removed, and the rest of the repository is never exposed.

## Embed

```html
<iframe src="https://erdos.example.com/view/analytics/customer-overview?embed=1"></iframe>
```

Add `&theme=light` or `&theme=dark` to pick a theme. `ERDOS_EMBED_ORIGINS` says which sites may embed a view (default: any). The app itself can never be framed.
