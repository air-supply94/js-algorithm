// https://leetcode-cn.com/problems/XagZNi/
// 剑指 Offer II 037
export function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];
  for (let i = 0; i < asteroids.length; i++) {
    let destroySelf = false;
    while (stack.length && stack[stack.length - 1] > 0 && asteroids[i] < 0 && destroySelf === false) {
      const currentValue = -asteroids[i];
      const previousValue = stack[stack.length - 1];
      if (currentValue === previousValue) {
        stack.pop();
        destroySelf = true;
      } else if (currentValue < previousValue) {
        destroySelf = true;
      } else {
        stack.pop();
      }
    }

    if (destroySelf === false) {
      stack.push(asteroids[i]);
    }
  }

  return stack;
}
