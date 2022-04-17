// https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
// 剑指 Offer 46
export function translateNum(num: number): number {
  const str = String(num);
  if (str.length <= 1) {
    return str.length;
  }

  let tmp: number = Number(str[0]) * 10 + Number(str[1]);
  let dp_i_0 = 1;
  let dp_i_1 = tmp >= 10 && tmp <= 25 ? 2 : 1;
  let current = dp_i_1;

  for (let i = 2; i < str.length; i++) {
    tmp = Number(str[i - 1]) * 10 + Number(str[i]);
    if (tmp >= 10 && tmp <= 25) {
      current = dp_i_0 + dp_i_1;
    } else {
      current = dp_i_1;
    }

    dp_i_0 = dp_i_1;
    dp_i_1 = current;
  }

  return current;
}
