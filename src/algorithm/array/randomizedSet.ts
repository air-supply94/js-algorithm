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
    this.unorderedMap = new Map<number, number>();
    this.whiteLength = n - blackList.length;
    this.init(n, blackList);
  }

  private init(n: number, blackList: number[]) {
    const whiteLength = this.whiteLength;

    const whiteListRight = [];
    const blackListMap = new Map<number, boolean>();
    for (let i = 0; i < blackList.length; i++) {
      blackListMap.set(blackList[i], true);
    }

    for (let i = whiteLength; i < n; i++) {
      if (!blackListMap.has(i)) {
        whiteListRight.push(i);
      }
    }

    const leftBlack = blackList.filter((x) => (x < whiteLength));
    leftBlack.forEach((black, index) => {
      this.unorderedMap.set(black, whiteListRight[index]);
    });
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
