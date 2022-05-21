import {
  abs,
  acos,
  acosh,
  asin,
  asinh,
  atan,
  atan2,
  atanh,
  cbrt,
  ceil,
  clz32,
  cos,
  cosh,
  exp,
  expm1,
  floor,
  fround,
  hypot,
  imul,
  log,
  log10,
  log1p,
  log2,
  max,
  min,
  pow,
  random,
  round,
  sign,
  sin,
  sinh,
  sqrt,
  tan,
  tanh,
  trunc,
} from "../src";

describe("Native Math methods", () => {
  test("abs is Math.abs", () => {
    expect(abs).toBe(Math.abs);
  });

  test("acos is Math.acos", () => {
    expect(acos).toBe(Math.acos);
  });

  test("acosh is Math.acosh", () => {
    expect(acosh).toBe(Math.acosh);
  });

  test("asin is Math.asin", () => {
    expect(asin).toBe(Math.asin);
  });

  test("asinh is Math.asinh", () => {
    expect(asinh).toBe(Math.asinh);
  });

  test("atan is Math.atan", () => {
    expect(atan).toBe(Math.atan);
  });

  test("atan2 is Math.atan2", () => {
    expect(atan2).toBe(Math.atan2);
  });

  test("atanh is Math.atanh", () => {
    expect(atanh).toBe(Math.atanh);
  });

  test("cbrt is Math.cbrt", () => {
    expect(cbrt).toBe(Math.cbrt);
  });

  test("ceil is Math.ceil", () => {
    expect(ceil).toBe(Math.ceil);
  });

  test("clz32 is Math.clz32", () => {
    expect(clz32).toBe(Math.clz32);
  });

  test("cos is Math.cos", () => {
    expect(cos).toBe(Math.cos);
  });

  test("cosh is Math.cosh", () => {
    expect(cosh).toBe(Math.cosh);
  });

  test("exp is Math.exp", () => {
    expect(exp).toBe(Math.exp);
  });

  test("expm1 is Math.expm1", () => {
    expect(expm1).toBe(Math.expm1);
  });

  test("floor is Math.floor", () => {
    expect(floor).toBe(Math.floor);
  });

  test("fround is Math.fround", () => {
    expect(fround).toBe(Math.fround);
  });

  test("hypot is Math.hypot", () => {
    expect(hypot).toBe(Math.hypot);
  });

  test("imul is Math.imul", () => {
    expect(imul).toBe(Math.imul);
  });

  test("log is Math.log", () => {
    expect(log).toBe(Math.log);
  });

  test("log10 is Math.log10", () => {
    expect(log10).toBe(Math.log10);
  });

  test("log1p is Math.log1p", () => {
    expect(log1p).toBe(Math.log1p);
  });

  test("log2 is Math.log2", () => {
    expect(log2).toBe(Math.log2);
  });

  test("max is Math.max", () => {
    expect(max).toBe(Math.max);
  });

  test("min is Math.min", () => {
    expect(min).toBe(Math.min);
  });

  test("pow is Math.pow", () => {
    expect(pow).toBe(Math.pow);
  });

  test("random is Math.random", () => {
    expect(random).toBe(Math.random);
  });

  test("round is Math.round", () => {
    expect(round).toBe(Math.round);
  });

  test("sign is Math.sign", () => {
    expect(sign).toBe(Math.sign);
  });

  test("sin is Math.sin", () => {
    expect(sin).toBe(Math.sin);
  });

  test("sinh is Math.sinh", () => {
    expect(sinh).toBe(Math.sinh);
  });

  test("sqrt is Math.sqrt", () => {
    expect(sqrt).toBe(Math.sqrt);
  });

  test("tan is Math.tan", () => {
    expect(tan).toBe(Math.tan);
  });

  test("tanh is Math.tanh", () => {
    expect(tanh).toBe(Math.tanh);
  });

  test("trunc is Math.trunc", () => {
    expect(trunc).toBe(Math.trunc);
  });
});
