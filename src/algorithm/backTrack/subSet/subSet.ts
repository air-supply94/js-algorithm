export function subSet(originalSet: unknown[]): unknown[][] {
  const result = [[]];
  let size = 0;
  for (let i = 0; i < originalSet.length; i++) {
    size = result.length;
    for (let j = 0; j < size; j++) {
      result.push(result[j].concat(originalSet[i]));
    }
  }

  return result;
}
