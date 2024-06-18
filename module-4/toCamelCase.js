/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */

function camelCase(toConvert) {
    let result = "";
    if (typeof toConvert === "string") {
        result = toConvert.split(/\W/).filter(item => !!item).map(item => item[0].toUpperCase() + item.slice(1)).join("");
        result = result[0].toLowerCase() + result.slice(1);
    }
    return result;
}

function oldCamelCase(toConvert) {
    let camelCaseString = "";
    if (typeof toConvert === "string") {
        camelCaseString = toConvert
            .split(/[^\w]/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join("");
        camelCaseString = camelCaseString[0].toLowerCase() + camelCaseString.slice(1);
    }
    return camelCaseString;
}

module.exports = camelCase;