import type { interfaces } from '../../types';

export class Comparator<T = unknown> implements interfaces.Comparator<T> {
  constructor(
    compare: interfaces.CompareParams<T> = function (a, b) {
      if (a === b) {
        return 0;
      }
      return a < b ? -1 : 1;
    },
  ) {
    if (compare instanceof Comparator) {
      return compare;
    }

    if (typeof compare === 'function') {
      this.compare = compare;
    }
  }

  public readonly compare: interfaces.CompareFunction<T>;

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
