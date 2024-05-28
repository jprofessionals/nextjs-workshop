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
2. Definerer man en ny globals.css og layout.tsx for en komponent lenger ned i hierarkiet, Vil disse stilene overstyre 
   for alle komponenter under i hierarkiet. 
3. Har du laget en komponent som du vil style. Opprett en fil style.modules.css i komponenten og importer i page.tsx.
   - referer så til stil-klassene i prop className der du ønsker å bruke stilen. 

## Oppgave
1. CSS Modules 
   - Ta en titt på felles-komponentene under src/common. 
   - Disse er stylet med CSS Modules 
   - https://nextjs.org/docs/app/building-your-application/styling/css-modules#css-modules
   - Forsøk gjerne å endre på stilene og kombinere flere stil-klasser.
2. Tailwind CSS
   - Vi har definert stilklassen ".workshop" i app/globals.css og gitt den en tekst-farge. 
   - Denne brukes i app/page.tsx. 
   - Opprett en ny route app/oppgave8/page.tsx.
   - Legg til <span>Oppgave 8</span>, <BackButton /> og <div className="workshop">Workshop stil</div> i app/oppgave8/page.tsx
   - Opprett en Link til oppgave8 fra app/page.tsx
   - Naviger til oppgave8 via linken og se at stil er lik for "workshop" begge steder.
   - I app/oppgave8, opprett en ny fil style.modules.css. Definer stilklassen ".workshopOverride" her.
     - legg til noen særegne stiler i denne filen, som skiller seg fra den definert i globals.css. 
   - Importer style.module.css i app/oppgave8/page.css.
     - Endre på prop className, slik at dette elementet får stil fra både "workshop" og "workshopOverride".
   - Lag gjerne noen andre stiler også og ta de i bruk på diverse. 
3. Det er også mulig å bruke inline-styling med style-prop. Test Feks dette ut.
   - <div style={{ backgroundColor: "blue"}}> ... </div>

            
     
