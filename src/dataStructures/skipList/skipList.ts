export class SkipListNode<T = unknown> {
  constructor(data: T) {
    this.data = data;
  }

  public data: T;

  public left: SkipListNode<T> | null = null;

  public right: SkipListNode<T> | null = null;

  public up: SkipListNode<T> | null = null;

  public down: SkipListNode<T> | null = null;
}

export class SkipList<T = unknown> {
  constructor() {
    this.head.right = this.tail;
    this.tail.left = this.head;
  }

  private PROMOTE_RATE = 0.5;

  private level = 0;

  private head: SkipListNode<T> = new SkipListNode<T>(null);

  private tail: SkipListNode<T> = new SkipListNode<T>(null);

  private findNode(head: SkipListNode<T>, data: T): SkipListNode<T> {
    let node = head;
    while (node) {
      while (node.right.data != null && node.right.data <= data) {
        node = node.right;
      }

      if (node.down == null) {
        return node;
      }

      node = node.down;
    }
    return node;
  }

  private appendNode(preNode: SkipListNode<T>, newNode: SkipListNode<T>): void {
    newNode.left = preNode;
    newNode.right = preNode.right;
    preNode.right.left = newNode;
    preNode.right = newNode;
  }

  private addLevel(): void {
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

  public search(data: T): SkipListNode<T> | null {
    const node = this.findNode(this.head, data);
    return data === node.data ? node : null;
  }

  public insert(data: T): void {
    let preNode = this.findNode(this.head, data);
    if (preNode.data == data) {
      return;
    }

    let currentDataNode = new SkipListNode(data);
    this.appendNode(preNode, currentDataNode);
    let currentLevel = 0;

    while (Math.random() <= this.PROMOTE_RATE) {
      if (currentLevel == this.level) {
        this.addLevel();
      }

      currentLevel++;
      let tmpPreUpNode = preNode;
      while (tmpPreUpNode.up == null) {
        tmpPreUpNode = tmpPreUpNode.left;
      }
      tmpPreUpNode = tmpPreUpNode.up;

      const tmpCurrentDataUpNode = new SkipListNode(data);
      this.appendNode(tmpPreUpNode, tmpCurrentDataUpNode);
      tmpCurrentDataUpNode.down = currentDataNode;
      currentDataNode.up = tmpCurrentDataUpNode;

      currentDataNode = tmpCurrentDataUpNode;
      preNode = tmpPreUpNode;
    }
  }

  public remove(data: T): boolean {
    let removedNode = this.search(data);
    if (removedNode == null) {
      return false;
    }

    while (removedNode) {
      removedNode.right.left = removedNode.left;
      removedNode.left.right = removedNode.right;
      removedNode = removedNode.up;
    }

    let newHead = this.head;
    while (newHead.down && newHead.data === null && newHead.right.data === null) {
      const newHeadDown = newHead.down;
      newHeadDown.up = null;
      newHead.down = null;

      const newTailDown = newHead.right.down;
      newTailDown.up = null;
      newHead.right.down = null;

      this.level--;
      newHead = newHeadDown;
      this.head = newHeadDown;
      this.tail = newTailDown;
    }

    return true;
  }

  public toArray(): Array<SkipListNode<T>> {
    const nodes: Array<SkipListNode<T>> = [];
    let node = this.head;
    while (node.down) {
      node = node.down;
    }

    while (node.right.data != null) {
      nodes.push(node.right);
      node = node.right;
    }

    return nodes;
  }
}
