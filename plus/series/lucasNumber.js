const fibonacci = require("../../module-1/fibonacci");

/**
 * Your task is to calculate the nth value of the
 * Lucas sequence.
 * https://en.wikipedia.org/wiki/Lucas_number
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */

function calcLucas(n) {
    if (typeof n !== "number") {
        throw new TypeError("Invalid argument!");
    }
    if (n < 0) {
        throw new Error("Invalid argument!");
    }
    if (n === 0) {
        return 2;
    }
    return fibonacci(n - 1) + fibonacci(n + 1);
}

module.exports = calcLucas;
