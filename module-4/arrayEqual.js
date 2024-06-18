/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 *
 * It prints out a message in case of any
 * difference in an array, using the console.warn!
 *
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */
function compare(first, second) {
    if (first.length !== second.length) {
        console.warn(`The length of the two arrays is different: ${first.length} vs ${second.length}`);
        return false;
    }
    for (let i = 0; i < first.length; i++) {
        if (Array.isArray(first[i])) {
            return compare(first[i], second[i]);
        } else if (first[i] !== second[i]) {
            console.warn(`The elements of the two arrays are different: ${first[i]} vs ${second[i]}`);
            return false;
        }
    }
    return true;
}

module.exports = compare;
