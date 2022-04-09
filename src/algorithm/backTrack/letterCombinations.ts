// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
// 17
export function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }

  const dict: Record<string, string[]> = {
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

  function dfs(currentPath: string[], n: number): void {
    if (n === digits.length) {
      result.push(currentPath.join(''));
      return;
    }

    for (let i = 0; i < dict[digits[n]].length; i++) {
      currentPath.push(dict[digits[n]][i]);
      dfs(currentPath, n + 1);
      currentPath.pop();
    }
  }

  dfs([], 0);
  return result;
}
