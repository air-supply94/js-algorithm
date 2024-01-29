// https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target/
// 744
// 类似,需要根据题意简单改动
export function findFirstLarge(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middleIndex = left + Math.floor((right - left) / 2);
    const middleValue = arr[middleIndex];
    if (middleValue <= target) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  }

  return left <= arr.length - 1 && arr[left] > target ? left : -1;
}
