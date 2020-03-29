import { InterfaceSet } from './@types';
import { DoubleLinkedList } from '../doubleLinkedList';
import { DoubleLinkedListNodeInterface } from '../doubleLinkedList/types';

export class Set implements InterfaceSet {
  constructor(object?: InterfaceSet | any[]) {
    this._doubleLinkedList = new DoubleLinkedList<any>();
    if (object instanceof Set || Array.isArray(object)) {
      object.forEach((value) => this.add(value));
    }
  }

  private _doubleLinkedList;

  get size(): number {
    return this._doubleLinkedList.size;
  }

  public delete(value?: any): boolean {
    return !!this._doubleLinkedList.deleteAll(value);
  }

  public add(value?: any): this {
    const oldNode = this._doubleLinkedList.find({value});
    if (oldNode) {
      oldNode.setValue(value);
    } else {
      this._doubleLinkedList.append(value);
    }
    return this;
  }

  public forEach(callback: (value: DoubleLinkedListNodeInterface<any>, key: DoubleLinkedListNodeInterface<any>) => void) {
    this._doubleLinkedList.eachFromHead(node => callback(node.value, node.value));
    return this;
  }

  public entries(): [any, any][] {
    const entries = [];
    this._doubleLinkedList.eachFromHead(node => entries.push([
      node.value,
      node.value,
    ]));
    return entries;
  }

  public values(): any[] {
    const values = [];
    this._doubleLinkedList.eachFromHead(node => values.push(node.value));
    return values;
  }

  public clear(): this {
    this._doubleLinkedList.clear();
    return this;
  }

  public has(value?: any): boolean {
    return !!this._doubleLinkedList.find({value});
  }
}
