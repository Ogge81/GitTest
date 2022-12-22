# Dokumentation

### 1. Förord, tankar innan.

### 2. Designskiss

### 3. Arbetets gång

### 4. Slutord

<br>

# Förord

Började med att fråga de övriga i min gamla grupp om de ville köra tillsammans eller var och en för sig, och vi kommer överens om att alla kör på sitt håll. Detta är jag bekväm med, då jag vet att jag brukar fungera bra själv samt att uppgiften inte känns speciellt svår. Det är däremot lite synd då det ger bra erfarenhet av att jobba i grupp, något vi gjorde i förra kursen med gott resultat.

# Designskiss

Less is more, tänker jag här, och gör en enkel skiss där jag tydligt kan se att jag kan leverera alla krav för att kunna uppnå ett VG. Jag tänker mig att det ska finnas få och tydliga knappar, samt att poängställning och resultat ska vara tydligt. Jag tänker även på att spelet blir mer tillgängligt, då det är lättare att använda och med enkel interaktionsdesign.

# Arbetets gång

Jag börjar med att rita upp HTML strukturen, efter designskissen, där jag föreställer mig att sidan kommer ha tre delar. Tänker att jag ska använda semantiska taggar så långt det går i projektet, men i början blir det förmodligen många divar. 

```html
<body>

    <!-- Här finns enbart namn på spel, kan bytas till loga -->
    <header>
        <h1>ROCK PAPER SCISSOR</h1>
    </header>
    <!-- Här skrivs information ut, jag tänker att detta ska se ut som en skärm -->
    <section>
        <!-- En front, där jag kan lägga transparanta skärmliknande effekter. -->
        <div id="front"></div>
        <div id="back"></div>
    </section>
    <footer>
        <!-- Navigering egentligen, men inledningsvis händerna man väljer -->
        <div id="hands"></div>
    </footer>
    
</body>
```

Jag lägger även in lite grundläggande CSS, och framför allt mått och borders så jag kan se hur det ser ut. Måtten är kluriga, här vet jag att jag att det dykt upp problem med hur sidan ser ut på mindre skärmar i mina tidigare projekt. Tänker att jag behöver implementera ”media query”, om sidan ska bli 100% responsiv, men för tillfället använder jag mig av procent (%) på det mesta.

Jag passar på att notera att jag i mina föregående projekt/uppgifter tyckt att det lätt blir rörigt och osammanhängande i css koden. Jag har sett vissa skriva CSS kod som man skriver HTML kod, och har i detta projekt impementerat denna metoden.

```css
/* Tog bort kod, för att tydligt visa hur jag menar */
section{
    }
    #front, #back {
        }
        #front {
            }
        #back {
            }
            #score {
                }
                #player, #comp {
                }
                #result {
                }
            #screen {
                }

```

Flexbox eller grid? Jag har inte riktigt fått kläm på grid, men har en idé på hur det kan vara användbart när jag ska placera ut olika meddelanden på skärmen. För tillfället så använder jag flexbox för att placera ut knappar, som kommer representera händerna man gör sina val med.

Jag läser vid detta tillfället även på om z-index, då jag märker att jag kommer behöva kunna bestämma vad som ska visas överst. En viktig sak jag här uppmärksammar är att z-index enbart fungerar på element som har sin position satt till relative.

För att markera ett vilken knapp man väljer, samt att få sidan att leva, så vill jag att den knappen man "hovrar" över ska visa handen på skärmen. Jag har, sedan tidigare projekt, lagt in bilderna som bakgrund så att text enklet kan skrivas ut utan att störa bildens placering. Jag hade kunnat uppnå samma resultat med "position" satt till "absolute" eller "relative". Jag håller i allafall till backgrunder, men inser att nakdelen blir att texten inte kan vara relativ till bilden, något som kan ge huvudvärk när den ska göras responsiv.

```css
#rock { background-image: url(rock.png); }
#paper { background-image: url(paper.png);}
#scissor { background-image: url(scissor.png);}
```

