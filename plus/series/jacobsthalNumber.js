/**
 * Your task is to calculate the nth value of the
 * Jacobsthal number sequence.
 * https://en.wikipedia.org/wiki/Jacobsthal_number
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */

function calcJacobsthal(n) {
    if (typeof n !== "number") {
        throw new TypeError("Invalid argument!");
    }
    if (n < 0) {
        throw new Error("Invalid argument!");
    }
    return (Math.pow(2, n) - Math.pow(-1, n)) / 3;
}

module.exports = calcJacobsthal;
