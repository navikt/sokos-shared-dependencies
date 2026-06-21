---
name: bump-shared-dependencies
description: Bump React, React-DOM og Scheduler til ny versjon — hent fra esm.sh, skriv om import-stier til Nav CDN
---

# Bump shared dependencies

Denne skillen hjelper deg bumpe React, React-DOM og Scheduler til ny versjon i CDN-repoet.

## Hva du trenger fra utvikleren

Når utvikleren ber om å sjekke eller bumpe React og/eller React-DOM, **sjekk alltid alle tre pakker** (react, react-dom, scheduler) — de henger sammen.

Still disse spørsmålene før du starter:

1. **React-versjon** (påkrevd) — f.eks. `19.2.6`. Hvis utvikleren ikke vet, kjør Steg 1 for å finne siste versjon.
2. **Scheduler-versjon** (valgfri) — f.eks. `0.28.0`. Hvis ikke oppgitt, kjør Steg 1 for å sjekke om ny versjon finnes.

> React og React-DOM bruker alltid samme versjon.

---

## Steg 1 — Finn siste versjon fra esm.sh

Sjekk alltid **alle tre** pakker:

```bash
curl --noproxy '*' -s "https://esm.sh/react" | head -1
# Output: /* esm.sh - react@19.2.6 */  ← dette er siste versjon

curl --noproxy '*' -s "https://esm.sh/react-dom" | head -1
# Output: /* esm.sh - react-dom@19.2.6 */

curl --noproxy '*' -s "https://esm.sh/scheduler" | head -1
# Output: /* esm.sh - scheduler@0.27.0 */  ← sjekk om nyere enn det som finnes
```

Parse versjonen fra kommentaren. Sammenlign med nåværende versjoner i repoet (se `AGENTS.md` eller sjekk siste mappe):

```bash
ls packages/react/ | sort -V | tail -1      # Nåværende React-versjon
ls packages/scheduler/ | sort -V | tail -1   # Nåværende Scheduler-versjon
```

Hvis esm.sh-versjonen er nyere enn det som finnes i repoet, fortsett med bumpen. Hvis ikke, informer utvikleren om at repoet allerede er oppdatert.

---

## Steg 2 — Opprett versjonsmapper

```bash
mkdir -p packages/react/{REACT_VERSJON}
mkdir -p packages/react-dom/{REACT_VERSJON}
mkdir -p packages/scheduler/{SCHEDULER_VERSJON}
```

> Hopp over scheduler-mappen hvis versjonen allerede finnes.

---

## Steg 3 — Hent bundler fra esm.sh (to-trinns prosess)

esm.sh returnerer først en barrel-fil som viser stien til den faktiske bundelen. Du må hente den faktiske filen.

### 3.1 — Finn faktiske stier

```bash
curl --noproxy '*' -s "https://esm.sh/react@{REACT_VERSJON}"
```

Output:
```javascript
/* esm.sh - react@19.2.6 */
export * from "/react@19.2.6/es2022/react.mjs";
export { default } from "/react@19.2.6/es2022/react.mjs";
```

Stien du trenger er det som står i `from "..."` — legg den etter `https://esm.sh`.

Gjør det samme for alle pakker:
```bash
curl --noproxy '*' -s "https://esm.sh/react@{REACT_VERSJON}"             # → /react@X/es2022/react.mjs
curl --noproxy '*' -s "https://esm.sh/react@{REACT_VERSJON}/jsx-runtime" # → /react@X/es2022/jsx-runtime.mjs
curl --noproxy '*' -s "https://esm.sh/react-dom@{REACT_VERSJON}"         # → /react-dom@X/es2022/react-dom.mjs
curl --noproxy '*' -s "https://esm.sh/react-dom@{REACT_VERSJON}/client"  # → /react-dom@X/es2022/client.mjs
curl --noproxy '*' -s "https://esm.sh/scheduler@{SCHEDULER_VERSJON}"     # → /scheduler@X/es2022/scheduler.mjs
```

### 3.2 — Hent de faktiske bundlene

Bruk stiene fra 3.1 til å hente det faktiske innholdet:

