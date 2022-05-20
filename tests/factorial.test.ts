import { factorial } from "../src";

describe("Factorial", () =>{
  test("Factorial of 0", () => {
    expect(factorial(0)).toBe(1);
  });

  test("Factorial of 1", () => {
    expect(factorial(1)).toBe(1);
  });

  test("Factorial of 2", () => {
    expect(factorial(2)).toBe(2);
  });

  test("Factorial of 3", () => {
    expect(factorial(3)).toBe(6);
  });

  test("Factorial of 5", () => {
    expect(factorial(5)).toBe(120);
  });

  test("Factorial of '5' (Input as string which can be cast as number)", () => {
    expect(factorial("5" as unknown as number)).toBe(120);
  });

  test("Factorial of -1", () => {
    expect(() => factorial(-1)).toThrow();
  });

  test("Factorial of string", () => {
    expect(() => factorial("string" as unknown as number)).toThrow();
  });

  test("Factorial of fractions", () => {
    expect(() => factorial(3.14)).toThrow();
  });
});
