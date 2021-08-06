// https://leetcode-cn.com/problems/backspace-string-compare/
// 844
export function backspaceCompare(str1: string, str2: string): boolean {
  function getString(str: string): string {
    const stack: string[] = [];
    for (const item of str) {
      if (item === '#') {
        stack.pop();
      } else {
        stack.push(item);
      }
    }

    return stack.join('');
  }

  return getString(str1) === getString(str2);
}
