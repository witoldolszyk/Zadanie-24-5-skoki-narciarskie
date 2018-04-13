const assert = require('assert');
const calculateDistancePoints = require('../calculateDistancePoints');

describe('Distance Pionts', () => {
    describe('hillSize', () => {
        it('should return ', () => {
            const actual = calculateDistancePoints(0, 'normal', 0);

            const expected = 60;

            assert.equal(actual, expected);
        });

        it('should return', () => {
            const actual = calculateDistancePoints(0, 'big', 0);

            const expected = 60;

            assert.equal(actual, expected);
        });

        it('should return', () => {
            const actual = calculateDistancePoints(0, 'mamut', 0);

            const expected = 120;

            assert.equal(actual, expected);
        });

        it('wrong hill size', () => {
            const actual = calculateDistancePoints(130, 'strangeName', 110);

            const expected = 'wrong hillSzie';

            assert.equal(actual, expected);
        });

        it('wrong data', () => {
            const actual = calculateDistancePoints(122, 132, 'big');

            const expected = 'wrong type of data';

            assert.equal(actual, expected);
        });

        it('wrong data', () => {
            const actual = calculateDistancePoints('123', 'normal', '134');

            const expected = 'wrong type of data';

            assert.equal(actual, expected);
        });
    });



    describe('distance', () => {
        it('should return', () => {
            const actual = calculateDistancePoints(111, 'normal', 98);

            const expected = 86;

            assert.equal(actual, expected);
        });

        it('should return', () => {
            const actual = calculateDistancePoints(227.5, 'mamut', 200);

            const expected = 153;

            assert.equal(actual, expected);
        });

        it('should return', () => {
            const actual = calculateDistancePoints(134, 'big', 120);

            const expected = 85.2;

            assert.equal(actual, expected);
        });

        it('should return', () => {
            const actual = calculateDistancePoints(114.5, 'big', 120);

            const expected = 50.1;

            assert.equal(actual, expected);
        });
    });
})