```bash
# React
curl --noproxy '*' -s "https://esm.sh/react@{REACT_VERSJON}/es2022/react.mjs" -o packages/react/{REACT_VERSJON}/react.mjs
curl --noproxy '*' -s "https://esm.sh/react@{REACT_VERSJON}/es2022/jsx-runtime.mjs" -o packages/react/{REACT_VERSJON}/jsx-runtime.mjs

# React-DOM
curl --noproxy '*' -s "https://esm.sh/react-dom@{REACT_VERSJON}/es2022/react-dom.mjs" -o packages/react-dom/{REACT_VERSJON}/react-dom.mjs
curl --noproxy '*' -s "https://esm.sh/react-dom@{REACT_VERSJON}/es2022/client.mjs" -o packages/react-dom/{REACT_VERSJON}/client.mjs

# Scheduler (kun hvis ny versjon)
curl --noproxy '*' -s "https://esm.sh/scheduler@{SCHEDULER_VERSJON}/es2022/scheduler.mjs" -o packages/scheduler/{SCHEDULER_VERSJON}/scheduler.mjs
```

> **Merk:** Stien (f.eks. `es2022`) kan variere mellom versjoner. Sjekk alltid barrel-filen i steg 3.1 for korrekt sti.

---

## Steg 4 — Skriv om import-stier i `react-dom.mjs`

Åpne `packages/react-dom/{REACT_VERSJON}/react-dom.mjs`.

Finn den første import-linjen (starter med `import * as __0$`). Erstatt den med:

```javascript
import * as __0$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react/{REACT_VERSJON}/react.mjs";
```

Resten av filen forblir uendret.

---

## Steg 5 — Skriv om import-stier i `client.mjs`

Åpne `packages/react-dom/{REACT_VERSJON}/client.mjs`.

Finn de tre første import-linjene (starter med `import * as __0$`, `__1$`, `__2$`). Erstatt dem med:

```javascript
import * as __0$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/scheduler/{SCHEDULER_VERSJON}/scheduler.mjs";
import * as __1$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react/{REACT_VERSJON}/react.mjs";
import * as __2$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react-dom/{REACT_VERSJON}/react-dom.mjs";
```

Resten av filen forblir uendret.

---

## Steg 6 — Verifiser

Sjekk at:

1. ✅ `react-dom.mjs` sin import peker på `react/{REACT_VERSJON}/react.mjs`
2. ✅ `client.mjs` sine imports peker på:
   - `react-dom/{REACT_VERSJON}/react-dom.mjs`
   - `react/{REACT_VERSJON}/react.mjs`
   - `scheduler/{SCHEDULER_VERSJON}/scheduler.mjs`
3. ✅ Alle filer starter med `/* esm.sh - {pakke}@{versjon} */`
4. ✅ Alle fem filer finnes: `react.mjs`, `jsx-runtime.mjs`, `react-dom.mjs`, `client.mjs`, `scheduler.mjs`

---

## Steg 7 — Oppdater AGENTS.md

Oppdater tabellen «Nåværende versjoner» i `AGENTS.md`:

```markdown
| Pakke | Versjon |
|-------|---------|
| react | {REACT_VERSJON} |
| react-dom | {REACT_VERSJON} |
| scheduler | {SCHEDULER_VERSJON} |
```

---

## Eksempel: Slik utleder du versjoner dynamisk

Ikke hardkod versjoner. Bruk alltid steg 1 til å finne gjeldende og nyeste versjon:

```bash
# Nåværende versjon i repoet
CURRENT=$(ls packages/react/ | sort -V | tail -1)

# Nyeste versjon fra esm.sh
LATEST=$(curl --noproxy '*' -s "https://esm.sh/react" | head -1 | grep -o '[0-9]\+\.[0-9]\+\.[0-9]\+')

echo "Nåværende: $CURRENT"
echo "Tilgjengelig: $LATEST"
```

Bruk `$LATEST` som `{REACT_VERSJON}` i alle påfølgende steg. Sjekk scheduler på samme måte:

```bash
CURRENT_SCHEDULER=$(ls packages/scheduler/ | sort -V | tail -1)
LATEST_SCHEDULER=$(curl --noproxy '*' -s "https://esm.sh/scheduler" | head -1 | grep -o '[0-9]\+\.[0-9]\+\.[0-9]\+')
```

---

## Commit-melding

> ⚠️ Agenten skal **ikke** kjøre `git commit` eller `git push`. Presenter forslag til commit-melding og la utvikleren committe selv.

Forslag til commit-melding:

```
chore: bump React til {REACT_VERSJON}

Legger til React {REACT_VERSJON}, React-DOM {REACT_VERSJON} og Scheduler {SCHEDULER_VERSJON}
i CDN. Import-stier skrevet om til Nav CDN URL-er.
```
