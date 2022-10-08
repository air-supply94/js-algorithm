// https://leetcode-cn.com/problems/valid-parenthesis-string/
// 678
export function checkValidString(s: string): boolean {
  const leftBraceStack: number[] = [];
  const placeholderStack: number[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      leftBraceStack.push(i);
    } else if (s[i] === '*') {
      placeholderStack.push(i);
    } else if (s[i] === ')') {
      if (leftBraceStack.length > 0) {
        leftBraceStack.pop();
      } else if (placeholderStack.length > 0) {
        placeholderStack.pop();
      } else {
        return false;
      }
    }
  }

  if (leftBraceStack.length > placeholderStack.length) {
    return false;
  }

  while (leftBraceStack.length > 0) {
    if (leftBraceStack.pop() > placeholderStack.pop()) {
      return false;
    }
  }

  return true;
}
