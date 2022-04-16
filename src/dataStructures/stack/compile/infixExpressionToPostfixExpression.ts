// https://zhuanlan.zhihu.com/p/37467928
export function infixExpressionToPostfixExpression(infixExpression: string[]): string[] {
  const signStack: string[] = [];
  const postfixExpression: string[] = [];
  let token: string = null;

  for (let i = 0; i < infixExpression.length; i++) {
    token = infixExpression[i];
    if (token === '+' || token === '-' || token === '*' || token === '/') {
      if (
        signStack.length === 0 ||
        signStack[signStack.length - 1] === '(' ||
        ((token === '*' || token === '/') && (signStack[signStack.length - 1] === '+' || signStack[signStack.length - 1] === '-'))) {
        signStack.push(token);
      } else {
        postfixExpression.push(signStack.pop());
        i--;
      }
    } else if (token === '(') {
      signStack.push(token);
    } else if (token === ')') {
      while (signStack.length > 0) {
        const tmp = signStack.pop();
        if (tmp === '(') {
          break;
        }
        postfixExpression.push(tmp);
      }
    } else {
      postfixExpression.push(token);
    }
  }

  while (signStack.length > 0) {
    postfixExpression.push(signStack.pop());
  }

  return postfixExpression;
}
