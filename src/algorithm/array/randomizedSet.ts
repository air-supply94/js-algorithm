import { swap } from '../../utils';

// https://leetcode-cn.com/problems/insert-delete-getrandom-o1/
// 380
export class RandomizedSet {
  constructor() {
    this.hashMap = new Map<number, number>();
    this.items = [];
  }

  private readonly hashMap: Map<number, number>;

  private readonly items: number[];

  public insert(x: number): boolean {
    if (this.hashMap.has(x)) {
      return false;
    } else {
      this.items.push(x);
      this.hashMap.set(x, this.items.length - 1);
      return true;
    }
  }

  public remove(x: number): boolean {
    if (this.hashMap.has(x)) {
      const deleteIndex = this.hashMap.get(x);
      this.hashMap.set(this.items[this.items.length - 1], deleteIndex);
      swap(this.items, deleteIndex, this.items.length - 1);
      this.items.pop();
      this.hashMap.delete(x);
      return true;
    } else {
      return false;
    }
  }

  public getRandom(): number {
    return this.items[Math.floor(Math.random() * this.items.length)];
  }
}

// https://leetcode-cn.com/problems/random-pick-with-blacklist/
// 710
export class RandomizedSetBlackList {
  constructor(n: number, blackList: number[]) {
    const whiteLength = n - blackList.length;
    this.whiteLength = whiteLength;
    this.unorderedMap = new Map<number, number>();

    const blackMap = new Map<number, boolean>();
    for (let i = 0; i < blackList.length; i++) {
      blackMap.set(blackList[i], true);
    }

    const whiteRightList: number[] = [];
    for (let i = whiteLength; i < n; i++) {
      if (!blackMap.has(i)) {
        whiteRightList.push(i);
      }
    }

    const blackListLeft: number[] = [];
    for (let i = 0; i < blackList.length; i++) {
      if (blackList[i] < whiteLength) {
        blackListLeft.push(blackList[i]);
      }
    }

    for (let i = 0; i < blackListLeft.length; i++) {
      this.unorderedMap.set(blackListLeft[i], whiteRightList[i]);
    }
  }

  private readonly whiteLength: number;

  private readonly unorderedMap: Map<number, number>;

  public pick(): number {
    const k = Math.floor(Math.random() * this.whiteLength);
    if (this.unorderedMap.has(k)) {
      return this.unorderedMap.get(k);
    } else {
      return k;
    }
  }
}
