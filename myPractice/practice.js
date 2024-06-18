/**
 * The function capitalizes the first character of the provided words.
 *
 * @param {string} words String to capitalize
 * @returns {string} Capitalized string
 */
function capitalizeFirstCharacters(words) {
    //return words.split(' ').map((element) => element.charAt(0).toUpperCase() + element.substring(1)).join(' ');
    return words.split(' ').map(element => element[0].toUpperCase() + element.slice(1)).join(' ');
}
console.log(capitalizeFirstCharacters("hello world"));
console.log(capitalizeFirstCharacters("helloworld"));
console.log(capitalizeFirstCharacters("hello"));

function countCharacter(inputString, inputCharacter) {
    let count = 0;
    for (const char of inputString) {
        if (inputCharacter.toLocaleLowerCase() === char.toLowerCase()) {
            count++;
        }
    }
    return count;
}
console.log(countCharacter("Hello Worlds", "o"));
console.log(countCharacter("HellO Worlds", "o"));

function returnReverseWord(word) {
    return word.split("").reverse().join("");
}
console.log(returnReverseWord("Hello"));

function returnReverseAllWords(words) {
    //return words.split(" ").map(word => word.split("").reverse().join("")).join(" ");
    return words.split(" ").map(word => returnReverseWord(word)).join(" ");
}
console.log(returnReverseAllWords("Hello world"));

function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
    //return string.split(toBeReplaced).join(replaceWith);
    return string.replace(new RegExp(toBeReplaced, "g"), replaceWith);
}
console.log(replaceAllOccurrences("Hello world", "o", "g"));
const replaceObject = {
    h: "H",
    w: "W",
    o: "a",
    L: "u"
}
function replaceAllWith(myString, myObject) {
    let result = myString;
    for (const [key, value] of Object.entries(myObject)) {
        result = replaceAllOccurrences(result, key, value)
    }
    return result;
}
console.log(replaceAllWith("hello world", replaceObject));


const arr = [1,2,30];
console.log(...arr);
console.log(arr);

const obj = {
    key1: "a",
    key2: "b"
}

console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));

console.log(...Object.values(obj));
console.log(...Object.keys(obj));
console.log(...Object.entries(obj));

console.log(..."Hello world");
console.log("Hello world".split(""));
console.log("Hello world".split("").map(char => char.toLowerCase()).sort());

let myVar = 10;
let myObj = {
    myNum: 10
}
function add(num) {
    num += 10;
    return num;
}
function objAdd(obj) {
    console.log(arguments);
    obj.myNum += 10;
    return obj;
}
console.log(add(myVar));
console.log(myVar);
console.log(objAdd(myObj));
console.log(myObj);