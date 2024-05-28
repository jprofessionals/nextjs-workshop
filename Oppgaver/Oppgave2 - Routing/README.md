## Routing

## Dokumentasjon
https://nextjs.org/docs/app/building-your-application/routing

## Tips
 - For React finnes det flere biblioteker man kan importere for å håndtere routing(navigasjon).
   Mest brukt er ReactRouter. 
 - Next.js inkluderer standard to løsninger for routing, App Router og Pages Router.
 - For enkelhets skyld, vil vi i denne workshop kun ta for oss App Router. Har du likevel lyst til å teste ut Pages Router, 
   er det ikke noe problem å kombinere denne med App Router i koden. 
 - Ta i bruk komponenten <Link/> for å rendre en link - import Link from "next/link";
 - <LinksContainer/> og <BackButton/> finner du under src/common. Dette er fellekomponenter vi har laget.
   De er lagt under src/common fordi de potensielt skal brukes flere steder. Da er det en god praksis at de ikke legges 
   under feks en route og exporteres ut.Felleskomponenter bør også holdes fri fra domene, så langt det lar seg gjøre. 

## Oppgave
1. Opprett en ny route "oppgave2", under app. 
2. Dette gjøres ved å opprette en mappe app/oppgave2, og en fil page.tsx i denne.
3. Start med å legge til følgende kode i page.tsx:
   
   export default function Oppgave2() {
     return (
       <main>
        ...
       </main>
     );
   }
   
4. Koden i app/oppgave2/page.tsx skal rendre en knapp med tittel "Tilbake". Klikk på denne skal resultere i navigasjon tilbake. 
5. Modifiser så app/page.tsx. 
   - Opprett en ny Link til "app/oppgave2". 
   - Plasser den rett etter koden <p>Link til oppgaver: </p>
6. Sjekk at navigasjon fungerer mellom disse to routes.
7. <BackButton/> rendrer en tilbake-knapp. Ta i bruk BackButton i stedet for tilbake-knappen du akkurat laget.
8. Vi skal nå opprette en ny route, under den route vi akkurat har opprettet. 
9. Lag en ny mappe, under mappen "oppgave2". Navngi den selv. mappenavnet vil bli url til denne route
10. Opprett en fil page.tsx i den nye mappen. Legg til noe tekst i den og <BackButton/>
11. I filen app/oppgave2/page.txt Legg til en link til den nye route. Feks:  <Link href="/oppgave2/nesteNivaa">Link til neste nivå</Link>
12. Test at du nå kan navigere flere nivå den i appen din og tilbake igjen.' 