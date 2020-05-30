import { BinarySearchTreeNodeInterface } from '../types';

export function rotateLeftLeft<T = unknown>(
  rootNode: BinarySearchTreeNodeInterface<T>,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setRoot: Function
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
    const leftRightNode = leftNode.right;
    leftNode.setRight(null);
    rootNode.setLeft(leftRightNode);
  }

  leftNode.setRight(rootNode);
}

export function rotateLeftRight<T = unknown>(rootNode: BinarySearchTreeNodeInterface<T>): void {
  const leftNode = rootNode.left;
  rootNode.setLeft(null);

  const leftRightNode = leftNode.right;
  leftNode.setRight(null);

  if (leftRightNode.left) {
    const leftRightLeftNode = leftRightNode.left;
    leftRightNode.setLeft(null);
    leftNode.setRight(leftRightLeftNode);
  }

  rootNode.setLeft(leftRightNode);

  leftRightNode.setLeft(leftNode);
}

export function rotateRightLeft<T = unknown>(rootNode: BinarySearchTreeNodeInterface<T>): void {
  const rightNode = rootNode.right;
  rootNode.setRight(null);

  const rightLeftNode = rightNode.left;
  rightNode.setLeft(null);

  if (rightLeftNode.right) {
    const rightLeftRightNode = rightLeftNode.right;
    rightLeftNode.setRight(null);
    rightNode.setLeft(rightLeftRightNode);
  }

  rootNode.setRight(rightLeftNode);

  rightLeftNode.setRight(rightNode);
}

export function rotateRightRight<T = unknown>(
  rootNode: BinarySearchTreeNodeInterface<T>,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setRoot: Function
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
    const rightLeftNode = rightNode.left;
    rightNode.setLeft(null);
    rootNode.setRight(rightLeftNode);
  }

  rightNode.setLeft(rootNode);
}
