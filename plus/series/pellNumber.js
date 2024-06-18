/**
 * Your task is to calculate the nth value of the
 * Pell numbers sequence
 * https://en.wikipedia.org/wiki/Pell_number
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */

function pell(n) {
    if (typeof n !== "number") {
        throw new TypeError("n must be a number");
    }
    if (n < 0) {
        throw new RangeError("Invalid argument");
    }
    if (n === 0) {
        return 0;
    }
    return n === 1 ? 1 : 2 * pell(n - 1) + pell(n - 2);
}










function pellOLd(n) {
    if (typeof n !== "number") {
        throw new TypeError("Invalid argument!");
    }
    if (n < 0) {
        throw new Error("Invalid argument!");
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return 2 * pell(n - 1) + pell(n - 2);
}

module.exports = pell;