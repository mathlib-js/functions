import { mod } from "../src";

describe("Modulo binary operator", () => {
  test("11 mod 7 is 4", () => {
    expect(mod(11, 7)).toBe(4);
  });

  test("-11 mod 7 is 3", () => {
    expect(mod(-11, 7)).toBe(3);
  });

  test("11 mod -7 is -3", () => {
    expect(mod(11, -7)).toBe(-3);
  });

  test("-11 mod -7 is -4", () => {
    expect(mod(-11, -7)).toBe(-4);
  });

  test("11 mod 0 is NaN", () => {
    expect(mod(11, 0)).toBe(NaN);
  });

  test("0 mod 7 is 0", () => {
    expect(mod(0, 7)).toBe(0);
  });

  test("'11' mod '7' (Input as string which can be cast as number)", () => {
    expect(mod("11" as unknown as number, "7" as unknown as number)).toBe(4);
  });

  test("'string' input will throw (1)", () => {
    expect(() => mod("string" as unknown as number, 7)).toThrow();
  });

  test("'string' input will throw (2)", () => {
    expect(() => mod(11, "string" as unknown as number)).toThrow();
  });

  test("'string' input will throw (3)", () => {
    expect(() =>
      mod("string" as unknown as number, "string" as unknown as number)
    ).toThrow();
  });

  test("11.25 mod 7.5 is 3.75", () => {
    expect(mod(11.25, 7.5)).toBe(3.75);
  });
});
