// https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/submissions/
// 150
export function calculatePostfixExpression(tokens: string[]): number {
  const stack: number[] = [];
  let num1: number = null;
  let num2: number = null;
  let token: string = null;
  let tmp: number = null;

  for (let i = 0; i < tokens.length; i++) {
    token = tokens[i];

    if (token === '+') {
      stack.push(stack.pop() + stack.pop());
    } else if (token === '-') {
      num2 = stack.pop();
      num1 = stack.pop();
      stack.push(num1 - num2);
    } else if (token === '*') {
      stack.push(stack.pop() * stack.pop());
    } else if (token === '/') {
      num2 = stack.pop();
      num1 = stack.pop();
      tmp = num1 / num2;
      stack.push(tmp > 0 ? Math.floor(tmp) : Math.ceil(tmp));
    } else {
      stack.push(parseInt(token, 10));
    }
  }

  return stack.pop();
}
