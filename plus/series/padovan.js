/**
 * Your task is to calculate the nth value of the
 * Padovan sequence
 * https://en.wikipedia.org/wiki/Padovan_sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */

function padovan(n) {
    if (typeof n !== "number") {
        throw new TypeError("Invalid argument!");
    }
    if (n < 0) {
        throw new Error("Invalid argument!");
    }
    if (n >= 0 && n <= 2) {
        return 1;
    }
    return padovan(n - 2) + padovan(n - 3);
}

module.exports = padovan;
