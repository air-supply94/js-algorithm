export function gcd(m: number, n: number): number {
  [
    m,
    n,
  ] = [
    m | 0,
    n | 0,
  ].sort();

  while (m > 0) {
    const r = n % m;
    n = m;
    m = r;
  }
  return n;
}
