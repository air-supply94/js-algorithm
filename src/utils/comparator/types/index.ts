type compare = (a?: any, b?: any) => boolean;
export type compareFunctionType = (a?: any, b?: any) => 0 | 1 | -1;

export interface ComparatorInterface {
  equal: compare;
  lessThan: compare;
  greaterThan: compare;
  lessThanOrEqual: compare;
  greaterThanOrEqual: compare;
  reverse: () => this;
}
