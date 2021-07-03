export class DoubleLinkedListNode<T = number> {
  constructor(val: T | null, next = null, previous = null) {
    this.val = val;
    this.next = next;
    this.previous = previous;
  }

  public val: T | null;

  public next: DoubleLinkedListNode<T> | null;

  public previous: DoubleLinkedListNode<T> | null;
}

export class DoubleLinkedList<T = number> {
  constructor() {
    this.clear();
  }

  public size: number;

  public head: DoubleLinkedListNode<T> | null;

  public tail: DoubleLinkedListNode<T> | null;

  public clear(): this {
    this.size = 0;
    this.head = null;
    this.tail = null;
    return this;
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

  public deleteNode(node: DoubleLinkedListNode<T>): DoubleLinkedListNode<T> {
    if (node === this.head) {
      return this.deleteHead();
    } else if (node === this.tail) {
      return this.deleteTail();
    } else {
      node.next.previous = node.previous;
      node.previous.next = node.next;
      node.next = null;
      node.previous = null;

      this.size--;
      return node;
    }
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

  public appendNode(node: DoubleLinkedListNode<T>): DoubleLinkedListNode<T> {
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      node.previous = null;
      node.next = null;

      this.size++;
      return node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      node.next = null;
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

  public prependNode(node: DoubleLinkedListNode<T>): DoubleLinkedListNode<T> {
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      node.next = null;
      node.previous = null;

      this.size++;
      return node;
    } else {
      this.head.previous = node;
      node.next = this.head;
      node.previous = null;
      this.head = node;

      this.size++;
      return node;
    }
  }
}
