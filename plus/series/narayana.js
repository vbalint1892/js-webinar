/**
 * Your task is to calculate the nth value of the
 * Narayana number sequence.
 * https://en.wikipedia.org/wiki/Narayana%27s_cows
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */

function narayana(n) {
    if (typeof n !== "number") {
        throw new TypeError("Invalid argument!");
    }
    if (n < 0) {
        throw new Error("Invalid argument!");
    }
    if (n >= 0 && n <= 2) {
        return 1;
    }
    return narayana(n - 3) + narayana(n - 1);
}

module.exports = narayana;
