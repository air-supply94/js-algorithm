const bitLength = 32;

function hash1(item: string, length: number): number {
  let hash = 0;

  for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
    hash = (hash << 5) + hash + item.charCodeAt(charIndex);
    hash &= hash;
    hash = Math.abs(hash);
  }

  return hash % length;
}

function hash2(item: string, length: number): number {
  let hash = 5381;

  for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
    hash = (hash << 5) + hash + item.charCodeAt(charIndex);
  }

  return Math.abs(hash) % length;
}

function hash3(item: string, length: number): number {
  let hash = 0;

  for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
    hash = (hash << 5) - hash;
    hash += item.charCodeAt(charIndex);
    hash &= hash;
  }

  return Math.abs(hash) % length;
}

export class BloomFilter {
  constructor(size = 100) {
    this.data = Array(size)
      .fill(0);
  }

  private readonly data: number[];

  private getHashValues(item: string): number[] {
    return [
      hash1(item, this.data.length * bitLength),
      hash2(item, this.data.length * bitLength),
      hash3(item, this.data.length * bitLength),
    ];
  }

  public insert(item: string): void {
    this.getHashValues(item)
      .forEach((val) => {
        const dataIndex = Math.floor(val / bitLength);
        const bitIndex = val % bitLength;
        this.data[dataIndex] |= 1 << bitIndex;
      });
  }

  public contain(item: string): boolean {
    return this.getHashValues(item)
      .every((val) => {
        const dataIndex = Math.floor(val / bitLength);
        const bitIndex = val % bitLength;
        return Boolean(this.data[dataIndex] & (1 << bitIndex));
      });
  }
}
