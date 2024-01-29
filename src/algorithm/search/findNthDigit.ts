// 剑指 Offer 44
export function findNthDigit(n: number): number {
  let nthDigit = 1;
  let start = 1;

  // 9
  let sum = (Math.pow(10, nthDigit) - start) * nthDigit;
  while (n > sum) {
    n -= sum;
    nthDigit++;
    start *= 10;
    sum = (Math.pow(10, nthDigit) - start) * nthDigit;
  }

  const num = `${start + Math.floor((n - 1) / nthDigit)}`;
  const index = (n - 1) % nthDigit;
  return Number(num[index]);
}
