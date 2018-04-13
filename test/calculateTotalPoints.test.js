const assert = require('assert');
const calculateTotalPoints = require('../calculateTotalPoints');

// distance, hillSize, kPoint, styleNotes, windFactor, gateFator

describe('Total points', () => {
    describe('sum', () => {
        it('should return', () => {
            const actual = calculateTotalPoints(227.5, 'mamut', 200, [18, 18.5, 17.5, 18.5, 18.5], 8.7, -8.4);

            const expected = 208.3;

            assert.equal(actual, expected);
        });

        it('should return', () => {
            const actual = calculateTotalPoints(111, 'normal', 98, [19, 19.5, 19, 19, 19], 3.2, -14.4);

            const expected = 131.8;

            assert.equal(actual, expected);
        });

        it('should return', () => {
            const actual = calculateTotalPoints(134, 'big', 120, [19, 20, 19.5, 19, 18.5], 0, -5.4);

            const expected = 137.3;

            assert.equal(actual, expected);
        });
    });

    describe('should return', () => {
        it('should be a number', () => {
            const actual = calculateTotalPoints(134, 'big', 120, [19, 20, 19.5, 19, 18.5], '9', -5.4);

            const expected = 'zły typ danych';

            assert.equal(actual, expected);
        });

        it('should be a number', () => {
            const actual = calculateTotalPoints(134, 'big', 120, [19, 20, 19.5, 19, 18.5], 9, 'kot');

            const expected = 'zły typ danych';

            assert.equal(actual, expected);
        });

        it('should be a number', () => {
            const actual = calculateTotalPoints(134, 'big', 120, [19, 20, 19.5, 19, 18.5], '8.7', '5.6');

            const expected = 'zły typ danych';

            assert.equal(actual, expected);
        });
    })
});
