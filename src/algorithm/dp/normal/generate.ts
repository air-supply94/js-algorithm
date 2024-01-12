// https://leetcode.cn/problems/pascals-triangle/description/?envType=study-plan-v2&envId=top-100-liked
// 118
// top100

export function generate(n: number): number[][] {
  const result: number[][] = [[1]];
  for (let i = 2; i <= n; i++) {
    const rowResult = Array(i).fill(null);
    rowResult[0] = 1;
    rowResult[rowResult.length - 1] = 1;

    for (let j = 1; j < rowResult.length - 1; j++) {
      rowResult[j] = result[i - 2][j] + result[i - 2][j - 1];
    }
    result.push(rowResult);
  }
  return result;
}
