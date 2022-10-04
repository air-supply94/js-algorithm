import { swap } from '../../../utils';

// https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
// 215
export function findKthLargest(nums: number[], k: number, left = 0, right = nums.length - 1): number {
  if (left === right) {
    return nums[left];
  }

  const middle = partitionArray(nums, left, right);

  // const targetMin = (nums.length - 1) - (k - 1);
  const targetMin = nums.length - k;
  if (targetMin <= middle - 1) {
    return findKthLargest(nums, k, left, middle - 1);
  } else {
    return findKthLargest(nums, k, middle, right);
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
