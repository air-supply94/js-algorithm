// https://leetcode-cn.com/problems/count-primes/
// 204
// 类似
export function sieve(n: number): number[] {
  const result = Array(n + 1)
    .fill(null)
    .map((item, index) => index);
  result[1] = 0;

  for (let i = 2; i <= Math.floor(Math.pow(n, 0.5)); i++) {
    if (result[i] !== 0) {
      for (let j = i * i; j < n; j += i) {
        result[j] = 0;
      }
    }
  }

  return result.filter(Boolean);
}
