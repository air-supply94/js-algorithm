import type { interfaces } from '../types';

export class Difference implements interfaces.Difference {
  constructor(nums: number[]) {
    this.diff = Array(nums.length).fill(null);

    this.diff[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
      this.diff[i] = nums[i] - nums[i - 1];
    }
  }

  private readonly diff: number[];

  public add(start: number, end: number, value: number): void {
    this.diff[start] += value;
    if (end + 1 < this.diff.length) {
      this.diff[end + 1] -= value;
    }
  }

  public toArray(): number[] {
    const result: number[] = Array(this.diff.length).fill(null);
    result[0] = this.diff[0];

    for (let i = 1; i < this.diff.length; i++) {
      result[i] = result[i - 1] + this.diff[i];
    }
    return result;
  }
}

// https://leetcode-cn.com/problems/corporate-flight-bookings/
// 1109
export function corpFlightBookings(bookings: number[][], n: number): number[] {
  const difference = new Difference(Array(n).fill(0));
  for (let i = 0; i < bookings.length; i++) {
    const item = bookings[i];
    difference.add(item[0] - 1, item[1] - 1, item[2]);
  }
  return difference.toArray();
}
