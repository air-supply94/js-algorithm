import { swap } from '../../../utils';

export class RandomizedSet {
  constructor() {
    this.hashTable = Object.create(null);
    this.items = [];
  }

  private readonly hashTable: {[key: number]: number; };

  private readonly items: number[] ;

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
