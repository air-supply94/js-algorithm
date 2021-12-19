function dfs(result: number[][], choice: number[], path: number[]): number[][] {
  if (!choice.length) {
    if (path.length) {
      result.push(path.slice());
    }
    return result;
  }

  for (let i = 0; i < choice.length; i++) {
    path.push(choice[i]);
    dfs(result, choice.filter((item) => item !== choice[i]), path);
    path.pop();
  }

  return result;
}

// https://leetcode-cn.com/problems/permutations/submissions/
// 46
export function permute(choice: number[]): number[][] {
  return dfs([], choice, []);
}
