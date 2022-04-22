// https://leetcode-cn.com/problems/happy-number/
// 202
export function isHappy(n: number): boolean {
  const visited = new Set<number>();
  let x = n;
  while (x !== 1 && visited.has(x) === false) {
    visited.add(x);
    x = String(x)
      .split('')
      .reduce((prev, current) => prev + Math.pow(Number(current), 2), 0);
  }

  return x === 1;
}
