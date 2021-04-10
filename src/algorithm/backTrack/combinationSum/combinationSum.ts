function combinationSumRecursive(
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

    combinationSumRecursive(
      result,
      choice.slice(i),
      currentPath,
      target - choice[i]
    );

    currentPath.pop();
  }

  return result;
}

export function combinationSum(candidates: number[], target: number): number[][] {
  return combinationSumRecursive([], candidates, [], target);
}