Jag börjar nu även impementera lite javascript. Här fastnar jag ofta i tankarna, då jag i andra projekt lyckats få ner flera rader kod till bara några enstaka. Men att se detta inledningsvis är för mig fortfarande svårt, och jag kör på den lösning jag ser direkt, och har i åtanke att det förmodligen kommer optimeras i slutskedet av projektet.

```javascript
// Tre arrayer representerar knappar med händer, som sedan placerats i en gemensam array. Först ligger den node där jag hittar elementet, siffran efter representerar vilket index den hand som man med handen vinner mot, och andra siffran den hand man förlorar mot. Sist en referens till bilden.
let items = [
    [document.getElementById("rock"),2,1,"url(rock.png)"],
    [document.getElementById("paper"),0,2,"url(paper.png)"],
    [document.getElementById("scissor"),1,0,"url(scissor.png)"]]

// Array med nodes som man sedan manipulerar
let targets = [
    document.getElementById("front"),
    document.getElementById("back")]

// Exempel på användning med hjälp av "addEventListener"
addEventListener("mouseover", function( event ){
    for( let i=0; i<items.length; i++){
        // Om musen hovrar över..
        if( event.target.id === items[i][0].id ){
            // I varje "item" ligger en div för text. Item som hovras får text från sitt eget ID.
            event.target.children[0].textContent = event.target.id;
            // Övriga items får text som visar vem handen vinner eller förlorar mot, med hjälp av index 1 och 2.
            items[items[i][1]][0].children[0].textContent = "Wins!"
            items[items[i][2]][0].children[0].textContent = "Loose.."
            // Båda "targets" skriver ID samt sätter bild efter Items index 3.
            targets[0].textContent = event.target.id;
            targets[1].style.backgroundImage = items[i][3];}}})
```

Nu behöver jag lägga till en poängställning, samt hur många rundor man kört. Section taggens "back" div får två divar som i sin tur har två, en för namn och en för poäng, samt en för resultat(rundor). Lägger även till en div, där all info skrivs ut.

```html 
<div id="back">
    <div id="score">
        <div id="player">
            <div id="name">Player</div>
            <div id="point">5</div>
        </div>
        <div id="result"></div>
        <div id="comp">
            <div id="name">Comp</div>
            <div id="point">0</div>
        </div>
    </div>
    <div id="screen"></div>
</div>
```

Jag fokuserar nu på att få till logiken i javascript.

```javascript
// Skapar separata funktioner istället för att skriva dem direkt i addEventListener
addEventListener("mouseover", over_button)
addEventListener("mouseout", out_button)
addEventListener("click", click_button)
```

Med min tidigare array blir det enkelt att slumpa fram en hand till datorn.

```javascript
function click_button( event ){
    // Slumpat tal 0-2
    let computerHand = Math.floor(Math.random()*3)

    // Target index "1" är nu den högra delen av skärmen. På den vänstra skrivs samma info ut om handen man väljer.

    // Datorns slumpade tal används som index i "items"
    // ID omvandlas till text
    targets[1].textContent = items[ computerHand ][0].id.toUpperCase();
    // Bild hämtas
    targets[1].style.backgroundImage = items[ computerHand ][3];}
```

Inser att jag börjat göra mig beroende av de olika indelningarna av skärmen, dvs att det blir svårare att testa en grid, och jag bestämmer mig för att skippa grid till detta projektet. lite synd då jag gillar koordiantions system, och grid påminner mig om dem.

I mina divar för händerna har jag dessutom haft en child div ("sub") för att skriva ut text.
```html
<div id="hands">
    <div id="rock"><div id="sub"></div></div>
    <div id="paper"><div id="sub"></div></div>
    <div id="scissor"><div id="sub"></div></div>
</div>
```
Jag tror inte texten kommer behövas, men har använt mig av denna för att hitta element i javascript. Detta kommer jag behöva ändra innan det blir för komplicerat, men lämnar det för tillfället.
```javascript
if ( event.target.children[0].id === computerHand[0].children[0].id )
```
Spelet kan nu välja en hand, en dator hand och skriva ut dessa på skärmen där bakgrunden ändras till röd, grön el gul baserat på vem som vinner. Jag behöver nu fixa så att poängen, och rundor, ändras efter varje omgång.



