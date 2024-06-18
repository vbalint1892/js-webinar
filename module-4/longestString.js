/**
 * It receives an array of strings and returns
 * the first longest string from it.
 * Also, in the alphabetically first in case of more.
 *
 * @param {string[]} strings
 * @returns {string} longest string or empty string in other cases
 */
function getLongestString(strings) {
    let result = "";
    if (Array.isArray(strings) && strings.length) {
        const realStrings = strings.filter(item => typeof item === "string");
        for (const item of realStrings) {
            if (item.length > result.length || item.length === result.length && item.toLowerCase() < result.toLowerCase()) {
                result = item;
            }
        }
    }
    return result;
}

function getLongestStringOld(strings) {
    let longest = "";
    if (Array.isArray(strings)) {
        for (const string of strings) {
            if (string.length > longest.length) {
                longest = string;
            } else if (string.length === longest.length) {
                if (string.toLowerCase() <  longest.toLowerCase()) {
                    longest = string;
                }
            }
        }
    }
    return longest;
    /*
    if (!Array.isArray(strings)) {
        return "";
    }
    return strings.reduce((acc, currentValue) => {
        if (typeof currentValue !== "string") {
            return acc;
        }
        const sorted = [acc, currentValue].sort();
        return sorted[sorted[1].length > sorted[0].length ? 1 : 0];
    }, "")
     */
}

module.exports = getLongestString;