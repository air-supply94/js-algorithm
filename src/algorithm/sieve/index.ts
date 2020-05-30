export function sieve(n: number): number[] {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }

  for (let i = 2; i <= Math.floor(Math.pow(n, 0.5)); i++) {
    if (result[i - 1] !== 0) {
      let j = i * i;
      while (j <= n) {
        result[j - 1] = 0;
        j += i;
      }
    }
  }

  return result.filter((n) => n !== 0 && n !== 1);
}
