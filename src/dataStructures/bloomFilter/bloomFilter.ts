import type { interfaces } from '../../types';

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

export class BloomFilter implements interfaces.BloomFilter {
  constructor(size: number) {
    this.data = Array(size)
      .fill(0);
  }

  private readonly data: number[];

  public insert(item: string): void {
    const hashValues: [number, number, number] = getHashValues(item, this.data.length * bitLength);
    for (let i = 0; i < hashValues.length; i++) {
      const dataIndex = Math.floor(hashValues[i] / bitLength);
      const bitIndex = hashValues[i] % bitLength;
      this.data[dataIndex] |= 1 << bitIndex;
    }
  }

  public contain(item: string): boolean {
    const hashValues: [number, number, number] = getHashValues(item, this.data.length * bitLength);
    for (let i = 0; i < hashValues.length; i++) {
      const dataIndex = Math.floor(hashValues[i] / bitLength);
      const bitIndex = hashValues[i] % bitLength;
      if ((this.data[dataIndex] & (1 << bitIndex)) === 0) {
        return false;
      }
    }

    return true;
  }
}
