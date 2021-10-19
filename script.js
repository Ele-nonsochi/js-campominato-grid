//Creo le mie variabili

const levelSelection = document.getElementsByClassName("select_level");
const playGame = document.getElementsByClassName("btn_play");
const boardContainer = document.getElementsByClassName("board_container");

//Creo l'azione che al click scelgo la difficoltà

playGame.addEventListener("click", function () {
    let level = parseInt(levelSelection.value);
    console.log(level);

    let totalBoxes = levelToBox(level);
    console.log(totalBoxes);
})