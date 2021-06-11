export function sieve(n: number): number[] {
  const result = Array(n + 1)
    .fill(null)
    .map((item, index) => index);
  result[1] = 0;

  for (let i = 2; i <= Math.floor(Math.pow(n, 0.5)); i++) {
    if (result[i] !== 0) {
      let j = i * i;
      while (j <= n) {
        result[j] = 0;
        j += i;
      }
    }
  }

  return result.filter(Boolean);
}
