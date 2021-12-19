// https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/
// 852
export function peakIndexInMountainArray(arr: number[]): number {
  let left = 1;
  let right = arr.length - 2;
  let middle: number = null;

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2);
    if (arr[middle - 1] < arr[middle] && arr[middle] > arr[middle + 1]) {
      return middle;
    } else if (arr[middle - 1] < arr[middle] && arr[middle] < arr[middle + 1]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return middle;
}
