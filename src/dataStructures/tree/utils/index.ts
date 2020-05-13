import { BinarySearchTreeNodeInterface } from '../binarySearchTree/types';

export function rotateLeftLeft<T = unknown>(
  rootNode: BinarySearchTreeNodeInterface<T>,
  setRoot: Function,
): void {
  const leftNode = rootNode.left;
  rootNode.setLeft(null);

  if (!rootNode.parent) {
    setRoot(leftNode);
  } else if (rootNode.parent.left === rootNode) {
    rootNode.parent.setLeft(leftNode);
  } else if (rootNode.parent.right === rootNode) {
    rootNode.parent.setRight(leftNode);
  }

  if (leftNode.right) {
    rootNode.setLeft(leftNode.right);
  }

  leftNode.setRight(rootNode);
}

export function rotateLeftRight<T = unknown>(
  rootNode: BinarySearchTreeNodeInterface<T>,
  setRoot: Function,
): void {
  const leftNode = rootNode.left;
  rootNode.setLeft(null);

  const leftRightNode = leftNode.right;
  leftNode.setRight(null);

  if (leftRightNode.left) {
    leftNode.setRight(leftRightNode.left);
    leftRightNode.setLeft(null);
  }

  rootNode.setLeft(leftRightNode);

  leftRightNode.setLeft(leftNode);

  return rotateLeftLeft(rootNode, setRoot);
}

export function rotateRightLeft<T = unknown>(
  rootNode: BinarySearchTreeNodeInterface<T>,
  setRoot: Function,
): void {
  const rightNode = rootNode.right;
  rootNode.setRight(null);

  const rightLeftNode = rightNode.left;
  rightNode.setLeft(null);

  if (rightLeftNode.right) {
    rightNode.setLeft(rightLeftNode.right);
    rightLeftNode.setRight(null);
  }

  rootNode.setRight(rightLeftNode);

  rightLeftNode.setRight(rightNode);

  return rotateRightRight(rootNode, setRoot);
}

export function rotateRightRight<T = unknown>(
  rootNode: BinarySearchTreeNodeInterface<T>,
  setRoot: Function,
): void {
  const rightNode = rootNode.right;
  rootNode.setRight(null);
  if (!rootNode.parent) {
    setRoot(rightNode);
  } else if (rootNode.parent.right === rootNode) {
    rootNode.parent.setRight(rightNode);
  } else if (rootNode.parent.left === rootNode) {
    rootNode.parent.setLeft(rightNode);
  }

  if (rightNode.left) {
    rootNode.setRight(rightNode.left);
  }

  rightNode.setLeft(rootNode);
}
