type CompareFunction<T = unknown> = (a?: T, b?: T) => 0 | 1 | -1;
export type Compare<T = unknown> = Comparator<T> | CompareFunction<T>;

export class Comparator<T = unknown> {
  constructor(compare: Compare<T> = function(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }) {
    if (compare instanceof Comparator) {
      return compare;
    }
    this.compare = compare;
  }

  private readonly compare: CompareFunction<T>;

  public equal(a?: T, b?: T): boolean {
    return this.compare(a, b) === 0;
  }

  public notEqual(a?: T, b?: T): boolean {
    return !this.equal(a, b);
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

