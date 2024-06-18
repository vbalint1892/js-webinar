/**
 * Your task is to calculate the nth value of the
 * Woodall number sequence.
 * https://en.wikipedia.org/wiki/Woodall_number
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */

function woodall(n) {
    if (typeof n !== "number") {
        throw new TypeError("Invalid argument!");
    }
    if (n < 0) {
        throw new Error("Invalid argument!");
    }
    n++;
    return n * Math.pow(2, n) - 1;
}

module.exports = woodall;