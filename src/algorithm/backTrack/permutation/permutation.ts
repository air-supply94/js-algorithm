function recursion(result: number[][], choice: number[], path: number[]): number[][] {
  if (!choice.length) {
    if (path.length) {
      result.push(path.slice());
    }
    return result;
  }

  for (let i = 0; i < choice.length; i++) {
    path.push(choice[i]);
    recursion(result, choice.filter((item) => item !== choice[i]), path);
    path.pop();
  }

  return result;
}

export function permutation(choice: number[]): number[][] {
  return recursion([], choice, []);
}
