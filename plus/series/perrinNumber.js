/**
 * Your task is to calculate the nth value of the
 * Perrin sequence.
 * https://en.wikipedia.org/wiki/Perrin_number
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */

function perrin(n) {
    if (typeof n !== "number") {
        throw new TypeError("Invalid argument!");
    }
    if (n < 0) {
        throw new Error("Invalid argument!");
    }
    return n === 0 ? 3 : n === 1 ? 0 : n === 2 ? 2 : perrin(n - 2) + perrin(n - 3);
}

module.exports = perrin;
