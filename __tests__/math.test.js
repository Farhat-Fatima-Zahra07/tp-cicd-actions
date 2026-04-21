const { add, multiply, factorial } = require("../src/math");

test("add", () => {
  expect(add(2, 3)).toBe(5);
});

test("multiply", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("factorial", () => {
  expect(factorial(5)).toBe(120);
});