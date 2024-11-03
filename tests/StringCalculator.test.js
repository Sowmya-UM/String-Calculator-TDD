// Import the add function from the StringCalculator module
const add = require('../src/StringCalculator');

// Test case for an empty string input
test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0); // The output should be 0
});

// Test case for a single number input
test('returns the number itself when a single number is passed', () => {
    expect(add('5')).toBe(5); // The output should be 5
});

// Test case for two numbers separated by a comma
test('returns the sum of two numbers separated by a comma', () => {
    expect(add('1,2')).toBe(3); // The output should be 3 (1 + 2)
});

// Test case for multiple numbers separated by commas
test('returns the sum of multiple numbers separated by commas', () => {
    expect(add('1,2,3')).toBe(6); // The output should be 6 (1 + 2 + 3)
});

// Test case for numbers separated by newlines
test('returns the sum of numbers separated by newlines', () => {
    expect(add('1\n2,3')).toBe(6); // The output should be 6 (1 + 2 + 3)
});

// Test case for numbers with spaces
test('returns the sum of numbers with spaces', () => {
    expect(add('1, 2, 3')).toBe(6); // The output should be 6 (1 + 2 + 3)
});

// Test case for custom delimiters
test('allows custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3); // The output should be 3 (1 + 2) using custom delimiter ';'
});

// Test case for negative numbers
test('throws an error for negative numbers', () => {
    // Expect an error to be thrown with a specific message
    expect(() => add('1,-2,3')).toThrow('Negative numbers not allowed: -2');
});

// Test case for ignoring numbers larger than 1000
test('ignores numbers larger than 1000', () => {
    expect(add('1001,2')).toBe(2); // The output should be 2, as 1001 is ignored
});
