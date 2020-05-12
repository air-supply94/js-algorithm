import {
  BinarySearchTree,
  BinarySearchTreeInterface,
  BinarySearchTreeNodeInterface,
} from '../binarySearchTree';
import {
  compareFunctionType,
  Comparator,
} from '../../../utils/comparator';
import { RedBlackTreeNodeInterface } from './types';
import { RedBlackTreeNode } from './redBlackTreeNode';
import {
  rotateLeftLeft,
  rotateLeftRight,
  rotateRightLeft,
  rotateRightRight,
} from '../utils';

function redBlackTreeCompare(a, b) {
  if (a.value === b.value) {
    return 0;
  }

  return a.value < b.value ? -1 : 1;
}

export class RedBlackTree<T = unknown> extends BinarySearchTree<RedBlackTreeNodeInterface<T>> implements BinarySearchTreeInterface<RedBlackTreeNodeInterface<T>> {
  constructor(compareFunction?: compareFunctionType | Comparator) {
    super(compareFunction || redBlackTreeCompare);
  }

  private balance(node: BinarySearchTreeNodeInterface<RedBlackTreeNodeInterface<T>> | null): void {
    if (!node) {
      return;
    }

    if (node === this.root) {
      node.value.makeBlack();
      return;
    }

    if (node.parent.value.isBlack) {
      return;
    }

    if (node.uncle && node.uncle.value.isRed) {
      node.parent.value.makeBlack();
      node.uncle.value.makeBlack();
      node.parent.parent.value.makeRed();
      return this.balance(node.parent.parent);
    }

    if (node.parent === node.parent.parent.left) {
      if (node === node.parent.left) {
        node.parent.value.makeBlack();
        node.parent.parent.value.makeRed();
        rotateLeftLeft(node.parent.parent, this.root, this.setRoot.bind(this));
      } else {
        node.value.makeBlack();
        node.parent.parent.value.makeRed();
        rotateLeftRight(node.parent.parent, this.root, this.setRoot.bind(this));
      }
    } else {
      if (node === node.parent.right) {
        node.parent.value.makeBlack();
        node.parent.parent.value.makeRed();
        rotateRightRight(node.parent.parent, this.root, this.setRoot.bind(this));
      } else {
        node.value.makeBlack();
        node.parent.parent.value.makeRed();
        rotateRightLeft(node.parent.parent, this.root, this.setRoot.bind(this));
      }
    }
  }

  public insert(value): BinarySearchTreeNodeInterface<RedBlackTreeNodeInterface<T>> | null {
    const node = super.insert(new RedBlackTreeNode<T>(value));
    this.balance(node);
    return node;
  }

  /*  public remove(value): BinarySearchTreeNodeInterface<RedBlackTreeNodeInterface<T>> | null {
      const node = this.find(new RedBlackTreeNode<T>(value));
      return node;
    }*/
}
