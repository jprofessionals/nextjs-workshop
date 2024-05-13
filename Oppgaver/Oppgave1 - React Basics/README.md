## React Components

## Dokumentasjon
https://react.dev/learn#components

## Tips
1. useEffect brukes til å kjøre sideeffekter i React. I [] kan man definere hvilke props som skal trigge at den kjører. en
   tom [] for dependencies, vil kun trigge ved mount/første render. 
2. useEffect brukes til å ta vare på state. Når state endres, rendres komponenten på nytt. 
   For ytelse kan man samle flere verdier i samme state-objekt for å unngå flere samtidige render. 
3. Kode som itererer i lister for å rendre elementer skal sette prop "key" på hvert element. Denne verdi skal være unik  
   og er elementær for React ved oppdatering.   

## Oppgave
1. ReactComponentExample inneholder noen enkle eksempler på state-endringer, iterering av data og input-håndtering
2. Ta src/common/ReactComponentExample.tsx i bruk i app/page.tsx med koden <ReactComponentExample/>
3. Åpne koden i ReactComponentExample.tsx og gjør deg kjent med den.
4. Endre på komponenten og se hva som skjer. Feks: 
   - Endre useEffect til å trigge når nullstill-knapp trykkes. Legg inn alert i useEffect som vises når den trigges. 
   - Legg til en fjern-knapp for hver tekst som listes ut. 

