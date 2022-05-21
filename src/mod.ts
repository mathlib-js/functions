function mod(a: number, n: number): number {
  if (isNaN(a)) {
    throw new Error("a should be a number.");
  }

  if (isNaN(n)) {
    throw new Error("n should be a number.");
  }

  const _a = typeof a === "string" ? parseFloat(a as unknown as string) : a;
  const _n = typeof n === "string" ? parseFloat(n as unknown as string) : n;

  return ((_a % _n) + _n) % _n;
}

export default mod;
