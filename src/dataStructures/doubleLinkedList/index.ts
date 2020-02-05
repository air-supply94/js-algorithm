import DoubleLinkedListNode from './doubleLinkedListNode';
import { Comparator } from '../../utils/comparator';
import { compareFunctionType } from '../../utils/@types';
import {
  InterfaceDoubleLinkedList,
  InterfaceDoubleLinkedListNode,
} from './@types';

export default class DoubleLinkedList implements InterfaceDoubleLinkedList {
  constructor(comparatorFunction?: Comparator | compareFunctionType) {
    this.clear();
    this.compare = comparatorFunction instanceof Comparator ? comparatorFunction : new Comparator(comparatorFunction);
  }

  public compare;
  public head;
  public tail;
  public size;

  public clear() {
    this.head = this.tail = null;
    this.size = 0;
    return this;
  }

  public toString(callback?: Function) {
    return this.toArray()
    .map(node => node.toString(callback))
    .toString();
  }

  public toArray() {
    const nodes: InterfaceDoubleLinkedListNode[] = [];
    this.eachFromHead(node => nodes.push(node));
    return nodes;
  }

  public eachFromHead(callback) {
    let currentNode = this.head;
    while (currentNode) {
      callback(currentNode);
      currentNode = currentNode.next;
    }

    return this;
  }

  public eachFromTail(callback) {
    let currentNode = this.tail;
    while (currentNode) {
      callback(currentNode);
      currentNode = currentNode.previous;
    }
    return this;
  }

  public fromArray(values) {
    values.forEach(value => this.append(value));
    return this;
  }

  public deleteHead() {
    const deletedHead = this.head;
    if (this.head === this.tail) {
      this.clear();
    } else {
      this.head = this.head.next;
      this.head.previous = null;
      --this.size;
    }

    return deletedHead;
  }

  public deleteTail() {
    const deletedTail = this.tail;
    if (this.head === this.tail) {
      this.clear();
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
      --this.size;
    }

    return deletedTail;
  }

  public find(findParams) {
    const {value, callback = {}} = findParams;
    let currentNode = this.head;

    while (currentNode) {
      if (typeof callback === 'function' && callback(currentNode.value)) {
        break;
      } else if (this.compare.equal(currentNode.value, value)) {
        break;
      }
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  public delete(value) {
    let deletedNode = null;
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
      --this.size;
    }
    if (this.head) {
      this.head.previous = null;
    }

    let currentNode = this.head;
    if (currentNode) {
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          if (currentNode.next.next) {
            currentNode.next.next.previous = currentNode;
          }
          currentNode.next = currentNode.next.next;
          --this.size;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    this.tail = currentNode;
    if (this.tail) {
      this.tail.next = null;
    }

    return deletedNode;
  }

  public append(value) {
    const newNode = new DoubleLinkedListNode(value, null, this.tail);

    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      this.tail = this.tail.next = newNode;
    }
    ++this.size;

    return this;
  }

  public prepend(value) {
    const newNode = new DoubleLinkedListNode(value, this.head);
    // tslint:disable-next-line:prefer-conditional-expression
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      this.head = this.head.previous = newNode;
    }
    ++this.size;

    return this;
  }

  public reverse() {
    const value: any[] = [];
    this.eachFromTail(nodes => {
      value.push(nodes.value);
    });
    return this.clear()
    .fromArray(value);
  }

  public connect(...arg) {
    const values: any[] = [];
    arg.forEach(doubleLinkedList => {
      doubleLinkedList.eachFromHead(nodes => {
        values.push(nodes.value);
      });
    });

    return this.fromArray(values);
  }

  public has(value) {
    return !!this.find({value});
  }

  public isEmpty(): boolean {
    return this.size === 0;
  }
}
