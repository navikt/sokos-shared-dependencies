# Copilot Instructions for sokos-shared-dependencies

## Project Overview

CDN hosting repository for shared JavaScript dependencies used by microfrontends in sokos-utbetalingsportalen. Contains pre-bundled ESM modules (React, React-DOM, Scheduler) served from Nav CDN.

## Key Facts

- **No build step** — files are static `.mjs` bundles from esm.sh with rewritten import paths
- **No package.json** — this is not a Node.js project
- **Deployment** — push to `main` triggers automatic CDN upload via GitHub Actions
- **CDN URL pattern** — `https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/{package}/{version}/{file}.mjs`

## File Conventions

- All source files are `.mjs` (ES modules)
- Each package has versioned subdirectories: `packages/{name}/{version}/`
- `client.mjs` contains import rewrites pointing to CDN URLs for dependencies
- `react-dom.mjs` imports React via CDN URL (not relative path)
- Files start with `/* esm.sh - {package}@{version} */`

## Critical Rules

1. **Never delete old version directories** — other apps may depend on them
2. **Never modify files in existing version directories** — CDN caching means changes won't propagate
3. **Import paths in `client.mjs` and `react-dom.mjs` must be full CDN URLs**
4. **React and React-DOM versions must match** — scheduler version may differ
5. **No secrets, tokens or environment-specific values in `.mjs` files**

## When Adding a New Version

1. **Always check all three packages** (react, react-dom, scheduler) from esm.sh — even if only bumping React
2. esm.sh uses a two-step process: barrel file → actual bundle (the path in `from "..."` tells you the real URL)
3. Download bundles using `curl --noproxy '*' -s "https://esm.sh/{package}@{version}/es2022/{file}.mjs"`
4. Rewrite import statements in `client.mjs` and `react-dom.mjs` to use full CDN URLs
5. Verify version consistency across files

See `AGENTS.md` for detailed step-by-step instructions.
