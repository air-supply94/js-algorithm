export class BloomFilter {
  constructor(size = 100) {
    this.data = Array(size)
      .fill(0);
  }

  private readonly data: number[];

  public insert(item: string): void {
    this.getHashValues(item)
      .forEach((val) => {
        this.data[val] = 1;
      });
  }

  public contain(item: string): boolean {
    return this.getHashValues(item)
      .every((val) => this.data[val]);
  }

  public hash1(item: string): number {
    let hash = 0;

    for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
      hash = (hash << 5) + hash + item.charCodeAt(charIndex);
      hash &= hash;
      hash = Math.abs(hash);
    }

    return hash % this.data.length;
  }

  public hash2(item: string): number {
    let hash = 5381;

    for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
      hash = (hash << 5) + hash + item.charCodeAt(charIndex);
    }

    return Math.abs(hash % this.data.length);
  }

  public hash3(item: string): number {
    let hash = 0;

    for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
      hash = (hash << 5) - hash;
      hash += item.charCodeAt(charIndex);
      hash &= hash;
    }

    return Math.abs(hash % this.data.length);
  }

  public getHashValues(item: string): number[] {
    return [
      this.hash1(item),
      this.hash2(item),
      this.hash3(item),
    ];
  }
}
