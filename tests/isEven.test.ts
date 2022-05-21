import { isEven } from "../src";

describe("Is Even", () =>{
  test("0 is even", () => {
    expect(isEven(0)).toBe(true);
  });

  test("1 is not even", () => {
    expect(isEven(1)).toBe(false);
  });

  test("2 is even", () => {
    expect(isEven(2)).toBe(true);
  });

  test("-1 is not even", () => {
    expect(isEven(-1)).toBe(false);
  });

  test("-2 is even", () => {
    expect(isEven(-2)).toBe(true);
  });

  test("'4' is even (Input as string which can be cast as number)", () => {
    expect(isEven("4" as unknown as number)).toBe(true);
  });

  test("'string' input will throw", () => {
    expect(() => isEven("string" as unknown as number)).toThrow();
  });

  test("isEven of fractions will throw", () => {
    expect(() => isEven(3.14)).toThrow();
  });
});
