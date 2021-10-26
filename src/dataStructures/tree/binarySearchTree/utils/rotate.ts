import type { BinarySearchTreeNode } from '../binarySearchTree';
import { setLeft, setRight } from './nodeOperate';

export function rotateLeftLeft<T = unknown>(rootNode: BinarySearchTreeNode<T>, setRoot: (root: BinarySearchTreeNode<T> | null) => void): void {
  const leftNode = rootNode.left;
  setLeft(rootNode, null);

  if (!rootNode.parent) {
    setRoot(leftNode);
  } else if (rootNode.parent.left === rootNode) {
    setLeft(rootNode.parent, leftNode);
  } else {
    setRight(rootNode.parent, leftNode);
  }

  if (leftNode.right) {
    const leftRightNode = leftNode.right;
    setRight(leftNode, null);
    setLeft(rootNode, leftRightNode);
  }

  setRight(leftNode, rootNode);
}

export function rotateLeftRight<T = unknown>(rootNode: BinarySearchTreeNode<T>): void {
  const leftNode = rootNode.left;
  setLeft(rootNode, null);

  const leftRightNode = leftNode.right;
  setRight(leftNode, null);

  if (leftRightNode.left) {
    const leftRightLeftNode = leftRightNode.left;
    setLeft(leftRightNode, null);
    setRight(leftNode, leftRightLeftNode);
  }

  setLeft(rootNode, leftRightNode);

  setLeft(leftRightNode, leftNode);
}

export function rotateRightLeft<T = unknown>(rootNode: BinarySearchTreeNode<T>): void {
  const rightNode = rootNode.right;
  setRight(rootNode, null);

  const rightLeftNode = rightNode.left;
  setLeft(rightNode, null);

  if (rightLeftNode.right) {
    const rightLeftRightNode = rightLeftNode.right;
    setRight(rightLeftNode, null);
    setLeft(rightNode, rightLeftRightNode);
  }

  setRight(rootNode, rightLeftNode);

  setRight(rightLeftNode, rightNode);
}

export function rotateRightRight<T = unknown>(rootNode: BinarySearchTreeNode<T>, setRoot: (root: BinarySearchTreeNode<T> | null) => void): void {
  const rightNode = rootNode.right;
  setRight(rootNode, null);

  if (!rootNode.parent) {
    setRoot(rightNode);
  } else if (rootNode.parent.right === rootNode) {
    setRight(rootNode.parent, rightNode);
  } else {
    setLeft(rootNode.parent, rightNode);
  }

  if (rightNode.left) {
    const rightLeftNode = rightNode.left;
    setLeft(rightNode, null);
    setRight(rootNode, rightLeftNode);
  }

  setLeft(rightNode, rootNode);
}

