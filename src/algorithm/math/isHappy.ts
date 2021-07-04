// https://leetcode-cn.com/problems/happy-number/
// 202
export function isHappy(n: number): boolean {
  const tmp = new Map<number, boolean>();
  let x = n;
  while (x !== 1 && !tmp.has(x)) {
    tmp.set(x, true);
    x = String(x)
      .split('')
      .reduce((prev, current) => prev + Math.pow(Number(current), 2), 0);
  }

  return x === 1;
}
