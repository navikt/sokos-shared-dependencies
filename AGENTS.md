# AGENTS.md — sokos-shared-dependencies

CDN-hosting av delte JavaScript-avhengigheter (React, React-DOM, Scheduler) for mikrofrontender i sokos-utbetalingsportalen. Filene serveres fra Nav CDN og brukes via importmap.

## Kom i gang

Repoet har ingen build-steg. Du legger til filer og pusher til `main` — GitHub Actions laster opp til CDN automatisk.

```bash
git clone https://github.com/navikt/sokos-shared-dependencies
# Gjør endringer i packages/
git add . && git commit && git push
# Workflow laster opp til CDN innen ~1 minutt
```

## Mappestruktur

```
packages/
  react/{versjon}/
    react.mjs           # Hoved-bundle
    jsx-runtime.mjs     # JSX runtime
  react-dom/{versjon}/
    react-dom.mjs       # Hoved-bundle
    client.mjs          # Client entry (med import-rewriting)
  scheduler/{versjon}/
    scheduler.mjs       # React scheduler
```

Hver pakke har en mappe per versjon. Gamle versjoner slettes **ikke** — de kan fortsatt være i bruk.

## CDN URL-mønster

```
https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/{pakke}/{versjon}/{fil}.mjs
```

## Bumpe versjon

Sjekk alltid **alle tre pakker** (react, react-dom, scheduler) samtidig — selv om du bare skal bumpe React.

For detaljert steg-for-steg: se `.github/skills/bump-shared-dependencies/SKILL.md`.

### Kort oppsummering

1. **Sjekk versjoner** — `curl --noproxy '*' -s "https://esm.sh/react"` (les versjon fra kommentaren)
2. **Hent bundler** — esm.sh har en to-trinns prosess: barrel-fil viser sti → hent faktisk bundle fra den stien
3. **Skriv om imports** — erstatt relative esm.sh-stier med fulle CDN URL-er i `react-dom.mjs` og `client.mjs`
4. **Verifiser** — riktige versjoner, alle filer på plass
5. **Commit og push manuelt** — agenter gjør ikke dette; workflow laster opp til CDN automatisk

### Import-rewriting

`react-dom.mjs` — én import:
```javascript
import * as __0$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react/{REACT_VERSJON}/react.mjs";
```

`client.mjs` — tre imports:
```javascript
import * as __0$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/scheduler/{SCHEDULER_VERSJON}/scheduler.mjs";
import * as __1$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react/{REACT_VERSJON}/react.mjs";
import * as __2$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react-dom/{REACT_VERSJON}/react-dom.mjs";
```

## Regler

- **Agenter må aldri kjøre `git commit` eller `git push` i dette repoet** — commit og push gjøres alltid manuelt av utvikleren
- Bruk alltid `pnpm` i prosjekter som konsumerer disse filene — aldri `npm` eller `yarn`
- Ikke slett gamle versjonsmapper — andre apper kan fortsatt peke på dem
- Ikke endre eksisterende filer uten å bumpe versjon (CDN-caching)
- Alle `.mjs`-filer starter med en kommentar: `/* esm.sh - {pakke}@{versjon} */`
- Import-stier i `client.mjs` og `react-dom.mjs` må bruke fulle CDN URL-er, ikke relative stier

## Nåværende versjoner

| Pakke | Versjon |
|-------|---------|
| react | 19.2.8 |
| react-dom | 19.2.8 |
| scheduler | 0.27.0 |

## Workflow

GitHub Actions (`upload.yaml`) laster opp `packages/`-mappen til Nav CDN ved push til `main`. Workflowen trigges kun ved endringer i `packages/`.
