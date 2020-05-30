import { DoubleLinkedListNodeInterface, toStringCallback } from './types';

export class DoubleLinkedListNode<T = unknown> implements DoubleLinkedListNodeInterface<T> {
  constructor(value: T, next = null, previous = null) {
    this._value = value;
    this._next = next;
    this._previous = previous;
  }

  private _value;

  private _next: DoubleLinkedListNodeInterface<T> | null;

  private _previous: DoubleLinkedListNodeInterface<T> | null;

  public get value() {
    return this._value;
  }

  public setValue(value: T): this {
    this._value = value;
    return this;
  }

  public get next() {
    return this._next;
  }

  public setNext(node: DoubleLinkedListNodeInterface<T> | null): this {
    this._next = node;
    return this;
  }

  public get previous() {
    return this._previous;
  }

  public setPrevious(node: DoubleLinkedListNodeInterface<T> | null): this {
    this._previous = node;
    return this;
  }

  public toString(callback?: toStringCallback<T>): string {
    return typeof callback === 'function' ? callback(this.value) : String(this.value);
  }
}
