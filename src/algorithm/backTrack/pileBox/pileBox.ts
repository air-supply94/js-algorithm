export function pileBox(choice: Array<[number, number, number]>): number {
  return Math.max.apply(null, recursion([], choice, [
    [
      0,
      0,
      0,
    ],
  ]));
}

function recursion(result: number[], choice: Array<[number, number, number]>, path: Array<[number, number, number]>): number[] {
  if (!choice.length) {
    result.push(path.reduce((prev, current) => prev + current[2], 0));
    return result;
  }

  for (let i = 0; i < choice.length; i++) {
    const currentItem = choice[i];
    const newChoice = choice.filter((item) => item[0] > currentItem[0] && item[1] > currentItem[1] && item[2] > currentItem[2]);
    path.push(currentItem);
    recursion(result, newChoice, path);
    path.pop();
  }

  return result;
}
