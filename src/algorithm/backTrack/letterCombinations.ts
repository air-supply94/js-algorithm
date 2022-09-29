// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
// 17
export function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }

  return dfs([], [], digits, 0);
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

function dfs(result: string[], currentPath: string[], digits: string, n: number): string[] {
  if (n === digits.length) {
    result.push(currentPath.join(''));
    return result;
  }

  for (let i = 0; i < dict[digits[n]].length; i++) {
    currentPath.push(dict[digits[n]][i]);
    dfs(result, currentPath, digits, n + 1);
    currentPath.pop();
  }

  return result;
}
