// 剑指 Offer
// https://www.nowcoder.com/practice/29311ff7404d44e0b07077f4201418f5
export function findNthDigit(n: number): number {
  let nthDigit = 1;
  let start = 1;

  let sum = 9;
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
