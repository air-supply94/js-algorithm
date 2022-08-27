export function swap(data: unknown[], first: number, second: number): void {
  const t = data[first];
  data[first] = data[second];
  data[second] = t;
}

export function reverse(array: unknown[], startIndex: number, endIndex: number): unknown[] {
  let i = startIndex;
  let j = endIndex;

  while (i < j) {
    swap(array, i, j);
    i++;
    j--;
  }

  return array;
}
