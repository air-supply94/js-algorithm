export function multiplyUnsigned(x1: number, x2: number): number {
  let result = 0;

  let multiplier = x2;

  let bitIndex = 0;

  while (multiplier !== 0) {
    if (multiplier & 1) {
      result += (x1 << bitIndex);
    }

    bitIndex++;
    multiplier >>= 1;
  }

  return result;
}
