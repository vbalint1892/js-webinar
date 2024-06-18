/**
 * It receives an array of strings, integers and
 * arrays, like itself.
 * Return the summary of all integers in it on
 * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */

function sum(elements) {
    if (!Array.isArray(elements) || elements.length === 0) {
        return 0;
    }
    let result = 0;
    for (const element of elements) {
        if (Array.isArray(element)) {
            result += sum(element);
        }
        if (Number.isInteger(element)) {
            result += element;
        }
    }
    return result;
}

function sumOriginal(elements) {
    if (!Array.isArray(elements)) {
        return 0;
    }
    return elements.reduce((acc, currentValue) => {
        if (typeof currentValue === "number") {
            return acc + currentValue;
        }
        if (Array.isArray(currentValue)) {
            return acc + sum(currentValue);
        }
        return acc;
    }, 0)
}

module.exports = sum;