// https://leetcode.cn/problems/search-a-2d-matrix-ii/?envType=study-plan-v2&envId=top-100-liked
// 240
// top100
export function searchMatrix(matrix: number[][], target: number): boolean {
  const height = matrix.length;
  const width = matrix[0].length;

  let h = height - 1;
  let w = 0;
  while (h >= 0 && h < height && w >= 0 && w < width) {
    if (matrix[h][w] === target) {
      return true;
    } else if (matrix[h][w] > target) {
      h--;
    } else {
      w++;
    }
  }

  return false;
}
