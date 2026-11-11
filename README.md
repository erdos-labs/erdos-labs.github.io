# erdos-labs.github.io

The site for [erdos](https://github.com/erdos-labs/erdos): a landing page at `/` and the documentation at `/docs/`. Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build), deployed to GitHub Pages.

With Nix (provides Node 22):

```bash
nix run             # dev server with live reload, http://localhost:4321
nix run .#preview   # the production build, as GitHub Pages serves it (search works here)
```

Without Nix, with Node 22:

```bash
npm install
npm run dev         # http://localhost:4321
npm run build       # type-checks, builds to dist/, builds the search index
npm run preview     # serve dist/
```

## Where things are

| Path | What |
|---|---|
| `src/pages/index.astro` | the landing page |
| `src/components/` | logo and the sample diagram on the landing page |
| `src/content/docs/docs/` | documentation, one Markdown file per page |
| `astro.config.mjs` | site config and the docs sidebar (add new pages here) |
| `src/styles/tokens.css` | brand colours and fonts, mirroring `web/src/theme.css` in the erdos repo |

The deploy workflow is `.github/workflows/pages.yml`; in the repository settings, set Pages to deploy from GitHub Actions.

When the app's behaviour changes, update the matching docs page in the same pull request.
