/**
 * Your task is to calculate the nth value of the
 * Fermat number sequence.
 * https://en.wikipedia.org/wiki/Fermat_number
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */

function calcFermat(n) {
    if (typeof n !== "number") {
        throw new TypeError("Invalid argument!");
    }
    if (n < 0) {
        throw new Error("Invalid argument!");
    }
    return Math.pow(2, Math.pow(2, n)) + 1;
}

module.exports = calcFermat;
