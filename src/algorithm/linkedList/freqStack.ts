// https://leetcode-cn.com/problems/maximum-frequency-stack/submissions/
// 895
export class FreqStack {
  private maxFreq = 0;

  private readonly freqMap = new Map<number, number>();

  private readonly freqStackMap = new Map<number, number[]>();

  public push(item: number): void {
    const oldCount = this.freqMap.get(item);
    if (oldCount > 0) {
      const newCount = oldCount + 1;
      this.freqMap.set(item, newCount);

      if (!this.freqStackMap.has(newCount)) {
        this.freqStackMap.set(newCount, []);
      }
      this.freqStackMap.get(newCount)
        .push(item);

      this.maxFreq = Math.max(newCount, this.maxFreq);
    } else {
      this.freqMap.set(item, 1);

      if (!this.freqStackMap.has(1)) {
        this.freqStackMap.set(1, []);
      }
      this.freqStackMap.get(1)
        .push(item);

      this.maxFreq = Math.max(1, this.maxFreq);
    }
  }

  public pop(): number {
    if (this.maxFreq === 0) {
      return null;
    }

    const value = this.freqStackMap.get(this.maxFreq)
      .pop();
    this.freqMap.set(value, this.freqMap.get(value) - 1);

    if (this.freqStackMap.get(this.maxFreq).length === 0) {
      this.maxFreq -= 1;
    }

    return value;
  }
}
