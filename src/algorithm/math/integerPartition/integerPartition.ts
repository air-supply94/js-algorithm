export function integerPartition(number: number): number {
  const partitionMatrix = Array(number + 1)
    .fill(null)
    .map(() => {
      return Array(number + 1)
        .fill(null);
    });

  for (let numberIndex = 1; numberIndex <= number; numberIndex += 1) {
    partitionMatrix[0][numberIndex] = 0;
  }

  for (let i = 0; i <= number; i += 1) {
    partitionMatrix[i][0] = 1;
  }

  for (let i = 1; i <= number; i += 1) {
    for (let j = 1; j <= number; j += 1) {
      if (i > j) {
        partitionMatrix[i][j] = partitionMatrix[i - 1][j];
      } else {
        const combosWithoutSum = partitionMatrix[i - 1][j];
        const combosWithSum = partitionMatrix[i][j - i];

        partitionMatrix[i][j] = combosWithoutSum + combosWithSum;
      }
    }
  }

  return partitionMatrix[number][number];
}
