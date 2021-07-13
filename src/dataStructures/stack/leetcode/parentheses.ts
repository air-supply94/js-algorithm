// https://leetcode-cn.com/problems/valid-parentheses/
// 22
export function validParentheses(str: string): boolean {
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
