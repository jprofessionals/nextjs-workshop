## Data Fetching

## Dokumentasjon
https://nextjs.org/docs/app/building-your-application/rendering/client-components
https://nextjs.org/docs/app/building-your-application/data-fetching
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
https://nextjs.org/docs/pages/api-reference/components/image

## Tips.
* Denne oppgaven skal løses som en Client Component. Tips:
  - Spesifiser 'use client', 
  - Bruk React sin useState-hook for fetchet data. 
  - Bruk React sin useEffect-hook for å trigge fetching ved render. 
  - Bruk funskjonen "fetch" for å laste data. NB. denne returnerer en Promise. 
  - Nextjs har et alternativ til html-tagen <img>. Dette er <Image> og importeres med: import Image from "next/image"
    <Image> har flere funksjoner, se dokumentasjon. Den gjør det feks mulig å forhåndsprosessere bildene og serve de
    i en passende størrelse fra server, slik at man unngår unødvendig data-last til klient. Ettersom url til våre bilder 
    peker på en ekstern kilde, må vi åpne for denne url i next.config.mjs -filen. 

## Oppgave 
1. Opprett en ny route "app/oppgave4/page.txt".
2. Denne skal skrives som en Client Component.
2. I page.tsx, skriv en kodesnutt som fetcher data fra https://jsonplaceholder.typicode.com/photos ved render.
3. Dataen fra api har følgende props:
     - id: number;
     - albumId: number;
     - title: string;
     - url: string;
     - thumbnailUrl: string;
  Skriv en type med disse props og ta den i bruk i de følgende stegene. 
4. Utvid komponenten til å presentere antall bilder. 
5. Utvid komponenten til å vise de 5 første bildene i array. Bruk <img /> -tag og src={thumbnailUrl} for å rendre bilde.
   (du vil antakelig få en lint-warn på denne. Dette kommer vi tilbake til)
6. I app/page.tsx, legg til en <Link> til app/oppgave4
7. I route app/oppgave4, Legg til <BackButton>
8. Ref. punkt 5. 
   - Kopier next.config.mjs til rotmappen. 
   - Ta i bruk <Image> i stedet for <img>
   - Test gjerne forskjellig størrelser på bilder, ev andre funksjoner Image tilbyr.  

