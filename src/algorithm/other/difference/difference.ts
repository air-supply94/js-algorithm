export class Difference {
  constructor(nums: number[]) {
    this.diff = Array(nums.length)
      .fill(null);

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
    const result = Array(this.diff.length)
      .fill(null);
    result[0] = this.diff[0];

    for (let i = 1; i < this.diff.length; i++) {
      result[i] = result[i - 1] + this.diff[i];
    }
    return result;
  }
}
