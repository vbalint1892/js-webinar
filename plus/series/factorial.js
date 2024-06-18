/**
 * Your task is to calculate the nth value of the
 * Factorial sequence.
 * https://en.wikipedia.org/wiki/Factorial
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */

function factorial(n) {
    if (typeof n !== "number") {
        throw new TypeError("Invalid argument!");
    }
    if (n < 0) {
        throw new RangeError("Invalid argument!");
    }
    return n === 0 ? 1 : n * factorial(n - 1);
}

function factorialOld(n) {
    if (typeof n !== "number") {
        throw new TypeError("Invalid argument!");
    }
    if (n < 0) {
        throw new Error("Invalid argument!");
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n-1);
}

module.exports = factorial;