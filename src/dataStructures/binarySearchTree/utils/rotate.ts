import type { BinarySearchTreeNode } from '../binarySearchTree';
import { setLeft, setRight } from './nodeOperate';

// 剪left
// left连接父节点
// leftRight节点处理
// 旋转1次
export function rotateLeftLeft<T = unknown>(rootNode: BinarySearchTreeNode<T>, setRoot: (root: BinarySearchTreeNode<T> | null) => void): void {
  const leftNode = rootNode.left;
  setLeft(rootNode, null);

  if (rootNode.parent == null) {
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

// 剪left
// 剪leftRight
// leftRightLeft节点处理
// 旋转2次
export function rotateLeftRight(rootNode: BinarySearchTreeNode): void {
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

export function rotateRightLeft(rootNode: BinarySearchTreeNode): void {
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

  if (rootNode.parent == null) {
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

