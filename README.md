# sokos-shared-dependencies

CDN-hosting av delte JavaScript-avhengigheter for mikrofrontender i [sokos-utbetalingsportalen](https://github.com/navikt/sokos-utbetalingsportalen). Filene serveres fra Nav CDN og brukes via importmap.

## Hvordan det fungerer

Repoet har ingen build-steg. Du legger til `.mjs`-filer i `packages/` og pusher til `main` — GitHub Actions laster opp til CDN automatisk.

**CDN URL-mønster:**
```
https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/{pakke}/{versjon}/{fil}.mjs
```

## Pakker

| Pakke | Filer | Kilde |
|-------|-------|-------|
| react | `react.mjs`, `jsx-runtime.mjs` | [esm.sh/react](https://esm.sh/react) |
| react-dom | `react-dom.mjs`, `client.mjs` | [esm.sh/react-dom](https://esm.sh/react-dom) |
| scheduler | `scheduler.mjs` | [esm.sh/scheduler](https://esm.sh/scheduler) |

## Bumpe versjon

### Med Copilot (anbefalt)

Be agenten om å gjøre jobben:

```
Bump react til nyeste versjon
```

Agenten sjekker alle tre pakker (react, react-dom, scheduler), laster ned bundler fra esm.sh, skriver om import-stier og oppdaterer dokumentasjonen. Se `.github/skills/bump-shared-dependencies/` for detaljer.

### Manuelt

#### 1. Sjekk siste versjon

Gå til disse URL-ene og les versjonen fra kommentaren på første linje:

- https://esm.sh/react → `/* esm.sh - react@19.2.6 */`
- https://esm.sh/react-dom → `/* esm.sh - react-dom@19.2.6 */`
- https://esm.sh/scheduler → `/* esm.sh - scheduler@0.27.0 */`

#### 2. Hent bundler (to-trinns)

esm.sh gir deg først en barrel-fil som viser stien til den faktiske bundelen:

```
/* esm.sh - react@19.2.6 */
export * from "/react@19.2.6/es2022/react.mjs";
```

Hent den faktiske filen fra stien vist i `from "..."`:

```bash
mkdir -p packages/react/19.2.6 packages/react-dom/19.2.6

# React
curl -s "https://esm.sh/react@19.2.6/es2022/react.mjs" -o packages/react/19.2.6/react.mjs
curl -s "https://esm.sh/react@19.2.6/es2022/jsx-runtime.mjs" -o packages/react/19.2.6/jsx-runtime.mjs

# React-DOM
curl -s "https://esm.sh/react-dom@19.2.6/es2022/react-dom.mjs" -o packages/react-dom/19.2.6/react-dom.mjs
curl -s "https://esm.sh/react-dom@19.2.6/es2022/client.mjs" -o packages/react-dom/19.2.6/client.mjs

# Scheduler (kun hvis ny versjon)
curl -s "https://esm.sh/scheduler@0.27.0/es2022/scheduler.mjs" -o packages/scheduler/0.27.0/scheduler.mjs
```

> Stien (f.eks. `es2022`) kan variere mellom versjoner. Sjekk alltid barrel-filen.

#### 3. Skriv om import-stier

`react-dom.mjs` — erstatt første import med full CDN URL:
```javascript
import * as __0$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react/19.2.6/react.mjs";
```

`client.mjs` — erstatt de tre første import-linjene:
```javascript
import * as __0$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/scheduler/0.27.0/scheduler.mjs";
import * as __1$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react/19.2.6/react.mjs";
import * as __2$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react-dom/19.2.6/react-dom.mjs";
```

#### 4. Push og verifiser

Commit, push til `main`, og sjekk at filene dukker opp i [Nais Console → Team CDN Bucket](https://console.nav.cloud.nais.io/team/okonomi/settings).

## Regler

- Ikke slett gamle versjonsmapper — andre apper kan fortsatt peke på dem
- Ikke endre filer i eksisterende versjonsmapper — CDN-caching gjør at endringer ikke propagerer
- React og React-DOM bruker alltid samme versjon — scheduler kan ha sin egen
- Import-stier i `client.mjs` og `react-dom.mjs` må bruke fulle CDN URL-er