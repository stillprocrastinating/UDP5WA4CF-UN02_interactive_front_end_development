/**
 * @jest-environment jsdom
 */

/** link to script.js */
const { roll, savedRolls, domLoad, reset, rollDie } = require("./script");

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
        const elements = document.getElementsByClassName("die-btn");
        const firstElement = elements[0];
        expect(firstElement.getAttribute("data-type")).toBe("d2");
    });
    test("dieType = d4", () => {
        const elements = document.getElementsByClassName("die-btn");
        const secondElement = elements[1];
        expect(secondElement.getAttribute("data-type")).toBe("d4");
    });
    test("dieType = d6", () => {
        const elements = document.getElementsByClassName("die-btn");
        const thirdElement = elements[2];
        expect(thirdElement.getAttribute("data-type")).toBe("d6");
    });
    test("dieType = d8", () => {
        const elements = document.getElementsByClassName("die-btn");
        const fourthElement = elements[3];
        expect(fourthElement.getAttribute("data-type")).toBe("d8");
    });
    test("dieType = d10", () => {
        const elements = document.getElementsByClassName("die-btn");
        const fifthElement = elements[4];
        expect(fifthElement.getAttribute("data-type")).toBe("d10");
    });
    test("dieType = d12", () => {
        const elements = document.getElementsByClassName("die-btn");
        const sixthElement = elements[5];
        expect(sixthElement.getAttribute("data-type")).toBe("d12");
    });
    test("dieType = d20", () => {
        const elements = document.getElementsByClassName("die-btn");
        const seventhElement = elements[6];
        expect(seventhElement.getAttribute("data-type")).toBe("d20");
    });
    test("dieType = d100", () => {
        const elements = document.getElementsByClassName("die-btn");
        const eighthElement = elements[7];
        expect(eighthElement.getAttribute("data-type")).toBe("d100");
    });
})