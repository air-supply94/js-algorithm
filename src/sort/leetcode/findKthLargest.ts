import { swap } from '../../utils';

// https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
// 215
export function findKthLargest(nums: number[], k: number, low = 0, high = nums.length - 1): number {
  if (low === high) {
    return nums[low];
  }

  const middle = partitionArray(nums, low, high);
  const target = nums.length - k;
  if (target < middle - 1) {
    return findKthLargest(nums, k, low, middle - 1);
  } else if (target === middle - 1) {
    return findKthLargest(nums, k, low, middle - 1);
  } else {
    return findKthLargest(nums, k, middle, high);
  }
}

function partitionArray(originalArray: number[], left: number, right: number): number {
  const baseItem = originalArray[(left + right) >>> 1];
  let i = left;
  let j = right;

  while (i <= j) {
    while (originalArray[i] < baseItem) {
      i++;
    }

    while (originalArray[j] > baseItem) {
      j--;
    }

    if (i <= j) {
      swap(originalArray, i, j);
      i++;
      j--;
    }
  }

  return i;
}
