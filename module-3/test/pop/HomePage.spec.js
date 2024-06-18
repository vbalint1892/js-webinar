const HomePage = require('../../pop/HomePage');
const Layout = require('../../pop/Layout');
const Element = require('../../pop/Element');
const Elements = require('../../pop/Elements');
const ElementFinder = require("../mock/ElementFinder");
const ElementArrayFinder = require("../mock/ElementArrayFinder");
const expect = require('chai').expect;

describe('HomePage Class', () => {
    let page;

    before(() => {
        global.element = ElementFinder.element;
        global.element.all = ElementArrayFinder.all;
        page = new HomePage();
    });

    after(() => {
        delete global.element;
    });

    it('should be defined', () => {
        expect(HomePage).to.be.instanceOf(Function);
        expect(page).to.be.instanceOf(Layout);
    });

    it('should have a stored name', () => {
        expect(page.name).not.to.be.undefined;
        expect(page.name).to.equal('Home Page');
    });

    it('should have a stored url', () => {
        expect(page.url).not.to.be.undefined;
        expect(page.url).to.equal('https://www.epam.com/');
    });

    it('should have a stored locator', () => {
        expect(page.locator).not.to.be.undefined;
        expect(page.locator).to.equal('body');
    });

    describe('Parent', () => {

        it('should not have parent by default', () => {
            expect(page.parent).not.to.be.undefined;
            expect(page.parent).to.be.null;
        });

        it('should throw an error if parent is set', () => {
            const element = new Layout('Title', 'http://epam.com', {css: 'h1'});
            expect(page.setParent).not.to.be.undefined;
            expect(() => page.setParent(element)).to.throw(Error, 'Parent cannot be set for layout element!');
        });

    });

    describe('Children', () => {

        it('should have Header children by default', () => {
            expect(page.children.Header).not.to.be.undefined;
            expect(page.children.Header).to.be.instanceof(Element);
            expect(page.children.Header).to.have.property('name', 'Header');
            expect(page.children.Header).to.have.deep.property('locator', {css: 'header'});
            expect(page.children.Header).to.have.property('children');
            expect(page.children.Header).to.have.property('parent', null);
        });

        it('should have Menu Items children by default', () => {
            expect(page.children["Menu Items"]).not.to.be.undefined;
            expect(page.children["Menu Items"]).to.be.instanceof(Elements);
            expect(page.children["Menu Items"]).to.have.property('name', 'Menu Items');
            expect(page.children["Menu Items"]).to.have.deep.property('locator', {css: '.top-navigation__item-link'});
            expect(page.children["Menu Items"]).to.have.property('children', null);
            expect(page.children["Menu Items"]).to.have.property('parent', null);
        });

        it('should have method to add children', () => {
            const element = new Element('Footer', {css: '.footer'});
            expect(page.addChildren).not.to.be.undefined;

            page.addChildren(element);
            expect(page.children.Footer).to.eql({
                children: {},
                name: 'Footer',
                locator: {css: '.footer'},
                parent: null
            });
        });

        it('should not add children twice', () => {
            const element = new Element('Footer', {css: '.footer'});

            expect(() => page.addChildren(element)).to.throw(Error, 'Child already added!');
        });

    });

    describe('Logo', () => {

        it('should have method to get the protractor element for the logo', function () {
            expect(page.logo).to.be.instanceOf(ElementFinder);
            expect(page.logo.locator().css).to.equal('.header__logo');
        });

    });

    describe('Menu Items', () => {

        it('should have method to get the protractor element for the menu items', function () {
            expect(page.menuItems).to.be.instanceOf(ElementArrayFinder);
            expect(page.menuItems).not.to.be.instanceOf(ElementFinder);
            expect(page.menuItems.locator().css).to.equal('.top-navigation__item-link');
        });

    });

});