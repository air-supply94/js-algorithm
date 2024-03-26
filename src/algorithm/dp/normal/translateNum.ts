// https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
// 165
export function crackNumber(num: number): number {
  const str = String(num);
  let previousValue = 1;
  let currentValue = 1;

  for (let i = 1; i < str.length; i++) {
    const tmp = Number(str[i - 1]) * 10 + Number(str[i]);
    const tmpCurrentValue = currentValue;
    if (tmp >= 10 && tmp <= 25) {
      currentValue += previousValue;
    }

    previousValue = tmpCurrentValue;
  }

  return currentValue;
}

// 剑指offer 46
export function solve(nums: string): number {
  if (nums === '0') {
    return 0;
  }

  let previousValue = 1;
  let currentValue = 1;

  for (let i = 1; i < nums.length; i++) {
    const high = Number(nums[i - 1]);
    const low = Number(nums[i]);
    if (low === 0 && high !== 1 && high !== 2) {
      return 0;
    }

    const tmp = high * 10 + low;
    const tmpCurrentValue = currentValue;
    if (tmp >= 11 && tmp <= 26 && tmp !== 20) {
      currentValue += previousValue;
    }

    previousValue = tmpCurrentValue;
  }

  return currentValue;
}
