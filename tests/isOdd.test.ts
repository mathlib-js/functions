import { isOdd } from "../src";

describe("Is Odd", () =>{
  test("0 is not odd", () => {
    expect(isOdd(0)).toBe(false);
  });

  test("1 is odd", () => {
    expect(isOdd(1)).toBe(true);
  });

  test("2 is not odd", () => {
    expect(isOdd(2)).toBe(false);
  });

  test("-1 is odd", () => {
    expect(isOdd(-1)).toBe(true);
  });

  test("-2 is not odd", () => {
    expect(isOdd(-2)).toBe(false);
  });

  test("'4' is not odd (Input as string which can be cast as number)", () => {
    expect(isOdd("4" as unknown as number)).toBe(false);
  });

  test("'string' input will throw", () => {
    expect(() => isOdd("string" as unknown as number)).toThrow();
  });

  test("isOdd of fractions will throw", () => {
    expect(() => isOdd(3.14)).toThrow();
  });
});
