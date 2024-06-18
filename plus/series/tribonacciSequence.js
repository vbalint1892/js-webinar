/**
 * Your task is to calculate the nth value of the
 * Tribonacci sequence
 * https://en.wikipedia.org/wiki/Tribonacci_number
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */

function tribonacci(n){
    if (typeof n !== "number") {
        throw new TypeError("n must be a number");
    }
    if (n < 0) {
        throw new RangeError("Invalid argument");
    }
    if (n === 0 || n === 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }
    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}







function tribonacciOld(n) {
    if (typeof n !== "number") {
        throw new TypeError("Invalid argument!");
    }
    if (n < 0) {
        throw new Error("Invalid argument!");
    }
    if (n === 0 || n === 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }
    return tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
}

module.exports = tribonacci;