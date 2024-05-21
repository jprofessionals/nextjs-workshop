## Testing

## Dokumentasjon
https://nextjs.org/docs/app/building-your-application/testing
https://nextjs.org/docs/app/building-your-application/testing/cypress

## Tips 
Det finnes flere test-rammeverk som fint kan benyttes med nextjs. Se dokumentasjon.
I denne workshop, skal vi teste med Cypress. Cypress kan brukes til å skrive både ende-til-ende og komponent-tester 

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
   - Sjekk filen src/common/react-component-example/ReactComponentExample.cy.tsx.
 9. 

cypress:

npm install -D cypress

{
"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "next lint",
"cypress:open": "cypress open"
}
}


npm run cypress:open