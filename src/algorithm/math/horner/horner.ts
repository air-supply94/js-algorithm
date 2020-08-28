export function horner(an: number[], x: number): number {
  let v = 0;
  let n = an.length - 1;
  while (n >= 0) {
    v = v * x + an[n];
    n--;
  }
  return v;
}
