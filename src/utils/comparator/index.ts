function defaultCompareFunction<T = unknown>(a?: T, b?: T): -1 | 0 | 1 {
  if (a === b) {
    return 0;
  }
  return a < b ? -1 : 1;
}

export type compareFunctionType = (a?: any, b?: any) => 0 | 1 | -1;

export class Comparator<T = unknown> {
  constructor(comparatorFunction: Comparator | compareFunctionType = defaultCompareFunction) {
    if (comparatorFunction instanceof Comparator) {
      return comparatorFunction;
    }
    this.compare = comparatorFunction;
  }

  private readonly compare: compareFunctionType;

  public equal(a?: T, b?: T): boolean {
    return this.compare(a, b) === 0;
  }

  public lessThan(a?: T, b?: T): boolean {
    return this.compare(a, b) < 0;
  }

  public greaterThan(a?: T, b?: T): boolean {
    return this.compare(a, b) > 0;
  }

  public lessThanOrEqual(a?: T, b?: T): boolean {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  public greaterThanOrEqual(a?: T, b?: T): boolean {
    return this.greaterThan(a, b) || this.equal(a, b);
  }
}

