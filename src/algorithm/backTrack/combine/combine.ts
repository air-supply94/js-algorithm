export function combine(n: number, k: number): number {
  const choice = [];
  for (let i = 1; i <= n; i++) {
    choice.push(i);
  }

  let result = 0;
  function recursion(k: number, choice: number[], path: number[]): void {
    if (path.length === k) {
      result++;
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
