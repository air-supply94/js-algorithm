// https://leetcode.cn/problems/decode-string/description/?envType=study-plan-v2&envId=top-100-liked
// 394
// top100
export function decodeString(s: string): string {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (item === ']') {
      let str = '';
      while (stack[stack.length - 1] !== '[') {
        str = `${stack.pop()}${str}`;
      }
      stack.pop();

      let sum = '';
      while (/\d/.test(stack[stack.length - 1])) {
        sum = `${stack.pop()}${sum}`;
      }

      let stackStr = '';
      for (let j = 0; j < Number(sum); j++) {
        stackStr = `${stackStr}${str}`;
      }
      stack.push(stackStr);
    } else {
      stack.push(item);
    }
  }

  return stack.join('');
}
