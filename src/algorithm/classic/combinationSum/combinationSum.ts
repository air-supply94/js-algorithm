function combinationSumRecursive(
  candidates: number[],
  remainingSum: number,
  finalCombinations: number[][] = [],
  currentCombination: number[] = [],
  startFrom = 0
): number[][] {
  if (remainingSum < 0) {
    return finalCombinations;
  }

  if (remainingSum === 0) {
    finalCombinations.push(currentCombination.slice());

    return finalCombinations;
  }

  for (let candidateIndex = startFrom; candidateIndex < candidates.length; candidateIndex++) {
    const currentCandidate = candidates[candidateIndex];

    currentCombination.push(currentCandidate);

    combinationSumRecursive(
      candidates,
      remainingSum - currentCandidate,
      finalCombinations,
      currentCombination,
      candidateIndex
    );

    currentCombination.pop();
  }

  return finalCombinations;
}

export function combinationSum(candidates: number[], target: number): number[][] {
  return combinationSumRecursive(candidates, target);
}
