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

function getHashValues(item: string, length: number): [number, number, number] {
  return [
    hash1(item, length),
    hash2(item, length),
    hash3(item, length),
  ];
}

export class BloomFilter {
  constructor(size: number) {
    this.data = Array(size)
      .fill(0);
  }

  private readonly data: number[];

  public insert(item: string): void {
    getHashValues(item, this.data.length * bitLength)
      .forEach((val) => {
        const dataIndex = Math.floor(val / bitLength);
        const bitIndex = val % bitLength;
        this.data[dataIndex] |= 1 << bitIndex;
      });
  }

  public contain(item: string): boolean {
    return getHashValues(item, this.data.length * bitLength)
      .every((val) => {
        const dataIndex = Math.floor(val / bitLength);
        const bitIndex = val % bitLength;
        return Boolean(this.data[dataIndex] & (1 << bitIndex));
      });
  }
}
