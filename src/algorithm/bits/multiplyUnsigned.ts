/**
 * Multiply to unsigned numbers using bitwise operator.
 *
 * The main idea of bitwise multiplication is that every number may be split
 * to the sum of powers of two:
 *
 * I.e. 19 = 2^4 + 2^1 + 2^0
 *
 * Then multiplying number x by 19 is equivalent of:
 *
 * x * 19 = x * 2^4 + x * 2^1 + x * 2^0
 *
 * Now we need to remember that (x * 2^4) is equivalent of shifting x left by 4 bits (x << 4).
 */
export function multiplyUnsigned(x1: number, x2: number): number {
  let result = 0;

  // Let's treat number2 as a multiplier for the number1.
  let multiplier = x2;

  // Multiplier current bit index.
  let bitIndex = 0;

  // Go through all bits of number2.
  while (multiplier !== 0) {
    // Check if current multiplier bit is set.
    if (multiplier & 1) {
      /* In case if multiplier's bit at position bitIndex is set
         it would mean that we need to multiply number1 by the power
         of bit with index bitIndex and then add it to the result. */
      result += (x1 << bitIndex);
    }

    bitIndex += 1;
    multiplier >>= 1;
  }

  return result;
}
