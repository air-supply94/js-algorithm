class SkipListNode {
  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.up = null;
    this.down = null;
  }

  public data: number;

  public left: SkipListNode;

  public right: SkipListNode;

  public up: SkipListNode;

  public down: SkipListNode;
}

function findNode(head: SkipListNode, data: number): SkipListNode {
  let node = head;
  while (node) {
    while (node.right.data != Infinity && node.right.data <= data) {
      node = node.right;
    }

    if (!node.down) {
      break;
    } else {
      node = node.down;
    }
  }
  return node;
}

function appendNode(preNode: SkipListNode, newNode: SkipListNode): void {
  newNode.left = preNode;
  newNode.right = preNode.right;
  preNode.right.left = newNode;
  preNode.right = newNode;
}

export class SkipList {
  constructor() {
    this.PROMOTE_RATE = 0.5;
    this.level = 0;
    this.head = new SkipListNode(-Infinity);
    this.tail = new SkipListNode(Infinity);
    this.head.right = this.tail;
    this.tail.left = this.head;
  }

  private readonly PROMOTE_RATE: number;

  private level: number;

  private head: SkipListNode;

  private tail: SkipListNode;

  public search(data: number): SkipListNode {
    const node = findNode(this.head, data);
    if (node.data === data) {
      return node;
    } else {
      return null;
    }
  }

  private addLevel() {
    this.level++;
    const newHead = new SkipListNode(-Infinity);
    const newTail = new SkipListNode(Infinity);

    newHead.right = newTail;
    newTail.left = newHead;

    newHead.down = this.head;
    this.head.up = newHead;

    newTail.down = this.tail;
    this.tail.up = newTail;

    this.head = newHead;
    this.tail = newTail;
  }

  public insert(data: number): void {
    let preNode = findNode(this.head, data);
    if (preNode.data == data) {
      return;
    }

    let currentDataNode = new SkipListNode(data);
    appendNode(preNode, currentDataNode);
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
      appendNode(tmpPreUpNode, tmpCurrentDataUpNode);
      tmpCurrentDataUpNode.down = currentDataNode;
      currentDataNode.up = tmpCurrentDataUpNode;

      currentDataNode = tmpCurrentDataUpNode;
      preNode = tmpPreUpNode;
    }
  }

  public remove(data: number): boolean {
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
    while (newHead.down && newHead.data === -Infinity && newHead.right.data === Infinity) {
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

  public toArray(): SkipListNode[] {
    const nodes: SkipListNode[] = [];
    let node = this.head;
    while (node.down) {
      node = node.down;
    }

    while (node.right.data != Infinity) {
      nodes.push(node.right);
      node = node.right;
    }

    return nodes;
  }
}