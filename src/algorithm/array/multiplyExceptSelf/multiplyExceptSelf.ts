export function multiplyExceptSelf(array: number[]): number[] {
  const result = [];
  const left = array.map(() => 1);
  const right = array.map(() => 1);
  for (let i = 1; i < array.length; i++) {
    left[i] = left[i - 1] * array[i - 1];
  }

  for (let i = array.length - 2; i > -1; i--) {
    right[i] = right[i + 1] * array[i + 1];
  }

  for (let i = 0; i < array.length; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
}
