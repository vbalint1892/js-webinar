/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number} Fibonacci number or 0 if any arguments are not proper
 */
function fibonacci(n) {
    let nThFibonacci;
    /*
     * Your task is to calculate the nth value of the
     * Fibonacci sequence.
     * https://en.wikipedia.org/wiki/Fibonacci_number
     * Store the value in the nThFibonacci variable.
     * Also, take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...

    //nThFibonacci = [...Array(n >= 0 ? n : 0).keys()].map(number => number + 1).reduce((acc, currentValue, index, array) => {
    //    array[index + 1] = acc + currentValue;
    //    return currentValue;
    //}, 0)

    //if (typeof n !== "number" || n < 0) {
    //    throw new Error("Please provide a valid fibonacci number!")
    //}
    if (n <= 0) {
        nThFibonacci = 0;
    } else if (n === 1) {
        nThFibonacci = 1;
    } else {
        nThFibonacci = fibonacci(n - 2) + fibonacci(n - 1);
    }

    // ...AND THIS COMMENT LINE!
    return nThFibonacci;
}

module.exports = fibonacci;