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

Eksempel:
```
https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react/19.2.6/react.mjs
```

## Bumpe versjon

Sjekk alltid **alle tre pakker** (react, react-dom, scheduler) samtidig — selv om du bare skal bumpe React.

### 1. Sjekk siste versjon fra esm.sh

```bash
curl --noproxy '*' -s "https://esm.sh/react"
curl --noproxy '*' -s "https://esm.sh/react-dom"
curl --noproxy '*' -s "https://esm.sh/scheduler"
```

Responsen er en barrel-fil som viser versjonen og stien:
```javascript
/* esm.sh - react@19.2.6 */
export * from "/react@19.2.6/es2022/react.mjs";
export { default } from "/react@19.2.6/es2022/react.mjs";
```

Versjonen i kommentaren er siste tilgjengelige. Stien i `from "..."` forteller hvor den faktiske bundelen ligger.

### 2. Hent bundler (to-trinns)

esm.sh har en barrel-fil og en faktisk bundle. Du henter bundelen direkte fra stien i barrel-filen:

```bash
mkdir -p packages/react/{REACT_VERSJON} packages/react-dom/{REACT_VERSJON}

# React — hent fra stien vist i barrel-filen
curl --noproxy '*' -s "https://esm.sh/react@{REACT_VERSJON}/es2022/react.mjs" -o packages/react/{REACT_VERSJON}/react.mjs
curl --noproxy '*' -s "https://esm.sh/react@{REACT_VERSJON}/es2022/jsx-runtime.mjs" -o packages/react/{REACT_VERSJON}/jsx-runtime.mjs

# React-DOM
curl --noproxy '*' -s "https://esm.sh/react-dom@{REACT_VERSJON}/es2022/react-dom.mjs" -o packages/react-dom/{REACT_VERSJON}/react-dom.mjs
curl --noproxy '*' -s "https://esm.sh/react-dom@{REACT_VERSJON}/es2022/client.mjs" -o packages/react-dom/{REACT_VERSJON}/client.mjs

# Scheduler (kun hvis ny versjon)
mkdir -p packages/scheduler/{SCHEDULER_VERSJON}
curl --noproxy '*' -s "https://esm.sh/scheduler@{SCHEDULER_VERSJON}/es2022/scheduler.mjs" -o packages/scheduler/{SCHEDULER_VERSJON}/scheduler.mjs
```

> **Merk:** Stien (f.eks. `es2022`) kan variere mellom versjoner. Sjekk alltid barrel-filen fra steg 1 for korrekt sti.

### 3. Skriv om import-stier i `react-dom.mjs`

Filen har en import-linje som peker på en relativ esm.sh-sti. Erstatt den med full CDN URL:

```javascript
import * as __0$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react/{REACT_VERSJON}/react.mjs";
```

### 4. Skriv om import-stier i `client.mjs`

Filen har tre import-linjer. Erstatt alle med fulle CDN URL-er:

```javascript
import * as __0$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/scheduler/{SCHEDULER_VERSJON}/scheduler.mjs";
import * as __1$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react/{REACT_VERSJON}/react.mjs";
import * as __2$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react-dom/{REACT_VERSJON}/react-dom.mjs";
```

### 5. Verifiser

- Alle filer starter med `/* esm.sh - {pakke}@{versjon} */`
- Import-stiene peker på riktige versjoner
- React og React-DOM bruker samme versjon
- `client.mjs` refererer til korrekt `react-dom.mjs` i samme versjon

### 6. Push og sjekk CDN

Etter push: gå til [Nais Console → Team CDN Bucket](https://console.nav.cloud.nais.io/team/okonomi/settings) og verifiser at filene er lastet opp.

## Regler

- Bruk alltid `pnpm` i prosjekter som konsumerer disse filene — aldri `npm` eller `yarn`
- Ikke slett gamle versjonsmapper — andre apper kan fortsatt peke på dem
- Ikke endre eksisterende filer uten å bumpe versjon (CDN-caching)
- Alle `.mjs`-filer starter med en kommentar: `/* esm.sh - {pakke}@{versjon} */`
- Import-stier i `client.mjs` og `react-dom.mjs` må bruke fulle CDN URL-er, ikke relative stier

## Nåværende versjoner

| Pakke | Versjon |
|-------|---------|
| react | 19.2.6 |
| react-dom | 19.2.6 |
| scheduler | 0.27.0 |

## Workflow

GitHub Actions (`deploy.yaml`) laster opp hele `packages/`-mappen til Nav CDN ved push til `main`. Markdown-filer, LICENSE og .gitignore trigges ikke (paths-ignore).
