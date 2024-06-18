const romanToDec = require('../romanToDec');
const expect = require('chai').expect;
const testDataValid = require('./romanToDecValid.json');
const testDataInvalid = require('./romanToDecInvalid.json');

describe('Module 4 - romanToDec', () => {

    it('should be a function', () => {
        expect(romanToDec).to.be.instanceOf(Function);
    });

    testDataValid.forEach(data => {
        it(`should return proper value for ${JSON.stringify(data.arguments)}`, () => {
            expect(romanToDec(data.arguments)).to.equal(data.result);
        });
    });

    testDataInvalid.forEach(data => {
        it(`should throw error for ${JSON.stringify(data.arguments)}`, () => {
            expect(() => romanToDec(data.arguments)).to.throw('Invalid argument!');
        });
    });

});