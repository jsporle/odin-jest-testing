const { capitalizeFirstLetter, reverseString, calculator, caesarCipher, analyzeArray } = require('./main');

test('capitalises first letter', () => {
  const input = 'hello';
  const expected = 'Hello';

  const result = capitalizeFirstLetter(input);
  expect(result).toBe(expected);
});

test('reverses string', () => {
  const input = 'hello';
  const expected = 'olleh';

  const result = reverseString(input);
  expect(result).toBe(expected);
});

test('calculator adds two numbers together', () => {
  expect(calculator.add(1,2)).toBe(3);
})

test('calculator subtracts one number from another', () => {
  expect(calculator.subtract(2,3)).toBe(-1);
});

test('calculator multiplies two numbers together', () => {
  expect(calculator.multiply(5,5)).toBe(25);
});

test('calculator divides one number by another', () => {
  expect(calculator.divide(6,3)).toBe(2);
});

test('calculator does not divide by zero', () => {
  expect(calculator.divide(6,0)).toBe(0);
});

test('shift cannot exceed +25 letters', () => {
  expect(caesarCipher('test', 26)).toBe(null);
});

test('shift cannot exceed -25 letters', () => {
  expect(caesarCipher('test', -26)).toBe(null);
});

test('each character of string must be shifted by shift value', () => {
  expect(caesarCipher('abc', 2)).toBe('cde');
});

test('characters must wrap around the alphabet', () => {
  expect(caesarCipher('xyz', 4)).toBe('bcd');
});

test('characters can shift in both directions', () => {
  expect(caesarCipher('cde', -2)).toBe('abc');
});

test('punctuation and spaces must be left the same', () => {
  expect(caesarCipher('!.: !', 10)).toBe('!.: !');
})

test('average must return sum of each item divided by array length', () => {
  expect(analyzeArray.average([1, 2, 3, 4, 5])).toBe(3);
});

test('min returns the smallest value', () => {
  expect(analyzeArray.min([200, 20, 2, 2000])).toBe(2);
});

test('max returns the largest value', () => {
  expect(analyzeArray.max([200, 20, 2, 2000])).toBe(2000);
});

test('length returns the number of items in the array', () => {
  expect(analyzeArray.length([1, 1, 1, 1, 1, 1, 1])).toBe(7)
})