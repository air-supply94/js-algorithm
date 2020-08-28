export function tribonacci(n: number): number {
  n |= 0;
  let n0 = 0;
  let n1 = 1;
  let n2 = 1;

  if (n <= 0) {
    return n0;
  }

  while (n > 2) {
    const x = n0 + n1 + n2;
    n0 = n1;
    n1 = n2;
    n2 = x;
    n--;
  }

  return n2;
}
