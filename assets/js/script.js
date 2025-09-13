/** object containing roll keys */
let roll = {
    cumulativeRoll: 0,
    currentRoll: 0,
    dieTypes: ["d2", "d4", "d6", "d8", "d10", "d12", "d20", "d100"],
    previousRolls: [],
}


/** object to contain saved rolls */
let savedRolls = {}
let saveIteration = 0;

/* | |   |  |||| ||||| ||||  |   |  |||| ||||| |  |||  |   |  ||||
/* | ||  | |       |   |   | |   | |       |   | |   | ||  | |
/* | | | |  |||    |   ||||  |   | |       |   | |   | | | |  |||
/* | |  ||     |   |   | |   |   | |       |   | |   | |  ||     |
/* | |   | ||||    |   |  ||  |||   ||||   |   |  |||  |   | ||||  */

function showInstructions () {
    document.getElementById("instructions").style.display = "block";
    document.getElementById("hide-instructions-button").style.display = "block";
    document.getElementById("show-instructions-button").style.display = "none";
}

function hideInstructions () {
    document.getElementById("show-instructions-button").style.display = "block";
    document.getElementById("hide-instructions-button").style.display = "none";
    document.getElementById("instructions").style.display = "none";
}


/* ||||   |||  |     |
/* |   | |   | |     |
/* ||||  |   | |     |
/* | |   |   | |     |
/* |  ||  |||  ||||| ||||| */


/** At DOM load, listen for die choice (click/keydown) */
let domLoad = document.addEventListener("DOMContentLoaded", function () {
    let dieButtons = document.getElementsByClassName("die-btn");
    for (let dieButton of dieButtons) {
        dieButton.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "d2") {
                let dieType = 2;
                rollDie(dieType);
            } else if (this.getAttribute("data-type") === "d4") {
                let dieType = 4;
                rollDie(dieType);
            } else if (this.getAttribute("data-type") === "d6") {
                let dieType = 6;
                rollDie(dieType);
            } else if (this.getAttribute("data-type") === "d8") {
                let dieType = 8;
                rollDie(dieType);
            } else if (this.getAttribute("data-type") === "d10") {
                let dieType = 10;
                rollDie(dieType);
            } else if (this.getAttribute("data-type") === "d12") {
                let dieType = 12;
                rollDie(dieType);
            } else if (this.getAttribute("data-type") === "d20") {
                let dieType = 20;
                rollDie(dieType);
            } else if (this.getAttribute("data-type") === "d100") {
                let dieType = 100;
                rollDie(dieType);
            } else {
                alert(`Please choose one of the available dice options.`);
            };
        });
    };
})


/** starts a new roll set */
function reset () {
    roll.cumulativeRoll = 0;
    roll.previousRolls = [];

    document.getElementById("current-roll").textContent = `-`;
	document.getElementById("cumulative-roll").textContent = `-`;
	document.getElementById("previous-rolls").textContent = `-`;
}


/** rolls the type of die click/keydown */
function rollDie (dieType) {
    let rollRandom = Math.floor(Math.random() * dieType) + 1;

    roll.currentRoll = `${rollRandom} (d${dieType})`;
    roll.cumulativeRoll = roll.cumulativeRoll + rollRandom;
    roll.previousRolls.push(` ${rollRandom}(d${dieType})`);

    showRolls();
}


/** displays the relevent rolls in the HTML */
function showRolls () {
	document.getElementById("current-roll").textContent = roll.currentRoll;
	document.getElementById("cumulative-roll").textContent = roll.cumulativeRoll;
	document.getElementById("previous-rolls").textContent = roll.previousRolls;
}


/*  ||||  |||  |   | |||||  ||||
/* |     |   | |   | |     |
/*  |||  |||||  | |  ||||   |||
/*     | |   |  | |  |         |
/* ||||  |   |   |   ||||| ||||  */


/** saves the set of rolls to a new save slot */
function save () {
    ++saveIteration;
    Object.defineProperty(savedRolls, `save${saveIteration}`, {value: roll.previousRolls});

    let renameButton = `<div id="rename-${saveIteration}" title="rename save" aria-label="Rename the save"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen-icon lucide-square-pen rename-button" alt="a pen overlapping a square, commonly understood as an edit symbol"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg> <!-- src="assets/images/saves-area/square-pen.svg" --></div>`;
    let deleteButton = `<div id="delete-${saveIteration}" title="delete save" aria-label="Delete the save" onclick="deleteSave()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2 delete-button" alt="a trash can or bin, commonly understood as a delete symbol"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg> <!-- src="assets/images/saves-area/trash-2.svg" --></div>`;
    
    let existingTable = document.getElementById("save-table");
    let newRow = existingTable.insertRow(-1);
    let newRowNumber = newRow.insertCell(0);
    newRowNumber.innerHTML = saveIteration;
    let newRowName = newRow.insertCell(1);
    newRowName.innerHTML = `save${saveIteration}`;
    let newRowRename = newRow.insertCell(2);
    newRowRename.innerHTML = renameButton;
    let newRowRolls = newRow.insertCell(3);
    newRowRolls.innerHTML = savedRolls[`save${saveIteration}`] + ".  Total: " + roll.cumulativeRoll;
    let newRowDelete = newRow.insertCell(4);
    newRowDelete.innerHTML = deleteButton;
}


/* ||||| ||||| ||||| |||||
/*   |   |     |       |
/*   |   ||||  |||||   |
/*   |   |         |   |
/*   |   ||||| |||||   | */


/** link to script.test.js */
module.exports = { roll, savedRolls, domLoad, rollDie };