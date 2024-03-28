// https://leetcode.cn/problems/min-stack/description/?envType=study-plan-v2&envId=top-100-liked
// 155
// top100

export class MinStack {
  private valueStack: number[] = [];

  private minValue = Infinity;

  private minValueStack: number[] = [];

  public push(val: number): void {
    this.valueStack.push(val);
    this.minValue = Math.min(this.minValue, val);
    this.minValueStack.push(this.minValue);
  }

  public pop(): void {
    this.valueStack.pop();
    this.minValueStack.pop();
    this.minValue = this.minValueStack.length ? this.minValueStack[this.minValueStack.length - 1] : Infinity;
  }

  public top(): number {
    return this.valueStack[this.valueStack.length - 1];
  }

  public getMin(): number {
    return this.minValue;
  }
}
