export function findKthMin(arr1: number[], arr2: number[], n: number): number {
  return getKth(arr1, 0, arr1.length - 1, arr2, 0, arr2.length - 1, n);
}

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
  if (arr1[i] > arr2[j]) {
    return getKth(arr1, l1, r1, arr2, j + 1, r2, k - (j - l2 + 1));
  } else {
    return getKth(arr1, i + 1, r1, arr2, l2, r2, k - (i - l1 + 1));
  }
}
