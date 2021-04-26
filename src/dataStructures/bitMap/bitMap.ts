const bitLength = 32;

export class BitMap {
  constructor(size: number) {
    this.data = Array(size)
      .fill(0);
  }

  private readonly data: number[];

  public insert(item: number): void {
    const arrayIndex = Math.floor(item / bitLength);
    const bitIndex = item % bitLength;
    this.data[arrayIndex] |= 1 << bitIndex;
  }

  public contain(item: number): boolean {
    const arrayIndex = Math.floor(item / bitLength);
    const bitIndex = item % bitLength;
    return Boolean(this.data[arrayIndex] & (1 << bitIndex));
  }
}
