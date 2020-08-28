export function sieve(n: number): number[] {
  const result = Array(n)
    .fill(null)
    .map((item, index) => index + 1);

  for (let i = 2; i <= Math.floor(Math.pow(n, 0.5)); i++) {
    if (result[i - 1] !== 0) {
      let j = i * i;
      while (j <= n) {
        result[j - 1] = 0;
        j += i;
      }
    }
  }

  return result.filter((item) => item !== 0 && item !== 1);
}
