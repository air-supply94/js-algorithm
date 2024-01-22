// https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
// 215
// top100
// 347. 前 K 个高频元素(思路类似,将其转化为数量的对比即可)
export function findKthLargest(nums: number[], k: number, left = 0, right = nums.length - 1): number {
  if (left === right) {
    return nums[left];
  }

  const partitionIndex = partitionArray(nums, left, right);
  const targetIndex = (nums.length - 1) - (k - 1);
  if (targetIndex <= partitionIndex - 1) {
    return findKthLargest(nums, k, left, partitionIndex - 1);
  } else {
    return findKthLargest(nums, k, partitionIndex, right);
  }
}

function partitionArray(originalArray: number[], left: number, right: number): number {
  const baseItem = originalArray[left + Math.floor(Math.random() * (right - left + 1))];
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
      const t = originalArray[i];
      originalArray[i] = originalArray[j];
      originalArray[j] = t;
      i++;
      j--;
    }
  }

  return i;
}
