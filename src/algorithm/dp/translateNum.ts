// https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
// 剑指 Offer 46
export function translateNum(num: number): number {
  const str = String(num);
  let dp_i_1 = 1;
  let dp_i_2 = 1;
  let dp_i = 1;
  let tmp: number;

  for (let i = 1; i < str.length; i++) {
    tmp = Number(str[i - 1]) * 10 + Number(str[i]);
    if (tmp >= 10 && tmp <= 25) {
      dp_i = dp_i_1 + dp_i_2;
    } else {
      dp_i = dp_i_1;
    }

    dp_i_2 = dp_i_1;
    dp_i_1 = dp_i;
  }

  return dp_i;
}
