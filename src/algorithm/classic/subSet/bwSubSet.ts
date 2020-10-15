export function bwSubSet<T = unknown>(originalSet: T[]): T[][] {
  const subSets = [];

  const length = Math.pow(2, originalSet.length);

  for (let i = 0; i < length; i++) {
    const subSet = [];

    for (let j = 0; j < originalSet.length; j++) {
      if (i & (1 << j)) {
        subSet.push(originalSet[j]);
      }
    }

    subSets.push(subSet);
  }

  return subSets;
}
