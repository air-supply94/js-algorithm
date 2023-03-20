function dfs(
  result: number[][],
  choices: number[],
  start: number,
  currentPath: number[],
  target: number
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

    dfs(
      result,
      choices,
      i,
      currentPath,
      target - choices[i]
    );

    currentPath.pop();
  }

  return result;
}

// https://leetcode-cn.com/problems/combination-sum/
// 39
// 元素无重可复选
export function combinationSum(choices: number[], target: number): number[][] {
  return dfs([], choices, 0, [], target);
}
