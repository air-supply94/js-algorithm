import { Stack } from '../../../dataStructures/stack';

export function removeDuplicateLetters(s: string): string {
  const countMap = new Map<string, number>();
  const charMap = new Map<string, boolean>();
  const stack = new Stack<string>();

  for (let i = 0; i < s.length; i++) {
    countMap.set(s[i], (countMap.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    countMap.set(s[i], countMap.get(s[i]) - 1);

    if (!charMap.has(s[i])) {
      while (!stack.isEmpty() && stack.peek().charCodeAt(0) > s.charCodeAt(i) && countMap.get(stack.peek()) > 0) {
        charMap.delete(stack.pop());
      }

      charMap.set(s[i], true);
      stack.push(s[i]);
    }
  }

  let result = '';
  while (!stack.isEmpty()) {
    result = `${stack.pop()}${result}`;
  }
  return result;
}
