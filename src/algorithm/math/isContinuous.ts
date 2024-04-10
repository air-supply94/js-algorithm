// 剑指 Offer
// https://www.nowcoder.com/practice/762836f4d43d43ca9deb273b3de8e1f4
export function IsContinuous(numbers: number[]): boolean {
  let bitMap = 0;
  let minValue = Infinity;
  let maxValue = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) {
      const currentBit = 1 << numbers[i];
      if ((bitMap & currentBit) !== 0) {
        return false;
      }

      bitMap |= currentBit;
      minValue = Math.min(minValue, numbers[i]);
      maxValue = Math.max(maxValue, numbers[i]);
    }
  }

  return maxValue - minValue < 5;
}
