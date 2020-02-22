import { InterfaceDoubleLinkedListNode } from './@types';

export class DoubleLinkedListNode<T> implements InterfaceDoubleLinkedListNode<T> {

  constructor(value: T, next = null, previous = null) {
    this._value = value;
    this._next = next;
    this._previous = previous;
  }

  private _value;
  private _next: InterfaceDoubleLinkedListNode<T> | null;
  private _previous: InterfaceDoubleLinkedListNode<T> | null;

  get value() {
    return this._value;
  }

  public setValue(value: T): this {
    this._value = value;
    return this;
  }

  get next() {
    return this._next;
  }

  public setNext(node: InterfaceDoubleLinkedListNode<T> | null): this {
    this._next = node;
    return this;
  }

  get previous() {
    return this._previous;
  }

  public setPrevious(node: InterfaceDoubleLinkedListNode<T> | null): this {
    this._previous = node;
    return this;
  }

  public toString(callback?: (value: T) => string): string {
    return typeof callback === 'function' ? callback(this._value) : String(this._value);
  }
}
