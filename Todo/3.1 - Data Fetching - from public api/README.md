## Data Fetching

## Dokumentasjon
https://nextjs.org/docs/app/building-your-application/data-fetching
https://nextjs.org/docs/app/building-your-application/rendering/client-components

## Tips.
* ikke bruk tid på styling i denne oppgaven, det kommer senere. 
* Denne oppgaven skal løses som en Client Component. Tips:
  - Spesifiser 'use client', 
  - Bruk React sin useState-hook for fetchet data. 
  - Bruk React sin useEffect-hook for å trigge fetching ved mount/første render. 
  - Bruk funskjonen "fetch" for å laste data. NB. denne returnerer en Promise. 

## Oppgave 
1. Opprett en ny, blank Route med navn "photos", denne skal inneholde en fil "page.tsx".
2. I Page.tsx, skriv en kodesnutt som fetcher data fra https://jsonplaceholder.typicode.com/photos i det route montes/første render.
3. Denne dataen har følgende props:
     - id: number;
     - albumId: number;
     - title: string;
     - url: string;
     - thumbnailUrl: string;
  Skriv en type med disse props og ta den i bruk i de følgende stegene. 
4. Utvid komponenten til å presentere antall bilder. 
5. Utvid komponenten til å vise alle bildene. Bruk prop "thumbnailUrl" for src i <img-tag
