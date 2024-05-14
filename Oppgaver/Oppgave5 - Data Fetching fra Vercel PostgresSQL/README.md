## Data Fetching - Vercel PostgreSQL

## Dokumentasjon
https://nextjs.org/docs/app/building-your-application/rendering/server-components
https://vercel.com/guides/using-databases-with-vercel

## Tips
* Som standard, er komponenter Server Component.
  - Det er dermed ikke nødvendig å spesifisere ytterligere at dette skal være en Server Component.
  - Ettersom denne rendres server-side, har komponenten begrenset mulighet for bruker-interaksjon. Se dokumentasjon.
  -  
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
3. Lag en ny route app/oppgave5
4. Denne route skal skrives som en Server Component
5. For å select mot databse i page.tsx:
   - import { sql } from "@vercel/postgres";
   - Bruk sql til å gjøre `SELECT id, brand, image_url from cars`
   - Rendre alle biler fra databasen og presenter "brand" og "image_url" (som et bilde).


<Image>
"ESLint: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element(@next/next/no-img-element)"