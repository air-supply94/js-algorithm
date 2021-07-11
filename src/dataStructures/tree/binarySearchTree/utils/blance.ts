import { BinarySearchTreeNode, color } from '../binarySearchTree';
import { getUncle } from './getUncle';
import { getBalanceFactor } from './height';
import { rotateLeftLeft, rotateLeftRight, rotateRightLeft, rotateRightRight } from './rotate';

export function redBlackTreeInsertBalance<T = unknown>(node: BinarySearchTreeNode<T> | null, setRoot: (root: BinarySearchTreeNode<T> | null) => void): void {
  if (!node) {
    return;
  }

  if (!node.parent) {
    node.color = color.black;
    return;
  }

  if (node.parent.color === color.black) {
    return;
  }

  if (getUncle(node) && getUncle(node).color === color.red) {
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

export function removeBalance<T = unknown>(getRoot: () => BinarySearchTreeNode<T>, node: BinarySearchTreeNode<T>, setRoot: (root: BinarySearchTreeNode<T> | null) => void): void {
  let currentNode = node;
  while (currentNode.parent && currentNode.color === color.black) {
    if (currentNode === currentNode.parent.left) {
      const sibling = currentNode.parent.right;

      if (sibling.color === color.red) {
        currentNode.parent.color = color.red;
        sibling.color = color.black;
        rotateRightRight(currentNode.parent, setRoot);
      } else if ((!sibling.left && !sibling.right) || (sibling.left && sibling.right && sibling.left.color === color.black && sibling.right.color === color.black)) {
        sibling.color = color.red;
        currentNode = currentNode.parent;
      } else if (sibling.right && sibling.right.color === color.red) {
        sibling.color = currentNode.parent.color;
        currentNode.parent.color = color.black;
        sibling.right.color = color.black;
        rotateRightRight(currentNode.parent, setRoot);
        currentNode = getRoot();
      } else {
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
      } else if ((!sibling.left && !sibling.right) || (sibling.left && sibling.right && sibling.left.color === color.black && sibling.right.color === color.black)) {
        sibling.color = color.red;
        currentNode = currentNode.parent;
      } else if (sibling.left && sibling.left.color === color.red) {
        sibling.color = currentNode.parent.color;
        currentNode.parent.color === color.black;
        sibling.left.color = color.black;
        rotateLeftLeft(currentNode.parent, setRoot);
        currentNode = getRoot();
      } else {
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
