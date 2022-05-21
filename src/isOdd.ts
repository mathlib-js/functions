function isOdd(n: number): boolean {
  if (isNaN(n)) {
    throw new Error("n should be a number.");
  }

  const _n = typeof n === "string" ? parseFloat(n as unknown as string) : n;

  if (!Number.isInteger(_n)) {
    throw new Error("Fractions cannot be even or odd.");
  }

  return n % 2 !== 0;
}

export default isOdd;
