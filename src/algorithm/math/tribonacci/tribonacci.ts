export function tribonacci(x: number): number {
  let n = x | 0;
  let n0 = 0;
  let n1 = 1;
  let n2 = 1;

  if (n <= 0) {
    return n0;
  }

  while (n > 2) {
    const tmp = n0 + n1 + n2;
    n0 = n1;
    n1 = n2;
    n2 = tmp;
    n--;
  }

  return n2;
}
