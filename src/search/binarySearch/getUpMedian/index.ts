export function getUpMedian(arr1: number[], arr2: number[]): number {
  let l1 = 0;
  let r1 = arr1.length - 1;
  let l2 = 0;
  let r2 = arr2.length - 1;
  let mid1 = 0;
  let mid2 = 0;
  let offset = 0;
  while (l1 < r1) {
    mid1 = l1 + Math.floor((r1 - l1) / 2);
    mid2 = l2 + Math.floor((r2 - l2) / 2);
    offset = ((r1 - l1 + 1) & 1) ^ 1;
    if (arr1[mid1] < arr2[mid2]) {
      l1 = mid1 + offset;
      r2 = mid2;
    } else if (arr1[mid1] > arr2[mid2]) {
      r1 = mid1;
      l2 = mid2 + offset;
    } else {
      return arr1[mid1];
    }
  }

  return Math.min(arr1[l1], arr2[l2]);
}
