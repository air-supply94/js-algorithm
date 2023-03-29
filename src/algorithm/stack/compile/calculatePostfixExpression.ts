// https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/submissions/
// 150
export function calculatePostfixExpression(tokens: string[]): number {
  const stack: number[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const item = tokens[i];

    if (item === '+') {
      stack.push(stack.pop() + stack.pop());
    } else if (item === '-') {
      const num2 = stack.pop();
      const num1 = stack.pop();
      stack.push(num1 - num2);
    } else if (item === '*') {
      stack.push(stack.pop() * stack.pop());
    } else if (item === '/') {
      const num2 = stack.pop();
      const num1 = stack.pop();
      const tmp = num1 / num2;
      stack.push(tmp > 0 ? Math.floor(tmp) : Math.ceil(tmp));
    } else {
      stack.push(Number(item));
    }
  }

  return stack.pop();
}
