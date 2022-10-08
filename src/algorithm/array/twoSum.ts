// https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
// 167
export function twoSum(nums: number[], target: number): [number, number] {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] === target) {
      return [
        left + 1,
        right + 1,
      ];
    } else if (nums[left] + nums[right] < target) {
      left++;
    } else {
      right--;
    }
  }

  return [
    -1,
    -1,
  ];
}

// https://leetcode-cn.com/problems/two-sum-iii-data-structure-design/
// 170
export class TwoSum {
  constructor() {
    this.frequency = new Map<number, number>();
  }

  private readonly frequency: Map<number, number>;

  public add(x: number): void {
    this.frequency.set(x, (this.frequency.get(x) || 0) + 1);
  }

  public find(target: number): boolean {
    for (const value of this.frequency.keys()) {
      if ((target - value === value && this.frequency.get(target - value) > 1) || this.frequency.has(target - value)) {
        return true;
      }
    }

    return false;
  }
}
