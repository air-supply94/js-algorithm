import { Stack } from '../stack';

export function hannuo(n: number, one: string, two: string, three: string) {
  function move(x: string, y: string): void {
    console.log(`${x}--->${y}`);
  }

  const stack = new Stack<{ n: number; one: string; two: string; three: string }>();
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
