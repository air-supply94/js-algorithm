import { InterfaceMap } from './@types';
import { DoubleLinkedList } from '../doubleLinkedList';
import { DoubleLinkedListNodeInterface } from '../doubleLinkedList/@types';

export class Map implements InterfaceMap {

  public get size() {
    return this._doubleLinkedList.size;
  }

  constructor(object?: InterfaceMap | [any, any][]) {
    this._doubleLinkedList = new DoubleLinkedList<{ key: any; value: any }>(Map.compareFunction);
    if (object instanceof Map) {
      object.forEach((value, key) => {
        this.set(key, value);
      });
    } else if (Array.isArray(object)) {
      object.forEach((value) => {
        if (Array.isArray(value)) {
          this.set(value[0], value[1]);
        }
      });
    }
  }

  public static compareFunction = (a, b) => {
    if (a.key === b.key) {
      return 0;
    }
    return a.key < b.key ? -1 : 1;
  }

  private _doubleLinkedList;

  public delete(key?: any): boolean {
    return !!this._doubleLinkedList.deleteAll({key});
  }

  public set(key?: any, value?: any): this {
    const oldNode = this._doubleLinkedList.find({value: {key}});
    if (oldNode) {
      oldNode.setValue({
        key,
        value,
      });
    } else {
      this._doubleLinkedList.append({
        key,
        value,
      });
    }
    return this;
  }

  public forEach(callback: (value: DoubleLinkedListNodeInterface<any>, key: DoubleLinkedListNodeInterface<any>) => void) {
    this._doubleLinkedList.eachFromHead(node => callback(node.value.value, node.value.key));
    return this;
  }

  public entries(): [any, any][] {
    const entries = [];
    this._doubleLinkedList.eachFromHead(node => entries.push([
      node.value.key,
      node.value.value,
    ]));
    return entries;
  }

  public values(): any[] {
    const values = [];
    this._doubleLinkedList.eachFromHead(node => values.push(node.value.value));
    return values;
  }

  public keys(): any[] {
    const keys = [];
    this._doubleLinkedList.eachFromHead(node => keys.push(node.value.key));
    return keys;
  }

  public clear(): this {
    this._doubleLinkedList.clear();
    return this;
  }

  public get(key?: any): null | any {
    const result = this._doubleLinkedList.find({value: {key}});
    return result ? result.value.value : null;
  }

  public has(key?: any): boolean {
    return !!this._doubleLinkedList.find({value: {key}});
  }
}
