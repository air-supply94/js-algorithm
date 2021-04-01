export function findFirstLarge(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    if (arr[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
}
