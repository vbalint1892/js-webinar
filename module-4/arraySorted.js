/**
 * It determines whether the given array is sorted in
 * alphabetically ascending order.
 *
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 *
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */

function sort(items, ignore) {
    if (ignore) {
        for (const char of ignore) {
            for (let i = 0; i < items.length; i++) {
                items[i] = items[i].toString().split(char).join("");
            }
        }
    }
    const original = [...items].map(item => item.toString().toLowerCase().replace(/\s/g, ""));
    const sorted = items.map(item => item.toString().toLowerCase().replace(/\s/g, ""));
    sorted.sort();
    for (let i = 0; i < original.length; i++) {
        if (sorted[i] !== original[i]) {
            return false;
        }
    }
    return true;
}

const sortOriginal = (items, ignore = "") => {
    const chars = [...ignore, " ", "\n", "\t", "\s"]
    const newItems = items.map(item => {
        if (typeof item === "string") {
            for (const char of chars) {
                item = item.replaceAll(char, "");
            }
            item = item.toLowerCase();
        }
        return item;
    });
    const copy = [...newItems];
    newItems.sort();
    for (const key in newItems) {
        if (newItems[key] !== copy[key]) {
            return false;
        }
    }
    return true;
}

module.exports = sort;