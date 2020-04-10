import { Stack } from '../stack';

export function balanceSymbol(str: string): boolean {
  const stack = new Stack<string>();
  const specialStartSymbol = [
    '{',
    '[',
    '(',
  ];
  const specialStopSymbol = [
    '}',
    ']',
    ')',
  ];

  for (let i = 0; i < str.length; i++) {
    if (specialStartSymbol.includes(str[i])) {
      stack.push(str[i]);
    } else if (specialStopSymbol.includes(str[i])) {
      if (stack.isEmpty()) {
        return false;
      }

      if (specialStartSymbol[specialStopSymbol.indexOf(str[i])] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}
