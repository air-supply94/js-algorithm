import type { interfaces } from '../types';

// https://leetcode-cn.com/problems/design-circular-queue/
// 622
export class CircularQueue implements interfaces.CircularQueue {
  private readonly data: number[];

  private readonly capacity: number;

  private head = 0;

  private tail = 0;

  constructor(k: number) {
    this.capacity = k + 1;
    this.data = Array(this.capacity).fill(null);
  }

  public enQueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    }

    this.data[this.tail] = value;
    this.tail = (this.tail + 1) % this.capacity;
    return true;
  }

  public deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }

    this.data[this.head] = null;
    this.head = (this.head + 1) % this.capacity;
    return true;
  }

  public Front(): number {
    if (this.isEmpty()) {
      return -1;
    }

    return this.data[this.head];
  }

  public Rear(): number {
    if (this.isEmpty()) {
      return -1;
    }

    return this.data[(this.tail - 1 + this.capacity) % this.capacity];
  }

  public isEmpty(): boolean {
    return this.head === this.tail;
  }

  public isFull(): boolean {
    return (this.tail + 1) % this.capacity === this.head;
  }
}
