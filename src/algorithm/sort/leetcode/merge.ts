// https://leetcode-cn.com/problems/merge-sorted-array/
// 88
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (n === 0) {
    return;
  }

  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums2[j] >= nums1[i]) {
      nums1[k] = nums2[j];
      j--;
      k--;
    } else {
      nums1[k] = nums1[i];
      i--;
      k--;
    }
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}
