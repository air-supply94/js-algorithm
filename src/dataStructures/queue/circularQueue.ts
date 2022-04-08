// https://leetcode-cn.com/problems/design-circular-queue/
// 622
export class CircularQueue {
  private readonly data: number[];

  private readonly capacity: number;

  private head: number;

  private tail: number;

  constructor(k: number) {
    this.capacity = k + 1;
    this.data = Array(this.capacity)
      .fill(null);
    this.head = 0;
    this.tail = 0;
  }

  public enQueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    } else {
      this.data[this.tail] = value;
      this.tail = (this.tail + 1) % this.capacity;
      return true;
    }
  }

  public deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    } else {
      this.data[this.head] = null;
      this.head = (this.head + 1) % this.capacity;
      return true;
    }
  }

  public Front(): number {
    if (this.isEmpty()) {
      return -1;
    } else {
      return this.data[this.head];
    }
  }

  public Rear(): number {
    if (this.isEmpty()) {
      return -1;
    } else {
      return this.data[(this.tail - 1 + this.capacity) % this.capacity];
    }
  }

  public isEmpty(): boolean {
    return this.head === this.tail;
  }

  public isFull(): boolean {
    return (this.tail + 1) % this.capacity === this.head;
  }
}
