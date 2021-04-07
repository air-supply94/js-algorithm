function recursion(result: number[][], choice: number[], path: number[]): number[][] {
  if (!choice.length) {
    if (path.length) {
      result.push(path);
    }
    return result;
  }

  for (let i = 0; i < choice.length; i++) {
    recursion(result, choice.filter((item) => item !== choice[i]), path.concat(choice[i]));
  }

  return result;
}

export function permutation(choice: number[]): number[][] {
  return recursion([], choice, []);
}
