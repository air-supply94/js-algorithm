// https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
// 剑指 Offer 46
// 165
export function crackNumber(num: number): number {
  const str = String(num);
  let dp_i_0 = 1;
  let dp_i_1 = 1;

  for (let i = 1; i < str.length; i++) {
    const tmp = Number(str[i - 1]) * 10 + Number(str[i]);
    const tmp_dp_i_1 = dp_i_1;
    if (tmp >= 10 && tmp <= 25) {
      dp_i_1 += dp_i_0;
    }

    dp_i_0 = tmp_dp_i_1;
  }

  return dp_i_1;
}
