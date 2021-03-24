export function isHappy(n: number): boolean {
  const tmp = Object.create(null);
  let x = n;
  while (x !== 1 && !tmp[x]) {
    tmp[x] = true;
    x = String(x)
      .split('')
      .reduce((prev, current) => prev + Math.pow(Number(current), 2), 0);
  }

  return x === 1;
}
