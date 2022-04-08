import type { BinarySearchTreeNode } from '../binarySearchTree';
import { color } from '../binarySearchTree';
import { getUncle } from './getUncle';
import { getBalanceFactor } from './height';
import { rotateLeftLeft, rotateLeftRight, rotateRightLeft, rotateRightRight } from './rotate';

export function redBlackTreeInsertBalance<T = unknown>(node: BinarySearchTreeNode<T> | null, setRoot: (root: BinarySearchTreeNode<T> | null) => void): void {
  if (node == null) {
    return;
  }

  if (node.parent == null) {
    node.color = color.black;
    return;
  }

  if (node.parent.color === color.black) {
    return;
  }

  if (getUncle(node) != null && getUncle(node).color === color.red) {
    node.parent.color = color.black;
    getUncle(node).color = color.black;
    node.parent.parent.color = color.red;
    return redBlackTreeInsertBalance(node.parent.parent, setRoot);
  }

  if (node.parent === node.parent.parent.left) {
    if (node === node.parent.left) {
      node.parent.color = color.black;
      node.parent.parent.color = color.red;
      rotateLeftLeft(node.parent.parent, setRoot);
    } else {
      node.color = color.black;
      node.parent.parent.color = color.red;
      rotateLeftRight(node.parent.parent);
      rotateLeftLeft(node.parent, setRoot);
    }
  } else {
    if (node === node.parent.right) {
      node.parent.color = color.black;
      node.parent.parent.color = color.red;
      rotateRightRight(node.parent.parent, setRoot);
    } else {
      node.color = color.black;
      node.parent.parent.color = color.red;
      rotateRightLeft(node.parent.parent);
      rotateRightRight(node.parent, setRoot);
    }
  }
}

export function redBlackTreeRemoveBalance<T = unknown>(getRoot: () => BinarySearchTreeNode<T>, node: BinarySearchTreeNode<T>, setRoot: (root: BinarySearchTreeNode<T> | null) => void): void {
  let currentNode = node;
  while (currentNode.parent != null && currentNode.color === color.black) {
    if (currentNode === currentNode.parent.left) {
      const sibling = currentNode.parent.right;

      if (sibling.color === color.red) {
        currentNode.parent.color = color.red;
        sibling.color = color.black;
        rotateRightRight(currentNode.parent, setRoot);
      } else if ((sibling.left == null && sibling.right == null) || (sibling.left != null && sibling.right != null && sibling.left.color === color.black && sibling.right.color === color.black)) {
        sibling.color = color.red;
        currentNode = currentNode.parent;
      } else if (sibling.right != null && sibling.right.color === color.red) {
        sibling.color = currentNode.parent.color;
        currentNode.parent.color = color.black;
        sibling.right.color = color.black;
        rotateRightRight(currentNode.parent, setRoot);
        currentNode = getRoot();
      } else if (sibling.left != null && sibling.left.color === color.red) {
        sibling.left.color = color.black;
        sibling.color = color.red;
        rotateRightLeft(currentNode.parent);
      }
    } else {
      const sibling = currentNode.parent.left;

      if (sibling.color === color.red) {
        currentNode.parent.color = color.red;
        sibling.color = color.black;
        rotateLeftLeft(currentNode.parent, setRoot);
      } else if ((sibling.left == null && sibling.right == null) || (sibling.left != null && sibling.right != null && sibling.left.color === color.black && sibling.right.color === color.black)) {
        sibling.color = color.red;
        currentNode = currentNode.parent;
      } else if (sibling.left != null && sibling.left.color === color.red) {
        sibling.color = currentNode.parent.color;
        currentNode.parent.color = color.black;
        sibling.left.color = color.black;
        rotateLeftLeft(currentNode.parent, setRoot);
        currentNode = getRoot();
      } else if (sibling.right != null && sibling.right.color === color.red) {
        sibling.right.color = color.black;
        sibling.color = color.red;
        rotateLeftRight(currentNode.parent);
      }
    }
  }
  currentNode.color = color.black;
}

export function avlTreeBalance<T = unknown>(root: BinarySearchTreeNode<T>, setRoot: (root: BinarySearchTreeNode<T> | null) => void): void {
  if (getBalanceFactor<T>(root) > 1) {
    if (getBalanceFactor<T>(root.left) > 0) {
      rotateLeftLeft<T>(root, setRoot);
    } else {
      rotateLeftRight<T>(root);
      rotateLeftLeft<T>(root, setRoot);
    }
  } else if (getBalanceFactor<T>(root) < -1) {
    if (getBalanceFactor<T>(root.right) < 0) {
      rotateRightRight<T>(root, setRoot);
    } else {
      rotateRightLeft<T>(root);
      rotateRightRight<T>(root, setRoot);
    }
  }
}
