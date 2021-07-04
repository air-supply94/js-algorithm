// https://leetcode-cn.com/problems/combinations/submissions/
// 77
export function combine(n: number, k: number): number[][] {
  const choice = [];
  for (let i = 1; i <= n; i++) {
    choice.push(i);
  }

  const result: number[][] = [];
  function recursion(k: number, choice: number[], path: number[]): void {
    if (path.length === k) {
      result.push(path.slice());
      return;
    }

    for (let i = 0; i < choice.length; i++) {
      path.push(choice[i]);
      recursion(k, choice.filter((_, index) => index > i), path);
      path.pop();
    }
  }

  recursion(k, choice, []);
  return result;
}
