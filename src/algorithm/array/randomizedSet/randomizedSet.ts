import { swap } from '../../../utils';

export class RandomizedSet {
  constructor() {
    this.hashTable = Object.create(null);
    this.items = [];
  }

  private readonly hashTable: {[key: number]: number; };

  private readonly items: number[];

  public insert(x: number): boolean {
    if (x in this.hashTable) {
      return false;
    } else {
      this.items.push(x);
      this.hashTable[x] = this.items.length - 1;
      return true;
    }
  }

  public remove(val: number): boolean {
    if (val in this.hashTable) {
      const deleteIndex = this.hashTable[val];
      this.hashTable[this.items[this.items.length - 1]] = deleteIndex;
      swap(this.items, deleteIndex, this.items.length - 1);
      this.items.pop();
      delete this.hashTable[val];
      return true;
    } else {
      return false;
    }
  }

  public getRandom(): number {
    return this.items[Math.floor(Math.random() * this.items.length)];
  }
}

export class RandomizedSetBlackList {
  constructor(n: number, blackList: number[]) {
    this.unorderedMap = Object.create(null);
    const whiteLength = n - blackList.length;
    this.whiteLength = whiteLength;

    const whiteListRight = [];
    const blackListMap = Object.create(null);
    for (let i = 0; i < blackList.length; i++) {
      blackListMap[i] = true;
    }

    for (let i = whiteLength; i < n; i++) {
      if (!(i in blackListMap)) {
        whiteListRight.push(i);
      }
    }

    blackList.filter((x) => (x < whiteLength))
      .forEach((black, index) => {
        this.unorderedMap[black] = whiteListRight[index];
      });
  }

  private readonly whiteLength: number;

  private readonly unorderedMap: {[key: number]: number; };

  public pick(): number {
    const k = Math.floor(Math.random() * this.whiteLength);
    if (k in this.unorderedMap) {
      return this.unorderedMap[k];
    } else {
      return k;
    }
  }
}
