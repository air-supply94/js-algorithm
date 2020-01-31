type compare = (a?: any, b?: any) => boolean;

export interface InterfaceComparator {
  equal: compare;
  lessThan: compare;
  greaterThan: compare;
  lessThanOrEqual: compare;
  greaterThanOrEqual: compare;
  reverse: () => this;
}
