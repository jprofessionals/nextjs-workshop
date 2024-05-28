## Data Fetching - Vercel PostgreSQL

## Dokumentasjon
https://nextjs.org/docs/app/building-your-application/rendering/server-components
https://vercel.com/guides/using-databases-with-vercel
https://nextjs.org/docs/pages/api-reference/components/image

## Tips
* Som standard er komponenter i nextjs Server Component.
  - Det ikke nødvendig å spesifisere ytterligere at dette skal være en Server Component.
  - Ettersom rendres server-side, har komponenten begrenset mulighet for bruker-interaksjon. Se dokumentasjon.
* For anledningen har vi opprettet et Postgres-database "nextjs-workshop" på jpro sin Vercel-konto:
   (Nb. du må ha ha tilgang for å komme inn på jpro sin konto. Opprette gjerne din egen vercel-konto og sjekk ut)
   - https://vercel.com/jp-ro/~/stores
   - Velg nextjs-workshop for ytterligere detaljer. 
   - velg .env.local + show secret -> for å vise påloggingsinformasjon (filen .env.local er kopiert herfra).
  
## Oppgave
1. Kjør følgende kommando for å installere nødvedige pakke.
   - npm install @vercel/postgres (installer siste versjon av postgres-klient)
2. Kopier filen .env.local til prosjektets rot-mappe   
3. Lag en ny route app/oppgave5/pages.tsx
4. Denne route skal skrives som en Server Component
5. For å select mot database i page.tsx:
   - import { sql } from "@vercel/postgres";
   - Bruk sql til å gjøre `SELECT id, brand, image_url from cars`
   - Rendre alle biler fra databasen og presenter "brand" og "image_url" i <Image/> -tag.