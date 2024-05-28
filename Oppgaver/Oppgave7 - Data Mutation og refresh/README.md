## Data Fetching - Vercel PostgreSQL

## Dokumentasjon
https://nextjs.org/docs/app/building-your-application/rendering/server-components
https://vercel.com/guides/using-databases-with-vercel
https://nextjs.org/docs/pages/api-reference/components/image
https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations

## Tips
* Som standard er komponenter i nextjs Server Component.
  - Det ikke nødvendig å spesifisere ytterligere at dette skal være en Server Component.
  - Ettersom rendres server-side, har komponenten begrenset mulighet for bruker-interaksjon. Se dokumentasjon.
* Ref. Oppgave 5, skal vi også her gjøre en spørring mot database i jpro sin vercel-konto.

## Oppgave
1. Lag en ny route app/oppgave7/page.tsx
2. Denne route skal skrives som en Server Component
3. For å select mot database i page.tsx:
    - import { sql } from "@vercel/postgres";
    - Bruk sql til å gjøre `SELECT id, name from developers`
    - Rendre alle utviklere fra databasen og presenter "name".
4. Legg til et skjema som tar i mot URL og merke til en bil
5. For å insert mot databse i page.tsx:
   - import { sql } from "@vercel/postgres";
   - Bruk sql til å gjøre `INSERT INTO developers (name) VALUES  ('<navn fra skjema>')`
   - Oppdater side slik at ny bil fra databasen er presentert sammen med de andre
