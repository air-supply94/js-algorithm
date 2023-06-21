import { Comparator } from '../../utils';
import type { interfaces } from '../../types';

export class SkipListNode<T = unknown> implements interfaces.SkipListNode<T> {
  constructor(data: T) {
    this.data = data;
  }

  public data: T;

  public left: interfaces.SkipListNode<T> | null = null;

  public right: interfaces.SkipListNode<T> | null = null;

  public up: interfaces.SkipListNode<T> | null = null;

  public down: interfaces.SkipListNode<T> | null = null;
}

export class SkipList<T = unknown> implements interfaces.SkipList<T> {
  constructor(compare?: interfaces.CompareParams<T>) {
    this.head.right = this.tail;
    this.tail.left = this.head;
    this.comparator = new Comparator<T>(compare);
  }

  private readonly comparator: interfaces.Comparator<T>;

  private PROMOTE_RATE = 0.5;

  private level = 0;

  private getFirstLevelLatestNode(data: T): interfaces.SkipListNode<T> {
    let node = this.head;
    while (node) {
      while (node.right.data != null && this.comparator.lessThanOrEqual(node.right.data, data)) {
        node = node.right;
      }

      if (node.down == null) {
        return node;
      }

      node = node.down;
    }
    return node;
  }

  private getNextLevelLatestNode(node: interfaces.SkipListNode<T>): interfaces.SkipListNode<T> {
    let nextLevelLatestNode = node;
    while (nextLevelLatestNode.up == null) {
      nextLevelLatestNode = nextLevelLatestNode.left;
    }
    return nextLevelLatestNode.up;
  }

  public head: interfaces.SkipListNode<T> = new SkipListNode<T>(null);

  public tail: interfaces.SkipListNode<T> = new SkipListNode<T>(null);

  public appendNode(previousNode: interfaces.SkipListNode<T>, newNode: interfaces.SkipListNode<T>): void {
    newNode.left = previousNode;
    newNode.right = previousNode.right;
    previousNode.right.left = newNode;
    previousNode.right = newNode;
  }

  public addLevel(): void {
    this.level++;
    const newHead = new SkipListNode(null);
    const newTail = new SkipListNode(null);

    newHead.right = newTail;
    newTail.left = newHead;

    newHead.down = this.head;
    this.head.up = newHead;

    newTail.down = this.tail;
    this.tail.up = newTail;

    this.head = newHead;
    this.tail = newTail;
  }

  public search(data: T): T | null {
    const firstLevelLatestNode = this.getFirstLevelLatestNode(data);
    if (firstLevelLatestNode.data == null) {
      return null;
    }

    return this.comparator.equal(firstLevelLatestNode.data, data) ? firstLevelLatestNode.data : null;
  }

  public insert(data: T): boolean {
    if (data == null) {
      throw new Error('data not be null');
    }

    let currentLevelLatestNode = this.getFirstLevelLatestNode(data);
    if (currentLevelLatestNode.data != null && this.comparator.equal(currentLevelLatestNode.data, data)) {
      return false;
    }

    let currentLevelNode = new SkipListNode(data);
    this.appendNode(currentLevelLatestNode, currentLevelNode);
    let currentLevel = 0;

    while (Math.random() <= this.PROMOTE_RATE) {
      currentLevel++;
      if (currentLevel > this.level) {
        this.addLevel();
      }

      const nextLevelLatestNode = this.getNextLevelLatestNode(currentLevelLatestNode);
      const nextLevelNode = new SkipListNode(data);
      this.appendNode(nextLevelLatestNode, nextLevelNode);
      nextLevelNode.down = currentLevelNode;
      currentLevelNode.up = nextLevelNode;

      currentLevelNode = nextLevelNode;
      currentLevelLatestNode = nextLevelLatestNode;
    }

    return true;
  }

  public remove(data: T): boolean {
    let removedNode = this.getFirstLevelLatestNode(data);
    if (removedNode.data == null) {
      return false;
    }

    if (this.comparator.notEqual(data, removedNode.data)) {
      return false;
    }

    while (removedNode) {
      removedNode.right.left = removedNode.left;
      removedNode.left.right = removedNode.right;
      removedNode.left = null;
      removedNode.right = null;
      removedNode = removedNode.up;
    }

    let currentHead = this.head;
    while (currentHead.down && currentHead.data === null && currentHead.right.data === null) {
      const newHead = currentHead.down;
      newHead.up = null;
      currentHead.down = null;

      const newTail = currentHead.right.down;
      newTail.up = null;
      currentHead.right.down = null;

      this.level--;
      currentHead = newHead;
      this.head = newHead;
      this.tail = newTail;
    }

    return true;
  }

  public toArray(): T[] {
    const result: T[] = [];
    let node = this.head;
    while (node.down) {
      node = node.down;
    }

    while (node.right.data != null) {
      result.push(node.right.data);
      node = node.right;
    }

    return result;
  }
}
