// Write a JavaScript program to get integers in the range (x, y) using recursion.
function integerRange(x, y) {
    if (y - 2 > x) {
        return [x + 1];
    } else {
        let myArray = integerRange(x + 1, y);
        myArray.push(x + 1);
        return myArray;
    }
}
const result = integerRange(2, 9);
console.log(result);
