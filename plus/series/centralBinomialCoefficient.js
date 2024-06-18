const factorial = require("../../helpers/helpers");

/**
 * Your task is to calculate the nth value of the
 * Central binomial coefficient sequence.
 * https://en.wikipedia.org/wiki/Central_binomial_coefficient
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */
function calcBinom(n) {
    if (typeof n !== "number") {
        throw new TypeError("Invalid argument!")
    }
    if (n < 0) {
        throw new RangeError("Invalid argument!")
    }
    return factorial(2 * n) / Math.pow(factorial(n), 2);
}


function calcBinomOld(n) {
    if (typeof n !== "number") {
        throw new TypeError("Invalid argument!");
    }
    if (n < 0) {
        throw new Error("Invalid argument!");
    }
    return factorial(2 * n) / Math.pow(factorial(n), 2);
}

module.exports = calcBinom;
