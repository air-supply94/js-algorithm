import { interfaces } from '../../types';
import { BinarySearchTree, findReplaceNode, getUncle, removeChild, rotateLeftLeft, rotateLeftRight, rotateRightLeft, rotateRightRight, traverseAfterOrder, traverseInOrder, traverseLevelOrder, traversePreOrder } from '../binarySearchTree';

export class RedBlackTree<T = unknown> implements interfaces.RedBlackTree<T> {
  constructor(compare?: interfaces.CompareParams<T>) {
    this.binarySearchTree = new BinarySearchTree<T>(compare, false);
  }

  private readonly binarySearchTree: interfaces.BinarySearchTree<T>;

  private insertBalance(node: interfaces.BinarySearchTreeNode<T> | null): void {
    if (node == null) {
      return;
    }

    if (node.parent == null) {
      node.color = interfaces.RED_BLACK_TREE_COLOR.black;
      return;
    }

    if (node.parent.color === interfaces.RED_BLACK_TREE_COLOR.black) {
      return;
    }

    const uncle = getUncle(node);
    if (uncle && uncle.color === interfaces.RED_BLACK_TREE_COLOR.red) {
      node.parent.color = interfaces.RED_BLACK_TREE_COLOR.black;
      uncle.color = interfaces.RED_BLACK_TREE_COLOR.black;
      node.parent.parent.color = interfaces.RED_BLACK_TREE_COLOR.red;
      return this.insertBalance(node.parent.parent);
    }

    if (node.parent === node.parent.parent.left) {
      if (node === node.parent.left) {
        node.parent.color = interfaces.RED_BLACK_TREE_COLOR.black;
        node.parent.parent.color = interfaces.RED_BLACK_TREE_COLOR.red;
        rotateLeftLeft(node.parent.parent, this.binarySearchTree.setRoot);
      } else {
        node.color = interfaces.RED_BLACK_TREE_COLOR.black;
        node.parent.parent.color = interfaces.RED_BLACK_TREE_COLOR.red;
        rotateLeftRight(node.parent.parent);
        rotateLeftLeft(node.parent, this.binarySearchTree.setRoot);
      }
    } else {
      if (node === node.parent.right) {
        node.parent.color = interfaces.RED_BLACK_TREE_COLOR.black;
        node.parent.parent.color = interfaces.RED_BLACK_TREE_COLOR.red;
        rotateRightRight(node.parent.parent, this.binarySearchTree.setRoot);
      } else {
        node.color = interfaces.RED_BLACK_TREE_COLOR.black;
        node.parent.parent.color = interfaces.RED_BLACK_TREE_COLOR.red;
        rotateRightLeft(node.parent.parent);
        rotateRightRight(node.parent, this.binarySearchTree.setRoot);
      }
    }
  }

  private removeBalance(node: interfaces.BinarySearchTreeNode<T>): void {
    let currentNode = node;
    while (currentNode.parent && currentNode.color === interfaces.RED_BLACK_TREE_COLOR.black) {
      if (currentNode === currentNode.parent.left) {
        const sibling = currentNode.parent.right;

        if (sibling.color === interfaces.RED_BLACK_TREE_COLOR.red) {
          currentNode.parent.color = interfaces.RED_BLACK_TREE_COLOR.red;
          sibling.color = interfaces.RED_BLACK_TREE_COLOR.black;
          rotateRightRight(currentNode.parent, this.binarySearchTree.setRoot);
        } else if ((sibling.left == null && sibling.right == null) || (sibling.left && sibling.right && sibling.left.color === interfaces.RED_BLACK_TREE_COLOR.black && sibling.right.color === interfaces.RED_BLACK_TREE_COLOR.black)) {
          sibling.color = interfaces.RED_BLACK_TREE_COLOR.red;
          currentNode = currentNode.parent;
        } else if (sibling.right && sibling.right.color === interfaces.RED_BLACK_TREE_COLOR.red) {
          sibling.color = currentNode.parent.color;
          currentNode.parent.color = interfaces.RED_BLACK_TREE_COLOR.black;
          sibling.right.color = interfaces.RED_BLACK_TREE_COLOR.black;
          rotateRightRight(currentNode.parent, this.binarySearchTree.setRoot);
          currentNode = this.root;
        } else if (sibling.left && sibling.left.color === interfaces.RED_BLACK_TREE_COLOR.red) {
          sibling.left.color = interfaces.RED_BLACK_TREE_COLOR.black;
          sibling.color = interfaces.RED_BLACK_TREE_COLOR.red;
          rotateRightLeft(currentNode.parent);
        }
      } else {
        const sibling = currentNode.parent.left;

        if (sibling.color === interfaces.RED_BLACK_TREE_COLOR.red) {
          currentNode.parent.color = interfaces.RED_BLACK_TREE_COLOR.red;
          sibling.color = interfaces.RED_BLACK_TREE_COLOR.black;
          rotateLeftLeft(currentNode.parent, this.binarySearchTree.setRoot);
        } else if ((sibling.left == null && sibling.right == null) || (sibling.left && sibling.right && sibling.left.color === interfaces.RED_BLACK_TREE_COLOR.black && sibling.right.color === interfaces.RED_BLACK_TREE_COLOR.black)) {
          sibling.color = interfaces.RED_BLACK_TREE_COLOR.red;
          currentNode = currentNode.parent;
        } else if (sibling.left && sibling.left.color === interfaces.RED_BLACK_TREE_COLOR.red) {
          sibling.color = currentNode.parent.color;
          currentNode.parent.color = interfaces.RED_BLACK_TREE_COLOR.black;
          sibling.left.color = interfaces.RED_BLACK_TREE_COLOR.black;
          rotateLeftLeft(currentNode.parent, this.binarySearchTree.setRoot);
          currentNode = this.root;
        } else if (sibling.right && sibling.right.color === interfaces.RED_BLACK_TREE_COLOR.red) {
          sibling.right.color = interfaces.RED_BLACK_TREE_COLOR.black;
          sibling.color = interfaces.RED_BLACK_TREE_COLOR.red;
          rotateLeftRight(currentNode.parent);
        }
      }
    }
    currentNode.color = interfaces.RED_BLACK_TREE_COLOR.black;
  }

