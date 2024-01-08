// https://leetcode.cn/problems/spiral-matrix/description/?envType=study-plan-v2&envId=top-100-liked
// 54
// top100
export function spiralOrder(array: number[][]): number[] {
  let top = 0;
  let bottom = array.length - 1;
  let left = 0;
  let right = array[0].length - 1;
  const result: number[] = [];

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(array[top][i]);
    }
    top++;

    for (let i = top; i <= bottom && left <= right; i++) {
      result.push(array[i][right]);
    }
    right--;

    for (let i = right; i >= left && top <= bottom; i--) {
      result.push(array[bottom][i]);
    }
    bottom--;

    for (let i = bottom; i >= top && left <= right; i--) {
      result.push(array[i][left]);
    }
    left++;
  }

  return result;
}
