## Styling

## Dokumentasjon
https://nextjs.org/docs/app/building-your-application/styling

## Tips
1. Nextjs er standard satt opp med Tailwind CSS. 
   - https://nextjs.org/docs/app/building-your-application/styling/tailwind-css
   - De globale stilene er definert for app/page.tsx i globals.css og tatt i bruk via layout.tsx.
     Se filene:  
     - config-filen tailwind.cofig.ts
     - app/globals.css
     - app/layout.css 
   - Alle routes under app, vil arve disse stilene. 
2. Definerer man en ny globals.css og layout.tsx for en komponent lenger ned i hierarkiet, Vil disse stilene gjelde/overstyre 
   for alle komponenter under. 

## Oppgave
1. CSS Modules 
   - Ta en titt på felles-komponentene under src/common. 
   - Disse er stylet med CSS Modules 
   - https://nextjs.org/docs/app/building-your-application/styling/css-modules#css-modules
   - Forsøk gjerne å endre på stilene og kombinere flere stil-klasser.
2. Tailwind CSS
   - Definer en ny stilklasse "workshop" i app/globals.css og definer en unik stil for denne. 
   - I app/page.tsx, legg til <div className="workshop">Workshop stil</div> og se at denne får stilen definert i globals css. 
   - Opprett en ny route app/oppgave8/page.tsx.
   - Legg til <span>Oppgave 8</span>, <BackButton /> og <div className="workshop">Workshop stil</div> i page.tsx
   - Opprett en Link til oppgave8 fra app/page.tsx
   - Naviger til oppgave8 via linken og se at stil er lik for "workshop" begge steder.
   - I app/oppgave8, opprett en ny fil globals.css. Definer stilklassen "workshop" på nytt her, med en ny, unik stil. 
   - legg til import "./globals.css"; i app/oppgave8/page.css og se at stilen endrer seg for "workshop".
   - Denne gjelder nå for alle komponenter under app/oppgave8
3. Det er også mulig å bruke inline-styling med style-prop. Test dette ut.
   - <div style={{ backgroundColor: "blue"}}> Workshop stil</div>

            
     
