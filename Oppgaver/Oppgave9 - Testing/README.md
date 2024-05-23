## Testing

## Dokumentasjon
https://nextjs.org/docs/app/building-your-application/testing
https://nextjs.org/docs/app/building-your-application/testing/cypress

## Tips 
- Det finnes flere test-rammeverk som fint kan benyttes med nextjs. Se dokumentasjon. 
- I denne workshop, skal vi teste med Cypress. Cypress kan brukes til å skrive både ende-til-ende og komponent-tester 
- bruk prop "data-testid" som referanse til elementer som skal benyttes under testing.
  Man kan alltids bruke referanser til props som id eller stil-klasser også, men data-testid er 
  tydelig på hva den brukes til. Se eksempel i ReactComponentExample.tsx

## oppgave 
1. Installer Cypress: 
   - npm install -D cypress
2. I package.json, legg til følgende under "scripts"
   - "cypress:open": "cypress open"
3. Kopier filen ./cypress.config.ts til prosjektets rot-mappe. 
4. I terminal, kjør kommando:
   - npm run cypress:open
4. Cypress skal åpne i eget vindu
5. Velg Component testing
6. Mulig warn "Warning: Component Testing Mismatched Dependencies" kan klikkes bort. 
7. Velg Chrome og trykk "Start Component Testing in Chrome"
8. Se om noen tester kjører. 
   - Vi har skrevet 2 tester for ReactComponentExample.tsx
   - Sjekk filen src/common/react-component-example/ReactComponentExample.cypres.tsx.
 9. Utvid ReactComponentExample.cypres.tsx til å teste ReactComponentExample.tsx sin funksjonalitet for å legge til tekst.
   - Testen skal fylle ut input med en verdi
   - trykke på knappen "Legg til"
   - Telle at antall tekster er 1. 
