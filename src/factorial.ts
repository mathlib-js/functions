function factorial(n: number): number {
  if (isNaN(n)) {
    throw new Error("n should be a number.");
  }
  
  let _n = typeof n === "string" ? parseFloat(n as unknown as string) : n;

  if (!Number.isInteger(_n)) {
    throw new Error("Factorial of fractions are not supported.");
  }

  if (_n < 0) {
    throw new Error("n should not be negative.");
  }

  let fact = 1;
  while (_n > 1) {
    fact *= _n--;
  }

  return fact;
}

export default factorial;
