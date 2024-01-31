// https://leetcode-cn.com/problems/XagZNi/
export function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];
  for (let i = 0; i < asteroids.length; i++) {
    let currentValue = -asteroids[i];
    while (stack.length && stack[stack.length - 1] > 0 && asteroids[i] < 0 && currentValue > 0) {
      const previousValue = stack[stack.length - 1];
      if (currentValue === previousValue) {
        stack.pop();
        currentValue = 0;
      } else if (currentValue < previousValue) {
        currentValue = 0;
      } else {
        stack.pop();
      }
    }

    if (currentValue !== 0) {
      stack.push(asteroids[i]);
    }
  }

  return stack;
}
