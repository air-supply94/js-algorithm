export function isValidEasy(str: string): boolean {
  let leftBrace = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      leftBrace++;
    } else {
      leftBrace--;
      if (leftBrace === -1) {
        return false;
      }
    }
  }

  return leftBrace === 0;
}

// https://leetcode-cn.com/problems/valid-parentheses/
// 20
// top100
export function isValid(str: string): boolean {
  const stack: string[] = [];
  const startSet = new Set<string>([
    '(',
    '{',
    '[',
  ]);
  const endMap = new Map<string, string>();

  endMap.set(')', '(');
  endMap.set('}', '{');
  endMap.set(']', '[');

  for (let i = 0; i < str.length; i++) {
    if (startSet.has(str[i])) {
      stack.push(str[i]);
    } else {
      if (stack.length === 0 || endMap.get(str[i]) !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// https://leetcode-cn.com/problems/minimum-add-to-make-parentheses-valid/
// 921
export function minAddToMakeValid(s: string): number {
  let result = 0;
  let needRightBrace = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      needRightBrace++;
    } else {
      needRightBrace--;
      if (needRightBrace === -1) {
        result++;
        needRightBrace = 0;
      }
    }
  }

  return needRightBrace + result;
}

// https://leetcode-cn.com/problems/minimum-insertions-to-balance-a-parentheses-string/
// 1541
export function minInsertions(s: string): number {
  let result = 0;
  let needRightBrace = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      needRightBrace += 2;
      if (needRightBrace & 1) {
        result++;
        needRightBrace--;
      }
    } else {
      needRightBrace--;
      if (needRightBrace === -1) {
        result++;
        needRightBrace = 1;
      }
    }
  }

  return result + needRightBrace;
}
