const assert = require('assert');
const calculateStylePoints = require('../calculateStylePoints');

describe('Style points', () => {
    describe('Sum', ()=> {
        it('should return', () =>{
            const actual = calculateStylePoints([18, 18.5, 17.5, 18.5, 18.5]);

            const expected = 55;

            assert.equal(actual, expected);
        });

        it('should return', () => {
            const actual = calculateStylePoints([17.5, 17.5, 17.5, 17, 17]);

            const expected = 52;

            assert.equal(actual, expected);
        });

        it('should return', () => {
            const actual = calculateStylePoints([19, 19.5, 19, 19, 19]);

            const expected = 57;

            assert.equal(actual, expected);
        });
    });

    describe('type and length', () => {
        it('typeof array', ()=> {
            const actual = calculateStylePoints(19, 19.5, 19, 19, 19);

            const expected = 'zły format danych!';

            assert.equal(actual, expected);
        });

        it('number of notes', () => {
            const actual = calculateStylePoints([16, 17, 16,5, 16,5]);

            const expected = 'za mało not!';

            assert.equal(actual, expected);
        });

        it('type of number', () => {
            const actual = calculateStylePoints(['15', 15.5, 15, '16', 15]);

            const expected = 'noty powinny być liczbami!';

            assert.equal(actual, expected);
        });

        it('wrong note', () => {
            const  actual = calculateStylePoints([15, 15.5, 15.3, 15.7, 16]);

            const expected = 'zła nota!';

            assert.equal(actual, expected);
        })

    });
})
