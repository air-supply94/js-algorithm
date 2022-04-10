// https://leetcode-cn.com/problems/sparse-array-search-lcci/
// 金典-10.05
export function findString(words: string[], s: string): number {
  let left = 0;
  let right = words.length - 1;

  while (left <= right) {
    while (left <= right && words[left] === '') {
      left++;
    }
    while (left <= right && words[right] === '') {
      right--;
    }

    let middle = (left + right) >>> 1;
    while (middle <= right && words[middle] === '') {
      middle++;
    }

    if (s < words[middle]) {
      right = middle - 1;
    } else if (s === words[middle]) {
      return middle;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}
