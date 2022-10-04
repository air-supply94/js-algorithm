// https://leetcode-cn.com/problems/sort-an-array/submissions/
// 912
export function mergeSort(originalArray: number[], left = 0, right = originalArray.length - 1): number[] {
  if (left >= right) {
    return originalArray;
  }

  const middleIndex = (left + right) >>> 1;
  mergeSort(originalArray, left, middleIndex);
  mergeSort(originalArray, middleIndex + 1, right);
  mergeSortedArrays(originalArray, left, right);
  return originalArray;
}

function mergeSortedArrays(originalArray: number[], left: number, right: number): void {
  const result: number[] = Array(right - left + 1).fill(null);
  const middleIndex = (left + right) >>> 1;
  let l = left;
  let r = middleIndex + 1;
  let k = 0;

  while (l <= middleIndex && r <= right) {
    if (originalArray[r] < originalArray[l]) {
      result[k] = originalArray[r];
      k++;
      r++;
    } else {
      result[k] = originalArray[l];
      k++;
      l++;
    }
  }

  while (l <= middleIndex) {
    result[k] = originalArray[l];
    k++;
    l++;
  }

  while (r <= right) {
    result[k] = originalArray[r];
    k++;
    r++;
  }

  for (let i = 0; i < result.length; i++) {
    originalArray[i + left] = result[i];
  }
}
