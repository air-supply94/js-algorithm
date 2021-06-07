import { Stack } from '../../stack';
import { StackInterface } from '../../stack/types';

export class FrequencyStack {
  constructor() {
    this.freqHashMap = {};
    this.freqHashStack = {};
    this.maxFreq = 0;
  }

  private maxFreq: number;

  private readonly freqHashMap: {[key: number]: number; };

  private readonly freqHashStack: {[key: number]: StackInterface<number>; };

  public push(item: number): void {
    const oldCount = this.freqHashMap[item];
    if (oldCount) {
      const newCount = oldCount + 1;
      this.freqHashMap[item] = newCount;

      if (!this.freqHashStack[newCount]) {
        this.freqHashStack[newCount] = new Stack<number>();
      }
      this.freqHashStack[newCount].push(item);

      this.maxFreq = Math.max(newCount, this.maxFreq);
    } else {
      this.freqHashMap[item] = 1;

      if (!this.freqHashStack[1]) {
        this.freqHashStack[1] = new Stack<number>();
      }
      this.freqHashStack[1].push(item);

      this.maxFreq = Math.max(1, this.maxFreq);
    }
  }

  public pop(): number {
    if (this.maxFreq === 0) {
      return null;
    }

    const value = this.freqHashStack[this.maxFreq].pop();
    this.freqHashMap[value] -= 1;

    if (this.freqHashStack[this.maxFreq].isEmpty()) {
      this.maxFreq -= 1;
    }

    return value;
  }
}
