// 剑指offer
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
