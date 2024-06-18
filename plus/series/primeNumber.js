/**
 * Your task is to calculate the nth value of the
 * Prime number sequence.
 * https://en.wikipedia.org/wiki/Prime_number
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */

function prime(n) {
    if (typeof n !== "number") {
        throw new TypeError("Invalid argument!");
    }
    if (n < 0) {
        throw new Error("Invalid argument!");
    }
    let nthPrime = 2;
    let helperNumber = 3;
    while (n) {
        if (isPrime(helperNumber)) {
            nthPrime = helperNumber;
            n--;
        }
        helperNumber++;
    }
    return nthPrime;
}

function isPrime(n) {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

module.exports = prime;
