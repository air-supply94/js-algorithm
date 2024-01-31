// 类似 https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/
// 剑指 Offer 51
// 第一种思路归的时候,左侧元素小于等于右侧元素时,左侧元素必然大于右侧索引减1的所有元素
// 第二种思路就是第一种思路的反方向,左侧元素大于右侧元素时,则右侧元素必然小于左侧及后面的所有元素
export function reversePairs(nums: number[]): number {
  let count = 0;
  function mergeSort(originalArray: number[], left = 0, right = originalArray.length - 1): number[] {
    if (left >= right) {
      return originalArray;
    }

    const middleIndex = (left + right) >>> 1;
    mergeSort(originalArray, left, middleIndex);
    mergeSort(originalArray, middleIndex + 1, right);
    mergeSortedArrays(originalArray, left, right);
    return originalArray;
  }

  function mergeSortedArrays(originalArray: number[], left: number, right: number): void {
    const result: number[] = Array(right - left + 1);
    const middleIndex = (left + right) >>> 1;
    let i = left;
    let j = middleIndex + 1;
    let k = 0;

    while (i <= middleIndex && j <= right) {
      if (originalArray[j] < originalArray[i]) {
        result[k] = originalArray[j];

        // 第二种思路,注销第一种思路对应count累加
        // count += middleIndex - i + 1;
        k++;
        j++;
      } else {
        result[k] = originalArray[i];

        // 第一种思路
        count += (j - 1) - (middleIndex + 1) + 1;
        k++;
        i++;
      }
    }

    while (i <= middleIndex) {
      result[k] = originalArray[i];

      // 第一种思路
      count += (j - 1) - (middleIndex + 1) + 1;
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

  mergeSort(nums);
  return count;
}
