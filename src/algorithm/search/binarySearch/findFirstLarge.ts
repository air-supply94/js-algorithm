// https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target/
// 744
// 类似，需要根据题意简单改动
export function findFirstLarge(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] === target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left <= arr.length - 1 && arr[left] > target ? left : -1;
}
