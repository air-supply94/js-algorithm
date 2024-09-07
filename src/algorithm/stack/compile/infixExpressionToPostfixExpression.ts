// https://zhuanlan.zhihu.com/p/37467928
export function infixExpressionToPostfixExpression(infixExpression: string[]): string[] {
  const signStack: string[] = [];
  const expressionStack: string[] = [];
  let i = 0;

  while (i < infixExpression.length) {
    const token = infixExpression[i];
    switch (token) {
      case ' ':
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        if (
          signStack.length === 0 ||
          signStack[signStack.length - 1] === '(' ||
          ((token === '*' || token === '/') && (signStack[signStack.length - 1] === '+' || signStack[signStack.length - 1] === '-'))
        ) {
          signStack.push(token);
        } else {
          expressionStack.push(signStack.pop());
          i--;
        }
        break;
      case '(':
        signStack.push(token);
        break;
      case ')':
        while (signStack.length > 0 && signStack[signStack.length - 1] !== '(') {
          expressionStack.push(signStack.pop());
        }
        signStack.pop();
        break;
      default:
        expressionStack.push(token);
    }
    i++;
  }

  while (signStack.length > 0) {
    expressionStack.push(signStack.pop());
  }

  return expressionStack;
}
