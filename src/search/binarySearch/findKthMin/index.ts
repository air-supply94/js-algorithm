export function findKthMin(arr1: number[], arr2: number[], n: number): number {
  if (arr1.length < 1) {
    return arr2[n - 1];
  }

  if (arr2.length < 1) {
    return arr1[n - 1];
  }

  let l1 = 0;
  const r1 = arr1.length - 1;
  let l2 = 0;
  const r2 = arr2.length - 1;
  let md1 = 0;
  let md2 = 0;
  let k = n - 1;
  let tmp = 0;

  while (l1 <= r1 && l2 <= r2 && k !== 0) {
    tmp = k >>> 1;
    md1 = l1 + tmp < r1 ? l1 + tmp : r1;
    md2 = l2 + tmp < (r2 - l1) ? l2 + tmp : r2;
    if (arr1[md1] < arr2[md2]) {
      l1 = md1 + 1;
      k = tmp - 1;
    } else if (arr1[md1] > arr2[md2]) {
      l2 = md2 + 1;
      k = tmp - 1;
    } else {
      return arr1[md1];
    }
  }

  if (l1 > r1) {
    return arr2[l2 + k];
  } else if (l2 > r2) {
    return arr1[l1 + k];
  } else {
    return Math.min(arr1[l1], arr2[l2]);
  }
}
