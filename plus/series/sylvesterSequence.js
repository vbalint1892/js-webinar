/**
 * Your task is to calculate the nth value of the
 * Sylvester's sequence
 * Since numbers can be very big, use %10^9 + 7.
 * https://en.wikipedia.org/wiki/Sylvester%27s_sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */

function sylvester(n) {
    if (typeof n !== "number") {
        throw new TypeError("Invalid argument!");
    }
    if (n < 0) {
        throw new Error("Invalid argument!");
    }
    return n === 0 ? 2 : sylvester(n - 1) * (sylvester(n - 1) - 1) + 1;
}

module.exports = sylvester;