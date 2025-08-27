/** object containing roll keys */
let roll = {
    cumulativeRoll: 0,
    currentRoll: 0,
    dieTypes: ["d2", "d4", "d6", "d8", "d10", "d12", "d20", "d100"],
    previousRolls: [],
}


/** object to contain saved rolls */
let savedRolls = {
    save1: 0,
}


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
}


/** rolls the type of die click/keydown */
function rollDie (dieType) {
    let rollRandom = Math.floor(Math.random() * dieType) + 1;

    roll.currentRoll = `${rollRandom} (d${dieType})`;
    roll.cumulativeRoll = roll.cumulativeRoll + rollRandom;
    roll.previousRolls.push(`${rollRandom}(d${dieType})`);

    showRolls();
}


/** displays the relevent rolls in the HTML */
function showRolls () {
	document.getElementById("current-roll").textContent = roll.currentRoll;
	document.getElementById("cumulative-roll").textContent = roll.cumulativeRoll;
	document.getElementById("previous-rolls").textContent = roll.previousRolls;
}


/** link to script.text.js */
module.exports = { roll, savedRolls, domLoad, reset, rollDie, showRolls };