  public get root(): interfaces.BinarySearchTreeNode<T> | null {
    return this.binarySearchTree.root;
  }

  public get comparator(): interfaces.Comparator<T> {
    return this.binarySearchTree.comparator;
  }

  public get setRoot(): interfaces.BinarySearchTree<T>['setRoot'] {
    return this.binarySearchTree.setRoot;
  }

  public find(value: T): interfaces.BinarySearchTreeNode<T> | null {
    return this.binarySearchTree.find(value);
  }

  public findMin(): interfaces.BinarySearchTreeNode<T> | null {
    return this.binarySearchTree.findMin();
  }

  public findMax(): interfaces.BinarySearchTreeNode<T> | null {
    return this.binarySearchTree.findMax();
  }

  public traversePreOrder(): T[] {
    const result: T[] = [];
    this.traversePreOrderCallback((node) => {
      result.push(node.value);
    });
    return result;
  }

  public traversePreOrderCallback(callback: interfaces.BinarySearchTreeTraverseCallback<T>): void {
    traversePreOrder(this.root, callback);
  }

  public traverseInOrder(): T[] {
    const result: T[] = [];
    this.traverseInOrderCallback((node) => {
      result.push(node.value);
    });
    return result;
  }

  public traverseInOrderCallback(callback: interfaces.BinarySearchTreeTraverseCallback<T>): void {
    traverseInOrder(this.root, callback);
  }

  public traverseAfterOrder(): T[] {
    const result: T[] = [];
    this.traverseAfterOrderCallback((node) => {
      result.push(node.value);
    });
    return result;
  }

  public traverseAfterOrderCallback(callback: interfaces.BinarySearchTreeTraverseCallback<T>): void {
    traverseAfterOrder(this.root, callback);
  }

  public traverseLevelOrder(): T[] {
    const result: T[] = [];
    traverseLevelOrder(this.root, (node) => {
      result.push(node.value);
    });
    return result;
  }

  public traverseLevelOrderCallback(callback: interfaces.BinarySearchTreeTraverseCallback<T>): void {
    traverseLevelOrder(this.root, callback);
  }

  public contains(value: T): boolean {
    return this.binarySearchTree.contains(value);
  }

  public insert(value: T): interfaces.BinarySearchTreeNode<T> | null {
    const node = this.binarySearchTree.insert(value);
    this.insertBalance(node);
    return node;
  }

  public remove(value: T): interfaces.BinarySearchTreeNode<T> | null {
    const replaceNode = findReplaceNode<T>(this.root, value, this.binarySearchTree.comparator, false);

    if (replaceNode == null) {
      return replaceNode;
    }

    if (replaceNode.parent == null) {
      this.binarySearchTree.setRoot(null);
      return replaceNode;
    }

    if (replaceNode.color === interfaces.RED_BLACK_TREE_COLOR.black) {
      this.removeBalance(replaceNode);
    }

    removeChild(replaceNode.parent, replaceNode);
    return replaceNode;
  }

  public toString(): string {
    return this.traverseInOrder().toString();
  }
}
