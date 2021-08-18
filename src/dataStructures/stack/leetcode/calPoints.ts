// https://leetcode-cn.com/problems/baseball-game/
// 682
export function calPoints(options: string[]): number {
  const stack: number[] = [];
  for (let i = 0; i < options.length; i++) {
    const value = options[i];
    if (value === 'C') {
      stack.pop();
    } else if (value === 'D') {
      const last = stack.pop();
      stack.push(last);
      stack.push(last * 2);
    } else if (value === '+') {
      const last = stack.pop();
      const lastSecond = stack.pop();
      stack.push(lastSecond);
      stack.push(last);
      stack.push(last + lastSecond);
    } else {
      stack.push(Number(value));
    }
  }

  let result = 0;
  for (let i = 0; i < stack.length; i++) {
    result += stack[i];
  }
  return result;
}
