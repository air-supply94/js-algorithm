// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
// 17
export function letterCombinations(digits: string): string[] {
  if (!digits.length) {
    return [];
  }

  const dict: {[key: string]: string[]; } = {
    '2': [
      'a',
      'b',
      'c',
    ],
    '3': [
      'd',
      'e',
      'f',
    ],
    '4': [
      'g',
      'h',
      'i',
    ],
    '5': [
      'j',
      'k',
      'l',
    ],
    '6': [
      'm',
      'n',
      'o',
    ],
    '7': [
      'p',
      'q',
      'r',
      's',
    ],
    '8': [
      't',
      'u',
      'v',
    ],
    '9': [
      'w',
      'x',
      'y',
      'z',
    ],
  };

  const result: string[] = [];

  function dfs(currentPath: string, n: number): void {
    if (n === digits.length) {
      result.push(currentPath);
      return;
    }
    const choice: string[] = dict[digits[n]];
    for (let i = 0; i < choice.length; i++) {
      dfs(currentPath + choice[i], n + 1);
    }
  }

  dfs('', 0);
  return result;
}
