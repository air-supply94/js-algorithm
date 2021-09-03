// https://leetcode-cn.com/problems/multiply-strings/submissions/
// 43
export function multiply(num1: string, num2: string): string {
  const h = num1.length;
  const w = num2.length;
  const result: number[] = Array(h + w)
    .fill(0);
  let sum = 0;

  for (let i = h - 1; i >= 0; i--) {
    for (let j = w - 1; j >= 0; j--) {
      sum = Number(num1[i]) * Number(num2[j]) + result[i + j + 1];
      result[i + j + 1] = sum % 10;
      result[i + j] += (sum / 10) | 0;
    }
  }

  let res = '';
  let i = 0;
  while (i < result.length && result[i] === 0) {
    i++;
  }
  while (i < result.length) {
    res = `${res}${result[i]}`;
    i++;
  }

  if (res) {
    return res;
  } else {
    return '0';
  }
}
