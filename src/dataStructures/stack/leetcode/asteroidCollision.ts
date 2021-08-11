// https://leetcode-cn.com/problems/XagZNi/
// 剑指 Offer II 037
export function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];
  for (let i = 0; i < asteroids.length; i++) {
    let destroySelf = false;
    let currentItem = asteroids[i];

    while (stack.length && stack[stack.length - 1] > 0 && currentItem < 0) {
      const currentItemAbs = Math.abs(currentItem);
      const peekNodeAbs = Math.abs(stack[stack.length - 1]);
      if (currentItemAbs === peekNodeAbs) {
        stack.pop();
        destroySelf = true;
        currentItem = 0;
      } else if (currentItemAbs < peekNodeAbs) {
        destroySelf = true;
        currentItem = 0;
      } else {
        stack.pop();
      }
    }

    if (!destroySelf) {
      stack.push(asteroids[i]);
    }
  }

  return stack;
}
