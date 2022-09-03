// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro se il numero progressivo è pari, di verde se dispari. 
// Inoltre emette un messaggio in console con il numero della cella cliccata.

console.log('js ok');


// ascolto click su init-btn
const initButton = document.getElementById('init-btn').addEventListener("click", function () {
    console.log('Play premuto');

    // leggo #grid dell'html
    const divGrid = document.getElementById('grid');

    // inizializzo contenuto del div Grid 
    divGrid.innerHTML = '';
    console.log(divGrid);

    // ciclo for per generare un numero progressivo da 1 a 100
    for (let index = 1; index <= 100; index++) {

        // creo un elemento div 
        let divCell = document.createElement("div");

        // inserisco nel div creato il valore index
        divCell.innerHTML = index;

        // do al div creato la classe .cell
        divCell.className = "cell";

        // ascolto il click sulle celle
        divCell.addEventListener("click", function () {
            console.log('cella premuta' + index);
            // coloro la cella in base al numero contenuto
            if (index % 2 === 0) {
                divCell.classList.add("bg-light-blue")
            } else {
                divCell.classList.add("bg-green")
            }
        })

        // inserisco nel div grid il div cell
        divGrid.append(divCell);
    }
})

