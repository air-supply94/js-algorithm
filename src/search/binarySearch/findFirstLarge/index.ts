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

  if (left <= arr.length - 1 && arr[left] > target) {
    return left;
  } else {
    return -1;
  }
}
