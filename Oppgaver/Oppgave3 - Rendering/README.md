## Rendering
aka. Server vs Client komponent

## Dokumentasjon
https://nextjs.org/docs/app/building-your-application/rendering

## Oppgave
1. Opprett en ny route "oppgave3", under app.
2. Dette gjøres ved å opprette en app/oppgave3/page.tsx.
3. Start med å legge til følgende kode i page.tsx:
```Typescript
export default async function Oppgave3() {
    return (
        <main>
        //...
        </main>
   );
}
```
4. Legg så til et skjema `<form>` med et input felt som tar i mot et tall og en submit button.
5. Trykk på submit-Knappen skal logge nå logge til console. 
6. Prøv å legge så mye som mulig av koden i Server komponent.

## Tips
- Om du ønsker å ha det meste i Server komponenten, kan det være kun knappen som flyttes til Client komponent.
- Hvis du vil bruke typing `ComponentProps<"button">` er en fin type for en knapp.