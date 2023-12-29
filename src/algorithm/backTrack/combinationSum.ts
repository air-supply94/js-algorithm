// https://leetcode-cn.com/problems/combination-sum/
// 39
// 元素无重可复选
// top100
export function combinationSum(
  choices: number[],
  target: number,
  start = 0,
  currentPath: number[] = [],
  result: number[][] = []
): number[][] {
  if (target < 0) {
    return result;
  }

  if (target === 0) {
    result.push(currentPath.slice());

    return result;
  }

  for (let i = start; i < choices.length; i++) {
    currentPath.push(choices[i]);

    combinationSum(
      choices,
      target - choices[i],
      i,
      currentPath,
      result
    );

    currentPath.pop();
  }

  return result;
}
