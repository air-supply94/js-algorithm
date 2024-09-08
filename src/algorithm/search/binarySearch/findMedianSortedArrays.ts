// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
// 4
// top100
export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const length1 = nums1.length;
  const length2 = nums2.length;
  const totalLength = length1 + length2;

  if (totalLength % 2 == 1) {
    const midIndex = totalLength >>> 1;
    return getKth(nums1, 0, nums1.length - 1, nums2, 0, nums2.length - 1, midIndex + 1);
  } else {
    const midIndex1 = (totalLength >>> 1) - 1;
    const midIndex2 = totalLength >>> 1;
    return (
      getKth(nums1, 0, nums1.length - 1, nums2, 0, nums2.length - 1, midIndex1 + 1) / 2 +
      getKth(nums1, 0, nums1.length - 1, nums2, 0, nums2.length - 1, midIndex2 + 1) / 2
    );
  }
}

// 2个有序数组An和Bn,如果An的长度小于等于Bn
// A[k/2] < B[k/2],则A[1,2,...,k/2]都不可能是第k小的数(A[1,2,...,k/2] < B[k/2])
function getKth(arr1: number[], l1: number, r1: number, arr2: number[], l2: number, r2: number, k: number): number {
  const len1 = r1 - l1 + 1;
  const len2 = r2 - l2 + 1;
  if (len1 > len2) {
    return getKth(arr2, l2, r2, arr1, l1, r1, k);
  }

  if (len1 === 0) {
    return arr2[l2 + k - 1];
  }

  if (k === 1) {
    return Math.min(arr1[l1], arr2[l2]);
  }

  const i = l1 + Math.min(len1, k >>> 1) - 1;
  const j = l2 + Math.min(len2, k >>> 1) - 1;
  if (arr1[i] < arr2[j]) {
    return getKth(arr1, i + 1, r1, arr2, l2, r2, k - (i - l1 + 1));
  } else {
    return getKth(arr1, l1, r1, arr2, j + 1, r2, k - (j - l2 + 1));
  }
}
