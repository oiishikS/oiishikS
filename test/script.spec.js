// sum.test.js
const sum = require('../src/script');

describe('sum function', () => {
    test('adds two positive integers', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('adds two negative integers', () => {
        expect(sum(-1, -2)).toBe(-3);
    });

    test('adds a positive integer and a negative integer', () => {
        expect(sum(1, -2)).toBe(-1);
        expect(sum(-1, 2)).toBe(1);
    });

    test('adds a positive integer and zero', () => {
        expect(sum(1, 0)).toBe(1);
    });

    test('adds a negative integer and zero', () => {
        expect(sum(-1, 0)).toBe(-1);
    });
});
