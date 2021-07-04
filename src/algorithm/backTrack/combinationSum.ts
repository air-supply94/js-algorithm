function recursion(
  result: number[][],
  choice: number[],
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

  for (let i = 0; i < choice.length; i++) {
    currentPath.push(choice[i]);

    recursion(
      result,
      choice.slice(i),
      currentPath,
      target - choice[i]
    );

    currentPath.pop();
  }

  return result;
}

// https://leetcode-cn.com/problems/combination-sum/
// 39
export function combinationSum(choices: number[], target: number): number[][] {
  return recursion([], choices, [], target);
}
