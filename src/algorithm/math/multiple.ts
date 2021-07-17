// https://leetcode-cn.com/problems/multiply-strings/submissions/
// 43
export function multiply(num1: string, num2: string): string {
  const h = num1.length;
  const w = num2.length;
  const result: number[] = Array(h + w)
    .fill(0);

  for (let i = h - 1; i >= 0; i--) {
    for (let j = w - 1; j >= 0; j--) {
      const multi = Number(num1[i]) * Number(num2[j]);
      const currentPosition = i + j + 1;
      const sum = multi + result[currentPosition];
      result[currentPosition] = sum % 10;
      result[currentPosition - 1] += (sum / 10) | 0;
    }
  }

  let res = '';
  for (let i = 0; i < result.length; i++) {
    if (result[i] || res.length) {
      res = `${res}${result[i]}`;
    }
  }

  if (res) {
    return res;
  } else {
    return '0';
  }
}
