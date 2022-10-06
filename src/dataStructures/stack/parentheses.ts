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
// 22
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
  let need = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      need++;
    } else {
      need--;
      if (need === -1) {
        result++;
        need = 0;
      }
    }
  }

  return need + result;
}

// https://leetcode-cn.com/problems/minimum-insertions-to-balance-a-parentheses-string/
// 1541
export function minInsertions(s: string): number {
  let result = 0;
  let need = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      need += 2;
      if (need & 1) {
        result++;
        need--;
      }
    } else {
      need--;
      if (need === -1) {
        result++;
        need = 1;
      }
    }
  }

  return result + need;
}
