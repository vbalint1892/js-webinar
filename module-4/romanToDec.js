/**
 * It receives a Roman number (as string)
 * and converts it to its Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */

const romans = {
    I: {
        name: "I",
        value: 1,
        validRepeat: 3
    },
    V: {
        name: "V",
        value: 5,
        validRepeat: 1
    },
    X: {
        name: "X",
        value: 10,
        validRepeat: 3
    },
    L: {
        name: "L",
        value: 50,
        validRepeat: 1
    },
    C: {
        name: "C",
        value: 100,
        validRepeat: 3
    },
    D: {
        name: "D",
        value: 500,
        validRepeat: 1
    },
    M: {
        name: "M",
        value: 1000,
        validRepeat: null
    },
}

const validCombinations = ["IV", "IX", "XL", "XC", "CD", "CM"];

function romanToDec(roman) {

    if (typeof roman !== "string" || !roman.length) {
        throw new Error("Invalid argument!");
    }

    roman = roman.trim().toUpperCase();
    for (const key of Object.keys(romans)) {
        if (romans[key].validRepeat && roman.includes(key.repeat(romans[key].validRepeat + 1))) {
            throw new Error("Invalid argument!");
        }
    }

    let counter = 0;
    const alreadyUsedValues = [];
    let previousNumber = Number.MAX_VALUE;
    for (let i = 0; i < roman.length; i++) {
        if (romans[roman[i]]) {
            if (alreadyUsedValues.includes(romans[roman[i]].value) || romans[roman[i]].value > previousNumber) {
                throw new Error("Invalid argument!");
            }
            if (i < roman.length - 1 && romans[roman[i + 1]] && romans[roman[i]].value < romans[roman[i + 1]].value) {
                if (validCombinations.includes(`${romans[roman[i]].name}${romans[roman[i+1]].name}`)) {
                    alreadyUsedValues.push(romans[roman[i]].value, romans[roman[i+1]].value);
                    previousNumber = romans[roman[i]].value;
                    counter += romans[roman[i+1]].value - romans[roman[i++]].value;
                } else {
                    throw new Error("Invalid argument!");
                }
            } else {
                previousNumber = romans[roman[i]].value;
                counter += romans[roman[i]].value;
            }
        } else {
            throw new Error("Invalid argument!");
        }
    }
    return counter;

}

module.exports = romanToDec;
