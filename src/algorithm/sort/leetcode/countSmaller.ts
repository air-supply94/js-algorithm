interface Item {
  value: number;
  index: number;
}

// https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/
// 315
// 类似 https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/
// 剑指 Offer 51. 数组中的逆序对
function countSmaller(nums: number[]): number[] {
  const count: number[] = Array(nums.length)
    .fill(0);

  function mergeSort(originalArray: Item[], left = 0, right = originalArray.length - 1): void {
    if (left >= right) {
      return;
    }

    const middleIndex = left + Math.floor((right - left) / 2);
    mergeSort(originalArray, left, middleIndex);
    mergeSort(originalArray, middleIndex + 1, right);
    mergeSortedArrays(originalArray, left, right);
  }

  function mergeSortedArrays(originalArray: Item[], left: number, right: number): void {
    const result: Item[] = Array(right - left + 1);
    const middleIndex = left + Math.floor((right - left) / 2);
    let i = left;
    let j = middleIndex + 1;
    let k = 0;

    while (i <= middleIndex && j <= right) {
      if (originalArray[j].value < originalArray[i].value) {
        result[k] = originalArray[j];
        k++;
        j++;
      } else {
        result[k] = originalArray[i];
        count[originalArray[i].index] += (j - 1) - (middleIndex + 1) + 1;
        k++;
        i++;
      }
    }

    while (i <= middleIndex) {
      result[k] = originalArray[i];
      count[originalArray[i].index] += (j - 1) - (middleIndex + 1) + 1;
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

  mergeSort(nums.map((item, index) => ({
    value: item,
    index,
  })));
  return count;
}
