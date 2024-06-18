const {factorial} = require("../../helpers/helpers");

/**
 * Your task is to calculate the nth value of the
 * Catalan number sequence.
 * https://en.wikipedia.org/wiki/Catalan_number
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */

function calcCatalanOld(n) {
    if (typeof n !== "number") {
        throw new TypeError("Invalid argument!");
    }
    if (n < 0) {
        throw new Error("Invalid argument!");
    }
    return (factorial(2 * n)) / (factorial(n+1) * factorial(n));
}

module.exports = calcCatalan;
