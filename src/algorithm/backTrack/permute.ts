function dfs(result: number[][], choice: number[], path: number[], used: number[]): number[][] {
  if (choice.length === path.length) {
    result.push(path.slice());
    return result;
  }

  for (let i = 0; i < choice.length; i++) {
    if (used[i] === 0) {
      // 判断重复: i > 0 && choice[i] == choice[i - 1] && used[i - 1] === 1
      used[i] = 1;
      path.push(choice[i]);

      dfs(result, choice, path, used);

      used[i] = 0;
      path.pop();
    }
  }

  return result;
}

// https://leetcode-cn.com/problems/permutations/submissions/
// 46
export function permute(choice: number[]): number[][] {
  return dfs([], choice, [], choice.map(() => 0));
}
