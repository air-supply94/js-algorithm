// https://zhuanlan.zhihu.com/p/37467928
export function infixExpressionToPostfixExpression(infixExpression: string[]): string[] {
  const signStack: string[] = [];
  const expressionStack: string[] = [];
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
        expressionStack.push(signStack.pop());
        i--;
      }
    } else if (token === '(') {
      signStack.push(token);
    } else if (token === ')') {
      while (signStack.length > 0 && signStack[signStack.length - 1] !== '(') {
        expressionStack.push(signStack.pop());
      }
      signStack.pop();
    } else {
      expressionStack.push(token);
    }
  }

  while (signStack.length > 0) {
    expressionStack.push(signStack.pop());
  }

  return expressionStack;
}
