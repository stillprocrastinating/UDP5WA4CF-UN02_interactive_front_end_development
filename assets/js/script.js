/** object containing roll keys */
let roll = {
    cumulativeRoll: 0,
    currentRoll: 0,
    dieTypes: ["d2", "d4", "d6", "d8", "d10", "d12", "d20", "d100", "d-other"],
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

/** Upon .die:hover, change svg path color */
function dieColor (dieIndex) {
    let color = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
    document.getElementsByClassName("die-color")[dieIndex].setAttribute("fill", color);
    
    let colorD100 = document.getElementsByClassName("die-color")[7].getAttribute("fill");
    if (colorD100 !== "#ffffff") {
        document.getElementsByClassName("die-color-100")[0].setAttribute("fill", colorD100 + "99");
    } else {
        document.getElementsByClassName("die-color-100")[0].setAttribute("fill", "#ffffff");
    }
}

/** Upon !.die:hover, change svg path color to white */
function dieColorOut (dieIndex) {
    document.getElementsByClassName("die-color")[dieIndex].setAttribute("fill", "#ffffff");
    document.getElementsByClassName("die-color-100")[0].setAttribute("fill", "#ffffff");
}

/** Ensure the input from d-other is a number */
function dieOther () {
    let dieType = prompt("Enter the type of die to roll:", "Please input a number");
    if (isNaN(dieType) == false) {
        rollDie(dieType);
    } switch (dieType) {
        case "the type of die to roll":
        case "a number":
            alert(`-_-`);
            break;
        case "69":
            alert(`Nice.`);
            break;
        case "420":
            alert(`Blaze it!`);
            break;
        case "no":
        case "No":
        case "NO":
            alert(`Oh, okay. My b.\nHave a good day.`);
            break;
    };
}

/** At DOM load, show content */
let domContent = document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("main").style.display = "block";
})

/** At DOM load, listen for die choice (click) */
document.addEventListener("DOMContentLoaded", function () {
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
            } else if (this.getAttribute("data-type") === "d-other") {
                dieOther();
            } else {
                alert(`Please choose one of the available dice options.`);
            };
        });
    };
})

/** At DOM load, listen for die choice (keyup) */
document.addEventListener("DOMContentLoaded", function () {
    addEventListener("keyup", (event) => {
        if (event.key == "2") {
            let dieType = 2;
            rollDie(dieType);
        } else if (event.key == "4") {
            let dieType = 4;
            rollDie(dieType);
        } else if (event.key == "6") {
            let dieType = 6;
            rollDie(dieType);
        } else if (event.key == "8") {
            let dieType = 8;
            rollDie(dieType);
        } else if (event.key == "0") {
            let dieType = 10;
            rollDie(dieType);
        } else if (event.key == "d") {
            let dieType = 12;
            rollDie(dieType);
        } else if (event.key == "t") {
            let dieType = 20;
            rollDie(dieType);
        } else if (event.key == "h") {
            let dieType = 100;
            rollDie(dieType);
        } else if (event.key == "o") {
            dieOther();
        };
    });
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
    if (dieType === null) {
        return;
    } else {
        let rollRandom = Math.floor(Math.random() * dieType) + 1;

        roll.currentRoll = `${rollRandom} (d${dieType})`;
        roll.cumulativeRoll = roll.cumulativeRoll + rollRandom;
        roll.previousRolls.push(` ${rollRandom}(d${dieType})`);

        showRolls();
    }
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

/** deletes the specified save slot */
function deleteSave (bin) {
    let rowN = bin.parentNode.parentNode.rowIndex;
    let rowO = document.getElementById(`row-${saveIteration}`);
    rowO.classList.toggle("delete1")
    setTimeout(function () {rowO.classList.toggle("delete2")}, 1000);
    setTimeout(function () {document.getElementById("save-table").deleteRow(rowN)}, 3000);
}

/** renames the specified save slot */
function renameSave (pen) {
    let name = pen.parentNode.previousElementSibling;
    let nameInput = prompt("Enter the new name:", name.innerHTML);
    name.innerHTML = nameInput;
}

/** saves the set of rolls to a new save slot */
function save () {
    ++saveIteration;
    Object.defineProperty(savedRolls, `save${saveIteration}`, {value: roll.previousRolls});

    let renameButton = `<div id="rename-${saveIteration}" title="rename save" aria-label="Rename the save" onclick="renameSave(this)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen-icon lucide-square-pen rename-button" alt="a pen overlapping a square, commonly understood as an edit symbol"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg> <!-- src="assets/images/saves-area/square-pen.svg" --></div>`;
    let deleteButton = `<div id="delete-${saveIteration}" title="delete save" aria-label="Delete the save" onclick="deleteSave(this)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-header)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2 delete-button" alt="a trash can or bin, commonly understood as a delete symbol"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg> <!-- src="assets/images/saves-area/trash-2.svg" --></div>`;
    
    let existingTable = document.getElementById("save-table");
    let newRow = existingTable.insertRow(-1);
    newRow.id = `row-${saveIteration}`;
    newRow.className = "active";
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
    
    setTimeout(function () {newRow.classList.toggle("active")}, 5000);

    deleteSave();
}


/* ||||| ||||| ||||| |||||
/*   |   |     |       |
/*   |   ||||  |||||   |
/*   |   |         |   |
/*   |   ||||| |||||   | */

/** link to script.test.js */
//module.exports = { roll, savedRolls, domLoad, rollDie };