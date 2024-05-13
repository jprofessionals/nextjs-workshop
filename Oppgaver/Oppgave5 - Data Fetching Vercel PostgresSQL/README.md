## Data Fetching - Vercel PostgreSQL

## Dokumentasjon
https://vercel.com/guides/using-databases-with-vercel
https://nextjs.org/docs/app/building-your-application/rendering/server-components

## Tips
* ikke bruk tid på styling i denne oppgaven, det kommer senere.
* For anledningen har vi opprettet et Postgres-database "nextjs-workshop" på jpro sin Vercel-konto:
   - https://vercel.com/jp-ro/~/stores
   - Velg nextjs-workshop for ytterligere detaljer. 
   - velg .env.local + show secret -> for å vise påloggingsinformasjon (filen .env.local kommer herfra).

## Oppgave
1. Kjør følgende kommandoer for å installere nødvedige pakker.
   - npm i -g vercel@latest (installer siste versjon av vercel) (sudo kan være nødvendig)
   - npm install @vercel/postgres (installer siste versjon av postgres-klient)
   - vercel link (link prosjektet til Vercel-konto)

   (sjekk at mappen .vercel er opprettet i rot av prosjektet)

2. Kopier filen .env.local til prosjektets rot-mappe   
3. Lag en ny route "cars" under "app", med en tom page.tsx
4. Skriv denne route som en Server Component
5. I page.tsx:
   - import { sql } from "@vercel/postgres";
   - Bruk sql til å gjøre `SELECT id, brand, image_url from cars`
   - Rendre alle biler fra databasen og presenter "brand" og "image_url" (som et bilde).

