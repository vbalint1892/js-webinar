const calc = require('../calc');
const expect = require('chai').expect;

describe('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test the calculator
    describe("constructor", () => {
        let myCalc;
        before(() => {
            myCalc = calc(3);
        });

        it('should return an object', function () {
            expect(myCalc).to.be.an("object");
        });

        it('should set the base number', function () {
            expect(myCalc.v).to.be.equal(3);
        });
    });

    describe("add", () => {
        let myCalc;
        before(() => {
            myCalc = calc(3);
        });

        it('should be a function', function () {
            expect(myCalc.add).to.be.a("function");
        });

        it('should add the value', function () {
            myCalc.add(5)
            expect(myCalc.v).to.be.equal(8);
        });
    });

    describe("minus", () => {
        let myCalc;
        before(() => {
            myCalc = calc(3);
        });

        it('should be a function', function () {
            expect(myCalc.minus).to.be.a("function");
        });

        it('should add the value', function () {
            myCalc.minus(2)
            expect(myCalc.v).to.be.equal(1);
        });
    });

    describe("sqrt", () => {
        let myCalc;
        before(() => {
            myCalc = calc(4);
        });

        it('should be a function', function () {
            expect(myCalc.sqrt).to.be.a("function");
        });

        it('should divide the value', function () {
            myCalc.sqrt();
            expect(myCalc.v).to.be.equal(2);
        });

        it('should throw an error in case of square root of a negative value', function () {
            expect(() => calc(-3).sqrt()).to.throw();
        });
    });

    describe("times", () => {
        let myCalc;
        before(() => {
            myCalc = calc(3);
        });

        it('should be a function', function () {
            expect(myCalc.times).to.be.a("function");
        });

        it('should add the value', function () {
            myCalc.times(10)
            expect(myCalc.v).to.be.equal(30);
        });
    });

    describe("divide", () => {
        let myCalc;
        before(() => {
            myCalc = calc(10);
        });

        it('should be a function', function () {
            expect(myCalc.divide).to.be.a("function");
        });

        it('should divide the value', function () {
            myCalc.divide(5);
            expect(myCalc.v).to.be.equal(2);
        });

        it('should throw an error in case of division with 0', function () {
            expect(() => calc(5).divide(0)).to.throw;
        });
    });

    describe("modulo", () => {
        let myCalc;
        before(() => {
            myCalc = calc(10);
        });

        it('should be a function', function () {
            expect(myCalc.modulo).to.be.a("function");
        });

        it('should add the value', function () {
            myCalc.modulo(5)
            expect(myCalc.v).to.be.equal(0);
        });
    });

    it('should chain operations', function () {
        const myCalc = calc(3).add(4).minus(3).times(6);
        expect(myCalc.v).to.equal(24);
    });
});