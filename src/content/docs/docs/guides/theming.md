---
title: Theming
description: Restyle the app with a CSS file, without rebuilding.
---

Every colour in the app is a CSS variable, defined in `web/src/theme.css`. Dark is a deep green and light is warm neutrals.

To bring your own theme, serve a CSS file as `/theme.css` by setting `ERDOS_THEME_FILE`. It loads after the built-in theme, so it only lists the tokens it changes:

```css
:root[data-theme='dark']  { --bg: #0f1419; --select: #7aa2f7; }
:root[data-theme='light'] { --bg: #ffffff; --select: #2563eb; }
```

## Surfaces, back to front

| Token | Used for |
|---|---|
| `--bg` | the diagram canvas |
| `--bar-bg` | the top and bottom bars |
| `--surface` | floating panels, dialogs, cards |
| `--surface-2` | raised things inside them, such as table nodes |

Text uses `--ink`, `--ink-2` and `--ink-3`; keep `--ink-3` at 4.5:1 or better on `--surface`. The accent is `--select` (and `--select-ink` when used as text); primary buttons use `--primary`.