Med användarvänlighet och interaktionsdesign i åtanke vill jag gärna ha en början och ett slut. Detta uppnår jag genom att ha en "play again" knapp samt att det ska komma medelanden vid olika händelser.

Lägger till två knappar, "reset score" och "play again", i samma div som hand knapparna.
```html
<div id="hands">
    <div id="res">RESET SCORE</div>
    <div id="rock"><div id="sub"></div></div>
    <div id="paper"><div id="sub"></div></div>
    <div id="scissor"><div id="sub"></div></div>
    <div id="start">PLAY AGAIN</div>
</div>
```

Jag stylar alla, ink händer, och sätter visibility till hidden på start och res för att sedan förskjuta dem i rätt position. Blir nu enkelt att ta fram och gömma med hjälp av javascript.
```javascript
function click_button( event ){
    if( event.target.id === "rock" || event.target.id === "paper" || event.target.id === "scissor" ){
        document.getElementById("rock").style.visibility =  "hidden";
        document.getElementById("paper").style.visibility =  "hidden";
        document.getElementById("scissor").style.visibility =  "hidden";
        document.getElementById("res").style.visibility =  "visible";
        document.getElementById("start").style.visibility =  "visible";}
```

Fixar även så att poängen och antal rundor ändras efter varje spel.
```javascript
document.getElementById("pointC").textContent = String(Number(document.getElementById("pointC").textContent)+1)
```

Spelets struktur är nu så gott som färdig. Det som jag har i sikte nu är att få allt att se snyggt ut, både i kod och utseende. Jag börjar med att byta ut en hel del taggar mot semantiska taggar, och tar bort en del onödiga. Strukturen blir mer slimmad och ser renare ut.
```html
<!-- Tog bort tillhörande divar för exempel -->
<header>
    <h1></h1>
</header>
<main>
    <section></section>
    <section></section>
</main>
<nav>
    <button></button>
</nav>
```

La ner galet mycket tid för att få spelet (så gott som) 100% responsivt. Gick igenom vartenda skärm i exempeln och justerade de element som behövde med hjälp av media query, både små skärmar, med och utan lanscape.
```css
@media only screen and (max-width:450px){
    /* Ändrar så att fonts inte svämmar över när skärmen är liten.
    även några divar, så att de inte tar för stor plats */
    h1 {
        font-size: 3vh;}
    h2 {
        font-size: 2vh;}
    #score {
        height: 2vh;}
    p#left, p#right{
        font-size: 3.5vh;
        background-size: 25vw;}
    p#msg {
        font-size: 3vh;
        background-size: 2vh;}
    button{
        width: 20vw;}}
```

För landscape blir det en hel del ändringar, bland annat att jag gör att texter justeras på annat håll, för att inte störa bakgrundsbilden. Jag ändrar även justify-content i score så att de skrivs ut i rad istället för kolumn.

Testar querySelectorAll på vissa ställen. Börjar med att försöka använda en lista gjord av QS. För att behålla alla ID så lägger jag till klassen "item" på alla knappar.
```html
<button class="item" id="res">RESET SCORE</button>
<button class="item" id="rock"></button>
<button class="item" id="paper"></button>
<button class="item" id="scissor"></button>
<button class="item" id="start">PLAY AGAIN</button>
```

Sen testar jag att få ner kodrader på vissa ställen i JS.
```javascript
// TEST OMRÅDE
for ( let i=0; i<items2.length; i++ ){
    if( i===0 || i===4 ){
        items2[i].style.visibility = "visible"
    }else{ items2[i].style.visibility = "hidden"}}

// document.getElementById("rock").style.visibility =  "hidden";
// document.getElementById("paper").style.visibility =  "hidden";
// document.getElementById("scissor").style.visibility =  "hidden";
// document.getElementById("res").style.visibility =  "visible";
// document.getElementById("start").style.visibility =  "visible";
```

Gör likadant med targets. Min förra array höll bara 2 index men i den nya lägger jag till klassen "target" på alla element som jag vill ändra på, men inte är knappar.

```javascript
0: p#msg.target
1: p#pointP.target
2: p#pointR.target
3: p#pointC.target
4: p#left.target
5: p#right.target
```

