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
    this.frequency = Object.create(null);
  }

  private readonly frequency: {[key: number]: number; };

  public add(x: number): void {
    if (x in this.frequency) {
      this.frequency[x] += 1;
    } else {
      this.frequency[x] = 1;
    }
  }

  public find(target: number): boolean {
    const items = Object.keys(this.frequency)
      .map((x) => Number(x));

    for (let i = 0; i < items.length; i++) {
      const other = target - items[i];

      if (other === items[i] && this.frequency[other] > 1) {
        return true;
      }

      if (other !== items[i] && other in this.frequency) {
        return true;
      }
    }

    return false;
  }
}
