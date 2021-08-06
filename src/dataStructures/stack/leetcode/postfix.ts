// https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/submissions/
// 150
export function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token === '+') {
      stack.push(stack.pop() + stack.pop());
    } else if (token === '-') {
      const num2 = stack.pop();
      const num1 = stack.pop();
      stack.push(num1 - num2);
    } else if (token === '*') {
      stack.push(stack.pop() * stack.pop());
    } else if (token === '/') {
      const num2 = stack.pop();
      const num1 = stack.pop();
      stack.push(num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2));
    } else {
      stack.push(parseInt(token, 10));
    }
  }
  return stack.pop();
}
