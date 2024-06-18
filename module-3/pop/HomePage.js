/**
 * Create HomePage class representing the EPAM.com home page.
 * Add main widgets and element of the page and write tests
 * for it (test/pop/HomePage.spec.js).
 */
const Layout = require('./Layout');
const Element = require('./Element');
const Elements = require('./Elements');

module.exports = class HomePage extends Layout {
    constructor() {
        super('Home Page', "https://www.epam.com/", "body");

        this.addChildren(new Element('Header', {css: 'header'}));
        this.children.Header.addChildren(new Element("Logo", {css: '.header__logo'}));
        this.addChildren(new Elements("Menu Items", {css: '.top-navigation__item-link'}));
    }

    get logo() {
        return this.get('Logo');
    }

    get menuItems() {
        return this.get('Menu Items');
    }
}
