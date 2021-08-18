// https://leetcode-cn.com/problems/remove-duplicate-letters/
// 316
export function removeDuplicateLetters(s: string): string {
  const countMap = new Map<string, number>();
  const charMap = new Map<string, boolean>();
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    countMap.set(s[i], (countMap.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    countMap.set(item, countMap.get(item) - 1);

    if (!charMap.has(item)) {
      while (stack.length && stack[stack.length - 1].charCodeAt(0) > s.charCodeAt(i) && countMap.get(stack[stack.length - 1]) > 0) {
        charMap.delete(stack.pop());
      }

      charMap.set(item, true);
      stack.push(item);
    }
  }

  let result = '';
  while (stack.length) {
    result = `${stack.pop()}${result}`;
  }
  return result;
}
