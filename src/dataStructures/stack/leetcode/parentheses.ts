// https://leetcode-cn.com/problems/valid-parentheses/
// 22
export function isValid(str: string): boolean {
  const stack: string[] = [];
  const startMap = new Map<string, number>();
  const endMap = new Map<string, string>();
  const start = [
    '{',
    '[',
    '(',
  ];
  const end = [
    '}',
    ']',
    ')',
  ];

  start.forEach((item) => {
    startMap.set(item, 1);
  });

  end.forEach((item, index) => {
    endMap.set(item, start[index]);
  });

  for (let i = 0; i < str.length; i++) {
    if (startMap.has(str[i])) {
      stack.push(str[i]);
    } else if (endMap.has(str[i])) {
      if (!stack.length) {
        return false;
      }

      if (endMap.get(str[i]) !== stack.pop()) {
        return false;
      }
    }
  }

  return !stack.length;
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

  return result + need;
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
