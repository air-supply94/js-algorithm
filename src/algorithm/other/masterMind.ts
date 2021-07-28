// https://leetcode-cn.com/problems/master-mind-lcci/
// 金典-16.15
export function masterMind(solution: string, guess: string): number[] {
  const solutionArray = Array.from(solution);
  const guessArray = Array.from(guess);
  const result = [
    0,
    0,
  ];

  for (let i = 0; i < guess.length; i++) {
    if (solutionArray[i] === guessArray[i]) {
      result[0]++;
      solutionArray[i] = '';
      guessArray[i] = '';
    }
  }

  for (let i = 0; i < guessArray.length; i++) {
    for (let j = 0; j < solutionArray.length; j++) {
      if (guessArray[i] && solutionArray[j] && guessArray[i] === solutionArray[j]) {
        result[1]++;
        guessArray[i] = '';
        solutionArray[j] = '';
      }
    }
  }

  return result;
}
