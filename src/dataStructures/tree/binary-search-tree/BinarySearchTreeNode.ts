import { BinaryTreeNode } from '../BinaryTreeNode';
import { Comparator } from '../../../utils/comparator';
import { compareFunctionType } from '../../../utils/@types';
import { InterfaceBinarySearchTreeNode } from '../@types';

export class BinarySearchTreeNode<T> extends BinaryTreeNode<T> implements InterfaceBinarySearchTreeNode<T> {
  constructor(value = null, compareFunction?: compareFunctionType) {
    super(value);

    this.compareFunction = compareFunction;
    this.nodeValueComparator = new Comparator(compareFunction);
  }

  public compareFunction: compareFunctionType;
  public nodeValueComparator: Comparator;

  public insert(value: T): null | InterfaceBinarySearchTreeNode<T> {
    if (this.nodeValueComparator.equal(this.value, null)) {
      return this.setValue(value);
    }

    if (this.nodeValueComparator.lessThan(value, this.value)) {
      if (this.left) {
        // @ts-ignore
        return this.left.insert(value);
      }

      const newNode = new BinarySearchTreeNode<T>(value, this.compareFunction);
      this.setLeft(newNode);

      return newNode;
    }

    if (this.nodeValueComparator.greaterThan(value, this.value)) {
      if (this.right) {
        // @ts-ignore
        return this.right.insert(value);
      }

      const newNode = new BinarySearchTreeNode<T>(value, this.compareFunction);
      this.setRight(newNode);

      return newNode;
    }

    return null;
  }

  public find(value?: any): null | InterfaceBinarySearchTreeNode<T> {
    if (this.nodeValueComparator.equal(this.value, value)) {
      return this;
    }

    if (this.nodeValueComparator.lessThan(value, this.value) && this.left) {
      // @ts-ignore
      return this.left.find(value);
    }

    if (this.nodeValueComparator.greaterThan(value, this.value) && this.right) {
      // @ts-ignore
      return this.right.find(value);
    }

    return null;
  }

  public contains(value?: any): boolean {
    return !!this.find(value);
  }

  public remove(value?: any): boolean {
    const nodeToRemove = this.find(value);

    if (!nodeToRemove) {
      return false;
    }

    const {parent} = nodeToRemove;

    if (!nodeToRemove.left && !nodeToRemove.right) {
      if (parent) {
        parent.removeChild(nodeToRemove);
      } else {
        nodeToRemove.setValue(null);
      }
    } else if (nodeToRemove.left && nodeToRemove.right) {
      // @ts-ignore
      const nextBiggerNode = nodeToRemove.right.findMin();
      if (!this.nodeComparator.equal(nextBiggerNode, nodeToRemove.right)) {
        this.remove(nextBiggerNode.value);
        nodeToRemove.setValue(nextBiggerNode.value);
      } else {
        nodeToRemove.setValue(nodeToRemove.right.value);
        nodeToRemove.setRight(nodeToRemove.right.right);
      }
    } else {
      const childNode = nodeToRemove.left || nodeToRemove.right;

      if (parent) {
        parent.replaceChild(nodeToRemove, childNode);
      } else {
        BinaryTreeNode.copyNode(childNode, nodeToRemove);
      }
    }

    nodeToRemove.parent = null;

    return true;
  }

  public findMin(): InterfaceBinarySearchTreeNode<T> {
    if (!this.left) {
      return this;
    }

    // @ts-ignore
    return this.left.findMin();
  }
}
