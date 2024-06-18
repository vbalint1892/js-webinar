/**
 * Create the Circle class.
 *
 * @typedef {object} Circle
 * @property {number} r the radius of the circle
 * @function getArea return the area of the circle
 * @function getPerimeter return the perimeter of the circle
 */

class Circle {
    constructor(r) {
        if (r <= 0) {
            throw new Error("Invald radius!");
        }
        this.r = r;
    }

    getArea() {
        return Math.PI * Math.pow(this.r, 2);
    }

    getPerimeter() {
        return Math.PI * this.r * 2;
    }
}

module.exports = Circle;