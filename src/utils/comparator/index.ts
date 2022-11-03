export type compareFunctionType<T = unknown> = (a?: T, b?: T) => 0 | 1 | -1;

export class Comparator<T = unknown> {
  constructor(comparatorFunction: Comparator<T> | compareFunctionType<T> = function(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }) {
    if (comparatorFunction instanceof Comparator) {
      return comparatorFunction;
    }
    this.compare = comparatorFunction;
  }

  private readonly compare: compareFunctionType<T>;

  public equal(a?: T, b?: T): boolean {
    return this.compare(a, b) === 0;
  }

  public lessThan(a?: T, b?: T): boolean {
    return this.compare(a, b) === -1;
  }

  public greaterThan(a?: T, b?: T): boolean {
    return this.compare(a, b) === 1;
  }

  public lessThanOrEqual(a?: T, b?: T): boolean {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  public greaterThanOrEqual(a?: T, b?: T): boolean {
    return this.greaterThan(a, b) || this.equal(a, b);
  }
}

