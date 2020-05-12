import {
  BinarySearchTree,
  BinarySearchTreeInterface,
  BinarySearchTreeNodeInterface,
} from '../binarySearchTree';
import {
  Comparator,
  compareFunctionType,
} from '../../../utils';
import {
  rotateLeftLeft,
  rotateLeftRight,
  rotateRightLeft,
  rotateRightRight,
} from '../utils';

export class AvlTree<T = unknown> extends BinarySearchTree<T> implements BinarySearchTreeInterface<T> {
  constructor(compareFunction?: compareFunctionType | Comparator) {
    super(compareFunction);
  }

  public balance(node: BinarySearchTreeNodeInterface<T>): this {
    if (node.balanceFactor > 1) {
      if (node.left.balanceFactor > 0) {
        rotateLeftLeft<T>(node, this.root, this.setRoot.bind(this));
      } else if (node.left.balanceFactor < 0) {
        rotateLeftRight<T>(node, this.root, this.setRoot.bind(this));
      }
    } else if (node.balanceFactor < -1) {
      if (node.right.balanceFactor < 0) {
        rotateRightRight<T>(node, this.root, this.setRoot.bind(this));
      } else if (node.right.balanceFactor > 0) {
        rotateRightLeft<T>(node, this.root, this.setRoot.bind(this));
      }
    }
    return this;
  }

  public insert(value: T): BinarySearchTreeNodeInterface<T> | null {
    const node = super.insert(value);
    let currentNode = node;
    while (currentNode) {
      this.balance(currentNode);
      currentNode = currentNode.parent;
    }

    return node;
  }

  public remove(value: T): BinarySearchTreeNodeInterface<T> | null {
    let removeNode = super.remove(value);
    while (removeNode && removeNode.parent) {
      this.balance(removeNode.parent);
      removeNode = removeNode.parent;
    }
    return removeNode;
  }
}
