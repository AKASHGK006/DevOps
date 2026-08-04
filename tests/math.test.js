const { add, subtract, multiply, divide } = require("../src/math");

describe("Math Functions", () => {
  test("adds two numbers", () => {
    expect(add(5, 3)).toBe(8);
  });

  test("subtracts two numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("multiplies two numbers", () => {
    expect(multiply(5, 3)).toBe(15);
  });

  test("divides two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("throws an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
  });
});
