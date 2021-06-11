export function twoSum(nums: number[], target: number): [number, number] {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] === target) {
      return [
        left,
        right,
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

export class TwoSum {
  constructor() {
    this.frequency = new Map<number, number>();
  }

  private readonly frequency: Map<number, number>;

  public add(x: number): void {
    if (this.frequency.has(x)) {
      this.frequency.set(x, this.frequency.get(x) + 1);
    } else {
      this.frequency.set(x, 1);
    }
  }

  public find(target: number): boolean {
    for (const value of this.frequency.keys()) {
      const other = target - value;

      if (other === value && this.frequency.get(other) > 1) {
        return true;
      }

      if (other !== value && this.frequency.has(other)) {
        return true;
      }
    }

    return false;
  }
}
