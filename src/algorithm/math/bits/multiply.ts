export function multiply(a: number, b: number): number {
  if (b === 0 || a === 0) {
    return 0;
  }

  if ((b & 1) === 0) {
    return multiply(a << 1, b >> 1);
  }

  if (b > 0) {
    return multiply(a << 1, (b - 1) >> 1) + a;
  } else {
    return multiply(a << 1, (b + 1) >> 1) - a;
  }
}
