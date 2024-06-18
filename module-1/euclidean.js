/**
 * The function determines the greatest common divisor or
 * the given two numbers.
 *
 * @param {number} a (a > 0)
 * @param {number} b (b > 0)
 * @returns {number} GCD or 0 if any arguments are not proper
 */
function euclidean(a, b) {
    let gcd = 0;
    /*
     * Your task is to compute the greatest common divisor of
     * the numbers are given in a and b variables, using the
     * Euclidean algorithm (https://en.wikipedia.org/wiki/Euclidean_algorithm).
     * If you have the result, assign it to the gcd variable.
     * Also, take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...
    if (a > 0 && b > 0) {
        if (a === b) {
            gcd = a;
        } else {
            while (gcd !== b) {
                gcd = Math.max(a, b) - Math.min(a, b);
                b = Math.min(a, b);
                a = gcd;
            }
        }
    }
    return gcd;
    // ...AND THIS COMMENT LINE!
}

function euclideanRecursive(a, b) {
    let gcd = 0;
    if (a > 0 && b > 0) {
        if (a === b) {
            gcd = a;
        } else {
            const c = Math.max(a, b) - Math.min(a, b);
            //return euclideanRecursive(Math.max(c, Math.min(a, b)), Math.min(c, Math.min(a, b)));
            gcd = euclideanRecursive(c, Math.min(a, b));
        }
    }
    return gcd;
}

module.exports = euclideanRecursive;