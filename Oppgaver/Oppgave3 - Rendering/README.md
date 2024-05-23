## Rendering
aka. Server vs Client komponent

## Dokumentasjon
https://nextjs.org/docs/app/building-your-application/rendering

## Oppgave
1. Opprett en ny route "oppgave3", under app.
2. Dette gjøres ved å opprette en mappe app/oppgave3, og en fil page.tsx i denne.
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
4. Legg til et skjema `<form>` med et input felt som tar i mot et tall og en submit button.
5. Knappen skal logge noe (som dere vil nå) til console ved klikk. 
6. Prøv å ha så mye som mulig i Server komponent.

## Tips
- Om du ønsker å ha det meste i Server komponenten, kan det være kun knappen som flyttes til Client komponent.
- Hvis dere vil bruke typing `ComponentProps<"button">` er en fin type for en knapp.