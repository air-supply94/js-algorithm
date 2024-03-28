// 剑指offer 21
// https://www.nowcoder.com/practice/ef1f53ef31ca408cada5093c8780f44b
export function reOrderArray(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    const evenValue = array[i];
    if ((evenValue % 2) === 0) {
      let j = -1;
      for (let k = i + 1; k < array.length && j === -1; k++) {
        if ((array[k] % 2) === 1) {
          j = k;
        }
      }

      if (j === -1) {
        return array;
      }

      array[i] = array[j];
      let nextValue = evenValue;
      for (let k = i + 1; k <= j; k++) {
        const tmp = array[k];
        array[k] = nextValue;
        nextValue = tmp;
      }
    }
  }

  return array;
}

// 剑指offer 81
// https://www.nowcoder.com/practice/0c1b486d987b4269b398fee374584fc8
export function reOrderArrayTwo(array: number[]): number[] {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] % 2 === 0) {
      const tmp = array[left];
      array[left] = array[right];
      array[right] = tmp;
      right--;
    } else {
      left++;
    }
  }

  return array;
}
