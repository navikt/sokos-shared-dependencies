# sokos-shared-dependencies

## Hvordan bumpe React og React-DOM version:

### Steg 1
Sjekk først hvilken version som ligger inne for React og React-DOM:
1. React -> https://esm.sh/react@version
2. React-DOM -> https://esm.sh/react-dom@version
3. scheduler -> https://esm.sh/scheduler@version (Bør bumpes hvis ny version er tilgjengelig)

### Steg 2
Er det ny version som ikke ligger inne da følger du steget her
1. https://esm.sh/react@version
    1. Kopier path og legg den til etter https://esm.sh(path)
2. https://esm.sh/react-dom@version
    1. Kopier path og legg den til etter https://esm.sh(path)
    2. Kopier path i punkt 1 over og endre fra `react-dom.mjs` til `client.mjs`
3. https://esm.sh/scheduler@version
    1. Kopier path og legg den til etter https://esm.sh(path)

### Steg 3
Lage mapper
1. Lag en ny mappe under [react](/packages/react/) med versionnummer
2. Lag en ny mappe under [react-dom](/packages/react-dom/) med versionnummer
3. Lag en ny mappe under [scheduler](/packages/scheduler/) med versionnummer

### Steg 4
1. Opprett en fil `react.mjs`, kopier koden fra Steg 2, pkt. 1.1 og legg det inn i [react](/packages/react) versionnummer mappen du har laget
2. Opprett en fil `client.mjs`, kopier koden fra Steg 2, pkt. 2.1 og legg det inn i [react-dom](/packages/react-dom) versionnummer mappen du har laget
3. Opprett en fil `react-dom.mjs`, kopier koden fra Steg 2, pkt. 2.2 og legg det inn i [react-dom](/packages/react-dom) versionnummer mappen du har laget
4. Opprett en fil `scheduler.mjs`, kopier kode fra Steg 2, pkt. 2.3 og legg det inn i [scheduler](/packages/scheduler) versionnummer mappen du har laget

### Steg 5
1. Gå til filen `client.mjs` som ble opprettet i Steg 4, pkt. 2.
Fjern de 3 første import statement linjene og legg inn følgende kode på toppen av filen
```
import * as __2$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react-dom/19.1.0/react-dom.mjs";
import * as __1$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react/19.1.0/react.mjs";
import * as __0$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/scheduler/0.26.0/scheduler.mjs";
```
Endre versionnummeret som du har lagt inn i Steg 3, pkt. 2

2. Gå til filen `react-dom.mjs` som ble opprettet i Steg 4, pkt. 3.
Fjern første import statement linjen og legg inn følgende kode på toppen av filen
```
import * as __0$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react/19.1.0/react.mjs";
```
Endre versionnummer som du har lagt inn i Steg 3, pkt. 2


### Commit og push koden og gå til https://console.nav.cloud.nais.io/team/okonomi/settings og gå til Team CDN Bucket og se om alt har blitt lagt til.