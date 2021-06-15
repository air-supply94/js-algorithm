function recursion(result: { value: number; }, k: number, choice: number[], path: number[]): { value: number; } {
  if (path.length === k) {
    result.value++;
    return result;
  }

  for (let i = 0; i < choice.length; i++) {
    path.push(choice[i]);
    recursion(result, k, choice.filter((_, index) => index > i), path);
    path.pop();
  }

  return result;
}

export function combine(n: number, k: number): number {
  const choice = [];
  for (let i = 1; i <= n; i++) {
    choice.push(i);
  }

  return recursion({ value: 0 }, k, choice, []).value;
}
