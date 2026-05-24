# Copilot Review Instructions — sokos-shared-dependencies

Du gjennomgår kode i et CDN-hosting-repo for delte JavaScript-avhengigheter. Repoet inneholder pre-bundlede ESM-moduler (React, React-DOM, Scheduler) som serveres fra Nav CDN til mikrofrontender.

## Prioriter disse sjekkene

### 🔴 Import-stier (alltid kommenter)

- **Feil versjon i import-sti** — `client.mjs` og `react-dom.mjs` må peke på riktige versjoner i CDN URL-ene. Versjonen i import-stien må matche versjonsmappen filen ligger i (eller riktig avhengighetsversjon for scheduler).
- **Relative import-stier** — Alle import-stier skal bruke full CDN URL (`https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/...`), aldri relative stier.
- **Versjonskonsistens** — React og React-DOM bør bruke samme versjon. Scheduler kan ha sin egen versjon.

### 🟠 Filstruktur (kommenter ved avvik)

- **Feil mappestruktur** — Nye filer må følge mønsteret `packages/{pakke}/{versjon}/{fil}.mjs`.
- **Manglende filer ved versjonsbump** — React trenger `react.mjs` + `jsx-runtime.mjs`. React-DOM trenger `react-dom.mjs` + `client.mjs`.
- **Kommentarlinje mangler** — Alle `.mjs`-filer skal starte med `/* esm.sh - {pakke}@{versjon} */`.

### 🟡 Endringer i eksisterende filer (kommenter alltid)

- **Endring av eksisterende versjonsfiler** — Filer i eksisterende versjonsmapper skal aldri endres. CDN-caching gjør at endringer ikke propagerer. Opprett en ny versjon i stedet.
- **Sletting av gamle versjoner** — Aldri slett gamle versjonsmapper. Andre apper kan fortsatt peke på dem.

### ⚪ Ikke kommenter på

- Minifisert kode i `.mjs`-filer (dette er output fra esm.sh)
- Lisenskommentarer på slutten av filer
- Workflow-endringer som kun oppdaterer action-versjoner (ratchet)
