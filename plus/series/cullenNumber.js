/**
 * Your task is to calculate the nth value of the
 * Cullen sequence.
 * https://en.wikipedia.org/wiki/Cullen_number
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */

function calcCullen(n) {
    if (typeof n !== "number") {
        throw new TypeError("Invalid argument!");
    }
    if (n < 0) {
        throw new Error("Invalid argument!");
    }
    return Math.pow(2, n) * n + 1;
}

function calcCullenOld(n) {
    if (typeof n !== "number") {
        throw new TypeError("Invalid argument!");
    }
    if (n < 0) {
        throw new Error("Invalid argument!");
    }
    return n * Math.pow(2, n) + 1;
}

module.exports = calcCullen;
