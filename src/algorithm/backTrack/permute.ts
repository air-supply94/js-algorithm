// https://leetcode-cn.com/problems/permutations/submissions/
// 46
export function permute(choice: number[], path: number[] = [], visited: number[] = Array(choice.length).fill(0), result: number[][] = []): number[][] {
  // 达到n层(n可以换成m层)
  if (choice.length === path.length) {
    result.push(path.slice());
    return result;
  }

  for (let i = 0; i < choice.length; i++) {
    // 去掉去重复就是: 元素无重可复选
    if (visited[i] === 0) {
      // 元素可重不可复选
      // if (i > 0 && choice[i] == choice[i - 1] && !visited[i - 1]) {
      //   continue;
      // }

      visited[i] = 1;
      path.push(choice[i]);

      permute(choice, path, visited, result);

      visited[i] = 0;
      path.pop();
    }
  }

  return result;
}
