import { InterfaceDoubleLinkedListNode } from './@types';

export default class DoubleLinkedListNode implements InterfaceDoubleLinkedListNode {

  constructor(value: any, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  public value;
  public next;
  public previous;

  public toString(callback?: Function) {
    return typeof callback === 'function' ? callback(this.value) : String(this.value);
  }
}
