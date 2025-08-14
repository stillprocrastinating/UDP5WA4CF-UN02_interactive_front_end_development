/** object containing roll keys */
let roll = {
    dieTypes: ["d2", "d4", "d6", "d8", "d10", "d12", "d20", "d100"],
    currentRoll: 0,
    previousRoll: 0,
    diceChoice: [],
    cumulativeRoll: 0,
}

/** object to contain saved rolls */
let savedRolls = {
    save1: 0,
}

/** At DOM load, listen for die-btn choice (click/keydown) */
let domLoad = document.addEventListener("DOMContentLoaded", function () {
    let dieButtons = document.getElementsByClassName("die-btn");
    for (let dieButton of dieButtons) {
        dieButton.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "d2") {
                let dieType = "d2";
                rollDie(dieType);
            };
        });
    };
})

/** rolls the type of die click/keydown */
function rollDie (dieType) {}

/** link to script.text.js */
module.exports = { roll, savedRolls, domLoad, rollDie };