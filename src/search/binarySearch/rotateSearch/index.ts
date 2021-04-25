export function rotateSearch<T = unknown>(rotateArray: T[], seekElement: T): number {
  let left = 0;
  let right = rotateArray.length - 1;
  let middleIndex = 0;
  while (left <= right) {
    middleIndex = left + Math.floor((right - left) / 2);
    if (seekElement === rotateArray[middleIndex]) {
      return middleIndex;
    } else if (rotateArray[middleIndex] >= rotateArray[left]) {
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