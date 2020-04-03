import { ComparatorInterface } from '../../../utils/comparator/@types';
import { InterfaceHeap } from '../../heap/@types';

export interface InterfacePriority {
  compareValue: ComparatorInterface;
  minHeap: InterfaceHeap;
  add: (value?: any, priority?: number) => this;
  remove: (value?: any) => this;
  hasValue: (value?: any) => boolean;
}
