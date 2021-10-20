// Creo le mie variabili 
const selectLevel = document.getElementById("select-level");
const playButton = document.getElementById("btn-play");
const boardContainer = document.getElementById("board-container");

// Creo una funzione per la scelta del livello
playButton.addEventListener("click", function () {
    const level = selectLevel.value;

    const cells = cellsNumberXlevel(level);
    generateCells(cells);
});

//Creo una funzione per stabilire le celle in base alla scelta della difficoltà

function cellsNumberXlevel(level) {
    let result;

    switch (parseInt(level)) {
        case 1:
            result = 49;
            break;
        case 2:
            result = 81;
            break;
        case 3:
            result = 100;
            break;
    }

    return result;
}

// Funzione che genera le celle
function generateCells(cellsNumber) {

    boardContainer.innerHTML = "";

    // Calcoli per le mie celle
    const cellsXrow = Math.sqrt(cellsNumber);
    const cellSize = (100 / cellsXrow);


    for (let i = 0; i < cellsNumber; i++) {
        const cell = document.createElement("div");
        cell.classList.add("box");
        cell.style.width = cellSize + "%";
        cell.style.height = cellSize + "%";
        cell.innerHTML = [i + 1];

        cell.addEventListener("click", onCellClick);

        boardContainer.append(cell);
    }
};


function onCellClick() {
    this.classList.toggle("click-on-box");
};