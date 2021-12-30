// https://leetcode-cn.com/problems/XagZNi/
// 剑指 Offer II 037
export function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];
  for (let i = 0; i < asteroids.length; i++) {
    let destroySelf = false;
    while (stack.length && stack[stack.length - 1] > 0 && asteroids[i] < 0 && !destroySelf) {
      const currentItemAbs = -asteroids[i];
      const peekNodeAbs = stack[stack.length - 1];
      if (currentItemAbs === peekNodeAbs) {
        stack.pop();
        destroySelf = true;
      } else if (currentItemAbs < peekNodeAbs) {
        destroySelf = true;
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
