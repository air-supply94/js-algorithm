// https://leetcode-cn.com/problems/subsets/
// 78
export function subsets(originalSet: number[]): number[][] {
  const result: number[][] = [[]];
  for (let i = 0; i < originalSet.length; i++) {
    const size = result.length;
    for (let j = 0; j < size; j++) {
      result.push(result[j].concat(originalSet[i]));
    }
  }

  return result;
}