Nu blir det tydligt hur många rader kod som innebär en förändring i någon av dessa targets, och mycket är repetitioner. Speciellt i funktionen "over_button" finns onödigt mycket kod för att ändra på mitt textfönster. Jag börjar med att lägga till en if sats som enbart kollar efter föräldra noden, då det räcker för att sätta textfönstret på plats.
```javascript
if( event.target.parentNode.id === "hands" ){
        targets2[0].style.fontSize = "3vh"
        targets2[0].style.height = "20%"
        targets2[0].style.width = "100%"}
```

Efter lite meck så lyckas jag göra mig av med ännu mer kod här och det som finns kvar i de övriga if satserna är texten som beskriver vilka händer som man vinner respektive förlorar emot. Här hade jag kunnat använda mig av min gamla items array, där index 1 och 2 hade kunnat användas för att sätta ihopa en sträng. Men tanken är nu att göra mig av med den.. 

```javascript
if( event.target.id === "rock" || 
    event.target.id === "paper" || 
    event.target.id === "scissor" ){
        targets2[4].style.backgroundImage = "url("+ event.target.id +".png)"
        targets2[4].textContent = event.target.id.toUpperCase()}
if( event.target.id === "rock" ){
        targets2[0].textContent = "Beats scissor. " + "Beaten by paper."
    }
```

Det ända stället kvar som är beroende av min gamla items array är för att se vem av spelaren och datorn som vinner, eller om det blir oavgjort. Jag lyckas lösa ut denna med en for loop, där jag använder mig av ordningen av index.

```javascript
for( let i=0; i<items.length; i++){
        if( event.target === items[i] ){
            num = (i+1)
            if (num === 4){ num = 1 }}}
```

Jag börjar nu känna mig nöjd med projektet, och laddar upp en sista commit på github.

# Slutord

Detta projektet har varit lite av en berg och dalbana. Jag tror jag var lite naiv med, och lutade mig lite väl mycket på att jag kände att jag hade lätt att förstå det vi gick igenom på lektionerna, löste uppgifterna och skapade enklare layouter utan problem. Att knyta ihopa css med javascript var däremot lite klurigare än jag anade. Med det sagt så tar jag nu upp några delar av projektet som jag lärt mig mest av, och reflekterar lite om hur jag kanske gjort om jag hade startat om från början.

## HTML

Detta är väl förmodligen den del där det mesta känns lätt. Att använda semantiska taggar var inga problem i slutändan, även om man fick ta hänsyn till att de hade lite olika defult värden. 

## Mått enheter

Detta var jag kanske lite osäker på i början, och hade ingen tydlig strategi för hur jag skulle gå till väga. Det som jag hade mest huvudbry över var font storlekar och det slutade med att jag använde mig av view hight. För att justera elementen använde jag mig %, med undantag för body taggen där jag satte view hight och view width, något som gjorde att hela sidan, utom fonts då, följde samma mått både på bredden och höjden. Antar att jag kunnat använda dessa mått på alla, men för detta projektet var min metod lyckad då storleken skulle vara samma på alla. De ställen jag använda absoluta mått, och inte relativa, var på en del borders där jag använde mig av pixles(px)

## Media query

Jag använde detta i slutet av projektet. Innan dess så kollade jag ofta om sidan var responsiv, genom att dra åt olika håll för att justera. I Efterhand så tänker jag att det förmodligen inte är så här en användare hanterar spelet. Jag borde haft för ögonen att testa mot de skärm exempel som fanns i dev tools och implementerat media query direkt från början. Det hade nog bidragit till bättre koll, och en renare css kod.

## Javascript

Detta är väl den del jag gillar bäst. Även det som kan få mig att övertänka och försöka optimera. Jag gjorde en del ändringar i slutändan, men det finns ju alltid en mer elegant lösning runt hörnet, och jag har fortfarande mycket att lära mig. I början av kursen hade jag svårt att se hur klasser och id skiljde sig. Men efter detta projekt så börjar det bli något tydligare. Mina ändringar grundade sig på att jag använde mig av klasser för att skapa arrayer och jag förstår vilken betydelse dessa kan ha för större projekt.






