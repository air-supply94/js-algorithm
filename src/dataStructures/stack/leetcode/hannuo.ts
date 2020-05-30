import { Stack } from '../stack';

export function hannuo<T = unknown>(n: number, one: T, two: T, three: T) {
  function move(x: T, y: T): void {
    console.log(`${x}--->${y}`);
  }

  const stack = new Stack<{ n: number; one: T; two: T; three: T; }>();
  stack.push({
    n: n >>> 0 || 1,
    one,
    three,
    two,
  });

  while (!stack.isEmpty()) {
    const current = stack.pop();
    if (current.n === 1) {
      move(current.one, current.three);
    } else {
      stack.push({
        n: current.n - 1,
        one: current.two,
        two: current.one,
        three: current.three,
      });
      stack.push({
        n: 1,
        one: current.one,
        two: current.two,
        three: current.three,
      });
      stack.push({
        n: current.n - 1,
        one: current.one,
        two: current.three,
        three: current.two,
      });
    }
  }
}
