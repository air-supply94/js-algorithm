export class CircularQueue<T = unknown> {
  private data: T[];

  private cap: number;

  private head: number;

  private tail: number;

  constructor(k: number) {
    this.data = [];
    this.cap = k + 1;
    this.head = 0;
    this.tail = 0;
  }

  public enQueue(value: T): boolean {
    if (this.isFull()) {
      return false;
    } else {
      this.data[this.tail] = value;
      this.tail = (this.tail + 1) % this.cap;
      return true;
    }
  }

  public deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    } else {
      this.head = (this.head + 1) % this.cap;
      return true;
    }
  }

  public front(): T | null {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.data[this.head];
    }
  }

  public rear(): T {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.data[(this.tail - 1 + this.cap) % this.cap];
    }
  }

  public isEmpty(): boolean {
    return this.head == this.tail;
  }

  public isFull(): boolean {
    return (this.tail + 1) % this.cap == this.head;
  }
}
