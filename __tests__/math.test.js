const { add, multiply, factorial, subtract } = require('../src/math');

test("add", () => {
  expect(add(2, 3)).toBe(5);
});

test("multiply", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("factorial", () => {
  expect(factorial(5)).toBe(120);
});
describe('subtract', () => {
  test('soustraction de deux nombres', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});