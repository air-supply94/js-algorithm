// https://leetcode.cn/problems/min-stack/description/?envType=study-plan-v2&envId=top-100-liked
// 155
// top100

export class MinStack {
  private valueStack: number[] = [];

  private minValueStack: number[] = [];

  public push(val: number): void {
    this.valueStack.push(val);
    this.minValueStack.push(Math.min(val, this.getMin()));
  }

  public pop(): void {
    this.valueStack.pop();
    this.minValueStack.pop();
  }

  public top(): number {
    return this.valueStack[this.valueStack.length - 1];
  }

  public getMin(): number {
    return this.minValueStack.length === 0
      ? Number.POSITIVE_INFINITY
      : this.minValueStack[this.minValueStack.length - 1];
  }
}
