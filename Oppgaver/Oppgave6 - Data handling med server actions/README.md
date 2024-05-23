## Rendering
aka. Server vs Client komponent

## Dokumentasjon
https://nextjs.org/docs/app/building-your-application/rendering

## Tips
- Hvis du vil bruke typing `ComponentProps<"button">` er en fin type for en knapp.
- Det fins flere måter å gjøre dette på men, å sende en prop som heter `formAction` til knappen, er en enkel vei
  å gå.
- Det fins en fancy function i `react-dom` som heter `useFormStatus` som kan hjelpe.
  Se https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#pending-states.
- Finner dere ikke `console.log` i nettleser? Det er helt normalt. Vi bruker **SERVER** actions... ;)
- Om dere sjekker nettverket, skal dere se en POST kall til URL dere ligger i for server action kallet.

## Oppgave
1. Kopier route "oppgave3" til en ny route "oppgave6", under app (eventuelt fra løsningsforslag).
2. Lag en server action som skal håndtere skjema. Enten i page.tsx eller egen fil med `'use server'` på toppen.
3. Server action skal logge til console data fra skjema.
4. Endre knappen for å fjerne klikk og submit skjema