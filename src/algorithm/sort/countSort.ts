// https://leetcode-cn.com/problems/sort-an-array/submissions/
// 912
export function countSort(originalArray: number[]): number[] {
  if (originalArray.length <= 1) {
    return originalArray;
  }

  const min = Math.min.apply(null, originalArray);
  const max = Math.max.apply(null, originalArray);
  const count = Array(max - min + 1)
    .fill(0);

  for (let i = 0; i < originalArray.length; i++) {
    count[originalArray[i] - min]++;
  }

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  const result = Array(originalArray.length)
    .fill(null);
  for (let i = originalArray.length - 1; i >= 0; i--) {
    result[count[originalArray[i] - min] - 1] = originalArray[i];
    count[originalArray[i] - min]--;
  }
  return result;
}
