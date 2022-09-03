// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro se il numero progressivo è pari, di verde se dispari. 
// Inoltre emette un messaggio in console con il numero della cella cliccata.

console.log('js ok');

const initButton = document.getElementById('init-btn').addEventListener("click", function () {
    console.log('Play premuto');
    // ciclo for per generare un numero progressivo da 1 a 100
    for (let index = 1; index <= 100; index++) {

        // leggo #grid dell'html
        const divGrid = document.getElementById('grid');
        console.log(divGrid);

        // creo un elemento div 
        let divCell = document.createElement("div");

        // inserisco nel div creato il valore index
        divCell.innerHTML = index;

        // do al div creato la classe .cell
        divCell.className = "cell";
        console.log(divCell);

        divCell.addEventListener("click", function () {
            console.log('cella premuta' + index);

            if (index % 2 === 0) {
                divCell.classList.add("bg-light-blue")
            } else {
                divCell.classList.add("bg-green")
            }
        })

        // inserisco nel div grid il div cell
        divGrid.append(divCell);
        console.log(divCell);
    }
})