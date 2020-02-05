import { InterfaceDoubleLinkedListNode } from './@types';

export class DoubleLinkedListNode<T> implements InterfaceDoubleLinkedListNode<T> {

  constructor(value: T, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  public value;
  public next: InterfaceDoubleLinkedListNode<T>;
  public previous: InterfaceDoubleLinkedListNode<T>;

  public toString(callback?: (node: T) => string): string {
    return typeof callback === 'function' ? callback(this.value) : String(this.value);
  }
}
