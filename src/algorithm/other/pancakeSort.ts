// https://leetcode-cn.com/problems/pancake-sorting/
// 969
export function pancakeSort(arr: number[]): number[] {
  return recursion(arr, arr.length - 1, []);
}

function swap(data: unknown[], first: number, second: number): void {
  const t = data[first];
  data[first] = data[second];
  data[second] = t;
}

function recursion(cake: number[], index: number, res: number[]): number[] {
  if (index <= 0) {
    return res;
  }

  let maxValue = -Infinity;
  let maxIndex = 0;
  for (let i = 0; i <= index; i++) {
    if (cake[i] > maxValue) {
      maxIndex = i;
      maxValue = cake[i];
    }
  }

  if (maxIndex < index) {
    reverse(cake, 0, maxIndex);
    res.push(maxIndex + 1);
    reverse(cake, 0, index);
    res.push(index + 1);
  }

  return recursion(cake, index - 1, res);
}

function reverse(arr: number[], left: number, right: number): void {
  let i = left;
  let j = right;
  while (i < j) {
    swap(arr, i, j);
    i++;
    j--;
  }
}
