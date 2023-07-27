// https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/
// 315
// 这里使用reversePairs第二种思路,还需要遍历左侧到middle的所有元素,故采用第一种思路
export function countSmaller(nums: number[]): number[] {
  const count: number[] = Array(nums.length)
    .fill(0);

  function mergeSort(originalArray: Array<[number, number]>, left = 0, right = originalArray.length - 1): void {
    if (left >= right) {
      return;
    }

    const middleIndex = (left + right) >>> 1;
    mergeSort(originalArray, left, middleIndex);
    mergeSort(originalArray, middleIndex + 1, right);
    mergeSortedArrays(originalArray, left, right);
  }

  function mergeSortedArrays(originalArray: Array<[number, number]>, left: number, right: number): void {
    const result: Array<[number, number]> = Array(right - left + 1);
    const middleIndex = (left + right) >>> 1;
    let i = left;
    let j = middleIndex + 1;
    let k = 0;

    while (i <= middleIndex && j <= right) {
      if (originalArray[j][0] < originalArray[i][0]) {
        result[k] = originalArray[j];
        k++;
        j++;
      } else {
        result[k] = originalArray[i];
        count[originalArray[i][1]] += (j - 1) - (middleIndex + 1) + 1;
        k++;
        i++;
      }
    }

    while (i <= middleIndex) {
      result[k] = originalArray[i];
      count[originalArray[i][1]] += (j - 1) - (middleIndex + 1) + 1;
      k++;
      i++;
    }

    while (j <= right) {
      result[k] = originalArray[j];
      k++;
      j++;
    }

    for (let l = 0; l < result.length; l++) {
      originalArray[l + left] = result[l];
    }
  }

  mergeSort(nums.map((item, index) => ([
    item,
    index,
  ])));
  return count;
}
