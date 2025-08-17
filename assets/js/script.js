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
            } else if (this.getAttribute("data-type") === "d4") {
                let dieType = "d4";
                rollDie(dieType);
            } else if (this.getAttribute("data-type") === "d6") {
                let dieType = "d6";
                rollDie(dieType);
            } else if (this.getAttribute("data-type") === "d8") {
                let dieType = "d8";
                rollDie(dieType);
            } else if (this.getAttribute("data-type") === "d10") {
                let dieType = "d10";
                rollDie(dieType);
            } else if (this.getAttribute("data-type") === "d12") {
                let dieType = "d12";
                rollDie(dieType);
            } else if (this.getAttribute("data-type") === "d20") {
                let dieType = "d20";
                rollDie(dieType);
            } else if (this.getAttribute("data-type") === "d100") {
                let dieType = "d100";
                rollDie(dieType);
            } else {
                alert(`Please choose one of the available dice options.`);
            };
        });
    };
})

/** rolls the type of die click/keydown */
function rollDie (dieType) {}

/** link to script.text.js */
module.exports = { roll, savedRolls, domLoad, rollDie };