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

/** link to script.text.js */
module.exports = { roll, savedRolls };