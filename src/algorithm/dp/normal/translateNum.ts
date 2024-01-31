// https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
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

// 剑指offer 46
export function solve(nums: string): number {
  if (nums === '0') {
    return 0;
  }

  let dp_i_0 = 1;
  let dp_i_1 = 1;

  for (let i = 1; i < nums.length; i++) {
    const high = Number(nums[i - 1]);
    const low = Number(nums[i]);
    if (low === 0) {
      if (high !== 1 && high !== 2) {
        return 0;
      }
    }

    const tmp = high * 10 + low;
    const tmp_dp_i_1 = dp_i_1;
    if (tmp >= 11 && tmp <= 26 && tmp !== 20) {
      dp_i_1 += dp_i_0;
    }

    dp_i_0 = tmp_dp_i_1;
  }

  return dp_i_1;
}
