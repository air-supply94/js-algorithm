// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
// 33
export function rotateSearchElement(rotateArray: number[], seekElement: number): number {
  let left = 0;
  let right = rotateArray.length - 1;
  let middleIndex = 0;

  while (left <= right) {
    middleIndex = (left + right) >>> 1;
    if (seekElement === rotateArray[middleIndex]) {
      return middleIndex;
    }

    if (rotateArray[middleIndex] > rotateArray[right]) {
      if (rotateArray[left] <= seekElement && seekElement < rotateArray[middleIndex]) {
        right = middleIndex - 1;
      } else {
        left = middleIndex + 1;
      }
    } else {
      if (rotateArray[middleIndex] < seekElement && seekElement <= rotateArray[right]) {
        left = middleIndex + 1;
      } else {
        right = middleIndex - 1;
      }
    }
  }

  return -1;
}

// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
// 153
export function rotateSearchMin(rotateArray: number[]): number {
  let left = 0;
  let right = rotateArray.length - 1;
  let middle: number;

  while (left <= right) {
    middle = (left + right) >>> 1;
    if (rotateArray[middle] > rotateArray[right]) {
      left = middle + 1;
    } else if (rotateArray[middle] === rotateArray[right]) {
      right = middle - 1;
    } else {
      right = middle;
    }
  }

  return rotateArray[left];
}
