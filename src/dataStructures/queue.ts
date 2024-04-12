// 剑指offer
// https://www.nowcoder.com/practice/54275ddae22f475981afa2244dd448c6
export class Queue {
  private readonly stack1: number[] = [];

  private readonly stack2: number[] = [];

  public push(value: number): void {
    this.stack1.push(value);
  }

  public pop(): number {
    if (this.stack2.length === 0) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }
}
