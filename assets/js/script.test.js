/**
 * @jest-environment jsdom
 */

/** link to script.js */
const { roll, savedRolls, domLoad, rollDie } = require("./script");

/** link to index.html */
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.body.innerHTML = fileContents;
});

describe("roll object keys", () => {
    test("dieTypes key = true", () => {
        expect("dieTypes" in roll).toBe(true);
    });
    test("currentRoll key = true", () => {
        expect("currentRoll" in roll).toBe(true);
    });
    test("previousRoll key = true", () => {
        expect("previousRoll" in roll).toBe(true);
    });
    test("diceChoice key = true", () => {
        expect("diceChoice" in roll).toBe(true);
    });
    test("cumulativeRoll key = true", () => {
        expect("cumulativeRoll" in roll).toBe(true);
    });
    test("dieTypes ids = true", () => {
        expect(roll.dieTypes).toEqual(["d2", "d4", "d6", "d8", "d10", "d12", "d20", "d100"]);
    });
})

describe("savedRolls object keys", () => {
    test("save1 key = true", () => {
        expect("save1" in savedRolls).toBe(true);
    });
})

describe("dieType", () => {
    test("dieType = d2", () => {
        document.getElementsByClassName("die-btn").getAttribute("data-type").innerText = "d2";
        expect(dieType).toEqual("d2");
    });
})