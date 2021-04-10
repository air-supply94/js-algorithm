export class BitMap {
  constructor(size: number) {
    this.data = Array(size)
      .fill(0);
  }

  private readonly data: number[];

  public insert(item: number): void {
    const arrayIndex = Math.floor(item / 32);
    const bitIndex = item % 32;
    this.data[arrayIndex] |= 1 << bitIndex;
  }

  public contain(item: number): boolean {
    const arrayIndex = Math.floor(item >>> 5);
    const bitIndex = item % 32;
    return Boolean(this.data[arrayIndex] & (1 << bitIndex));
  }
}
