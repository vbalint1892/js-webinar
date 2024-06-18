function factorial(n) {
    if (typeof n !== "number"){
        throw new TypeError("n must be a number");
    }
    if (n < 0 || n > 12) {
        throw new RangeError("n must be between 0 and 12");
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(0));
console.log(factorial(-1));
console.log(factorial("2"));
