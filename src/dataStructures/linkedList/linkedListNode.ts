import { InterfaceLinkedListNode } from './@types';

export default class LinkedListNode implements InterfaceLinkedListNode {

  constructor(value: any, next = null) {
    this.value = value;
    this.next = next;
  }
  public value;
  public next;

  public toString(callback) {
    return typeof callback === 'function' ? callback(this.value) : String(this.value);
  }
}
