export class DoubleLinkedListNode<T> {
  constructor(val: T | null, next = null, previous = null) {
    this.val = val;
    this.next = next;
    this.previous = previous;
  }

  public val: T | null;

  public next: DoubleLinkedListNode<T> | null;

  public previous: DoubleLinkedListNode<T> | null;
}

export function deleteNode<T>(doubleLinkedList: DoubleLinkedList<T>, node: DoubleLinkedListNode<T>): DoubleLinkedListNode<T> {
  if (node === doubleLinkedList.head) {
    return doubleLinkedList.deleteHead();
  } else if (node === doubleLinkedList.tail) {
    return doubleLinkedList.deleteTail();
  } else {
    node.next.previous = node.previous;
    node.previous.next = node.next;
    node.next = null;
    node.previous = null;

    doubleLinkedList.size--;
    return node;
  }
}

export function appendNode<T>(doubleLinkedList: DoubleLinkedList<T>, node: DoubleLinkedListNode<T>): DoubleLinkedListNode<T> {
  if (doubleLinkedList.isEmpty()) {
    doubleLinkedList.head = node;
    doubleLinkedList.tail = node;
    node.previous = null;
    node.next = null;

    doubleLinkedList.size++;
    return node;
  } else {
    doubleLinkedList.tail.next = node;
    node.previous = doubleLinkedList.tail;
    node.next = null;
    doubleLinkedList.tail = node;

    doubleLinkedList.size++;
    return node;
  }
}

export function prependNode<T>(doubleLinkedList: DoubleLinkedList<T>, node: DoubleLinkedListNode<T>): DoubleLinkedListNode<T> {
  if (doubleLinkedList.isEmpty()) {
    doubleLinkedList.head = node;
    doubleLinkedList.tail = node;
    node.next = null;
    node.previous = null;

    doubleLinkedList.size++;
    return node;
  } else {
    doubleLinkedList.head.previous = node;
    node.next = doubleLinkedList.head;
    node.previous = null;
    doubleLinkedList.head = node;

    doubleLinkedList.size++;
    return node;
  }
}

export class DoubleLinkedList<T> {
  constructor() {
    this.clear();
  }

  public size: number;

  public head: DoubleLinkedListNode<T> | null;

  public tail: DoubleLinkedListNode<T> | null;

  public clear(): void {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  public isEmpty(): boolean {
    return this.size <= 0;
  }

  public deleteHead(): null | DoubleLinkedListNode<T> {
    const deletedNode = this.head;
    if (this.size <= 1) {
      this.clear();
    } else {
      this.head = this.head.next;
      this.head.previous = null;
      this.size--;
    }

    return deletedNode;
  }

  public deleteTail(): null | DoubleLinkedListNode<T> {
    const deletedNode = this.tail;
    if (this.size <= 1) {
      this.clear();
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
      this.size--;
    }

    return deletedNode;
  }

  public append(value: T): DoubleLinkedListNode<T> {
    const node = new DoubleLinkedListNode<T>(value, null, this.tail);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;

      this.size++;
      return node;
    } else {
      this.tail.next = node;
      this.tail = node;

      this.size++;
      return node;
    }
  }

  public prepend(value: T): DoubleLinkedListNode<T> {
    const node = new DoubleLinkedListNode<T>(value, this.head);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;

      this.size++;
      return node;
    } else {
      this.head.previous = node;
      this.head = node;

      this.size++;
      return node;
    }
  }
}
