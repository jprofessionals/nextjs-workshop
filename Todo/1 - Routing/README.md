## Routing

## Dokumentasjon
https://nextjs.org/docs/app/building-your-application/routing

## Tips
For React finnes det flere biblioteker man kan importere for å håndtere routing(navigasjon).
Mest brukt er ReactRouter. 
I Next.js inkluderer standard to løsninger for routing, App Router og Pages Router. 
For enkelhets skyld, vil vi i denne workshop ta for oss App Router.

Pages Router er noe mer kompleks, men har gir også flere muligheter.

<LinksContainer> og <BackButton> finner du under src/common. Dette er fellekomponenter vi har laget.
De er lagt under src/common fordi de potensielt skal brukes flere steder. Da er det en god praksis
at de ikke legges under feks en route og exporteres ut. 
Felleskomponenter bør også holdes fri fra domene, så langt det lar seg gjøre. 

## Oppgave
1. Opprett en ny route "route_one" under "app"
2. Denne route skal kun inkludere en fil "page.tsx"
3. app/route_one/page.tsx skal rendre en knapp med tittel "Tilbake". Klikk på denne skal resultere i navigasjon tilbake.
4. Modifiser app/page.tsx - Opprett en ny Link til "route_one" og plasser den i <LinksContainer>.
5. Sjekk at navigasjon fungerer mellom disse to routes. 
6. <BackButton> rendrer en tilbake-knapp. Ta i bruk BackButton i stedet for tilbake-knappen du akkurat laget.
   (Denne kan du legge til i alle routes du oppretter i de kommende oppgavene)