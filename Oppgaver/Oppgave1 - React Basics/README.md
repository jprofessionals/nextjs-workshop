## React Components

## Dokumentasjon
https://react.dev/learn#components

## Tips
1. React-hook useEffect brukes til å kjøre sideeffekter i React. 
   - Som standard trigges denne når komponenten rendrer på nytt (feks når en prop eller state endres).
   - En komponent kan innneholde flere useEffects samtidig.
   - En useEffect har mulighet til å spesifisere en dependencyarray, som spesifiserer hvilke endringer som skal trigge at 
     useEffecten kjører. 
2. React-hook useState brukes til å ta vare på state. 
   - Når en state endres, rendres komponenten på nytt. 
     Skal man ta vare på en verdi, uten at komponenten rerendres, se https://react.dev/reference/react/useRef 
   - Man kan ha mange samtidige state i en komponent.
   - Har man flere state som skal endres samtidig, kan det være lurt å samle disse som et i objekt i en state. 
     Da vil man unngå flere unødvendige rerender av komponenten. se også https://react.dev/reference/react/useMemo
   - State lever kun så lenge komponenten er rendret, eller frem til appen refreshes.
3. Kode som itererer i lister for å rendre elementer skal sette prop "key" på hvert element. 
   - Denne verdi skal være unik og er viktig for React ved rerender liste-data.   

## Oppgave
1. Rediger filen app/page.tsx. 
   - Fjern kommentarene rundt:  {/* <ReactComponentExample/> */} og tilhørende import.
   - Sjekk at nettleser refresher og viser innholdet i komponenten. 
   - <ReactComponentExample/> er en fellekomponent vi har laget. 
   - Den inneholder noen enkle eksempler på state-endringer, iterering av data og input-håndtering.
2. Åpne filen src/common/ReactComponentExample.tsx og orienter deg i koden. 
3. Endre komponenten som du selv vil. se hva som skjer. Feks: 
   - Endre useEffect til å trigge når nullstill-knapp trykkes. Legg inn alert i useEffect som vises når den trigges. 
   - Legg til en fjern-knapp for hver tekst som listes ut. 

