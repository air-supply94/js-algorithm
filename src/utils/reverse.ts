export function reverse(array: unknown[], startIndex: number, endIndex: number): unknown[] {
  let i = startIndex;
  let j = endIndex;

  while (i < j) {
    const t = array[i];
    array[i] = array[j];
    array[j] = t;
    i++;
    j--;
  }

  return array;
}
