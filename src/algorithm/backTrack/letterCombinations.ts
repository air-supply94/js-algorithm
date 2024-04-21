// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
// 17
// top100
export function letterCombinations(digits: string, path: string[] = [], startIndex = 0, result: string[] = []): string[] {
  if (digits.length === 0) {
    return [];
  }

  if (startIndex === digits.length) {
    result.push(path.join(''));
    return result;
  }

  const children = dict[digits[startIndex]];
  for (let i = 0; i < children.length; i++) {
    path.push(children[i]);
    letterCombinations(digits, path, startIndex + 1, result);
    path.pop();
  }

  return result;
}

const dict: Record<string, string[]> = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
};
