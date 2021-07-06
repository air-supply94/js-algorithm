import { DoubleLinkedList } from '../doubleLinkedList';

export class Stack<T = unknown> {
  constructor() {
    this.doubleLinkedList = new DoubleLinkedList<T>();
  }

  private readonly doubleLinkedList: DoubleLinkedList<T>;

  public pop(): T | null {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.doubleLinkedList.deleteTail().value;
    }
  }

  public push(value: T): T {
    return this.doubleLinkedList.append(value).value;
  }

  public peek(): T | null {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.doubleLinkedList.tail.value;
    }
  }

  public isEmpty(): boolean {
    return this.doubleLinkedList.isEmpty();
  }
}
