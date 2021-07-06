import { DoubleLinkedList } from '../doubleLinkedList';

export class Queue<T = unknown> {
  constructor() {
    this.doubleLinkedList = new DoubleLinkedList<T>();
  }

  private readonly doubleLinkedList: DoubleLinkedList<T>;

  public get size(): number {
    return this.doubleLinkedList.size;
  }

  public dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.doubleLinkedList.deleteHead().value;
    }
  }

  public enqueue(value: T): T {
    return this.doubleLinkedList.append(value).value;
  }

  public peek(): T | null {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.doubleLinkedList.head.value;
    }
  }

  public isEmpty(): boolean {
    return this.doubleLinkedList.isEmpty();
  }
}
