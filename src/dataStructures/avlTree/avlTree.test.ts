import { describe, expect, test } from 'vitest';
import { Comparator } from '../../utils';
import { getBalanceFactor, getHeight } from '../binarySearchTree';
import { AvlTree } from './avlTree';

describe('AvlTree', () => {
  test('should do special case', () => {
    const tree = new AvlTree(new Comparator());
    tree.insert(1);
    tree.insert(3);
    tree.insert(4);
    tree.insert(2);

    expect(tree.toString()).toBe('1,2,3,4');
  });

  test('should do simple left-left rotation', () => {
    function callback() {
      // nothing
    }

    const tree = new AvlTree();
    expect(tree.find(1)).toBeNull();
    expect(tree.findMax()).toBeNull();
    expect(tree.findMin()).toBeNull();
    expect(tree.traversePreOrder()).toEqual([]);
    expect(tree.traversePreOrderCallback(callback)).toBeUndefined();
    expect(tree.traverseInOrder()).toEqual([]);
    expect(tree.traverseInOrderCallback(callback)).toBeUndefined();
    expect(tree.traverseAfterOrder()).toEqual([]);
    expect(tree.traverseAfterOrderCallback(callback)).toBeUndefined();
    expect(tree.traverseLevelOrder()).toEqual([]);
    expect(tree.traverseLevelOrderCallback(callback)).toBeUndefined();

    tree.insert(4);
    expect(tree.insert(4)).toBeNull();
    expect(tree.remove(12)).toBeFalsy();
    tree.insert(3);
    tree.insert(2);

    expect(tree.toString()).toBe('2,3,4');
    expect(tree.root.value).toBe(3);
    expect(getHeight(tree.root)).toBe(1);

    tree.insert(1);

    expect(tree.toString()).toBe('1,2,3,4');
    expect(tree.root.value).toBe(3);
    expect(getHeight(tree.root)).toBe(2);

    tree.insert(0);

    expect(tree.toString()).toBe('0,1,2,3,4');
    expect(tree.root.value).toBe(3);
    expect(tree.root.left.value).toBe(1);
    expect(getHeight(tree.root)).toBe(2);
  });

  test('should do complex left-left rotation', () => {
    const tree = new AvlTree();

    tree.insert(30);
    tree.insert(20);
    tree.insert(40);
    tree.insert(10);

    expect(tree.root.value).toBe(30);
    expect(getHeight(tree.root)).toBe(2);
    expect(tree.toString()).toBe('10,20,30,40');

    tree.insert(25);
    expect(tree.root.value).toBe(30);
    expect(getHeight(tree.root)).toBe(2);
    expect(tree.toString()).toBe('10,20,25,30,40');

    tree.insert(5);
    expect(tree.root.value).toBe(20);
    expect(getHeight(tree.root)).toBe(2);
    expect(tree.toString()).toBe('5,10,20,25,30,40');
  });

  test('should do simple right-right rotation', () => {
    const tree = new AvlTree();

    tree.insert(2);
    tree.insert(3);
    tree.insert(4);

    expect(tree.toString()).toBe('2,3,4');
    expect(tree.root.value).toBe(3);
    expect(getHeight(tree.root)).toBe(1);

    tree.insert(5);

    expect(tree.toString()).toBe('2,3,4,5');
    expect(tree.root.value).toBe(3);
    expect(getHeight(tree.root)).toBe(2);

    tree.insert(6);

    expect(tree.toString()).toBe('2,3,4,5,6');
    expect(tree.root.value).toBe(3);
    expect(tree.root.right.value).toBe(5);
    expect(getHeight(tree.root)).toBe(2);
  });

  test('should do complex right-right rotation', () => {
    const tree = new AvlTree();

    tree.insert(30);
    tree.insert(20);
    tree.insert(40);
    tree.insert(50);

    expect(tree.root.value).toBe(30);
    expect(getHeight(tree.root)).toBe(2);
    expect(tree.toString()).toBe('20,30,40,50');

    tree.insert(35);
    expect(tree.root.value).toBe(30);
    expect(getHeight(tree.root)).toBe(2);
    expect(tree.toString()).toBe('20,30,35,40,50');

    tree.insert(55);
    expect(tree.root.value).toBe(40);
    expect(getHeight(tree.root)).toBe(2);
    expect(tree.toString()).toBe('20,30,35,40,50,55');
  });

  test('should do left-right rotation', () => {
    const tree = new AvlTree();

    tree.insert(30);
    tree.insert(20);
    tree.insert(25);

    expect(getHeight(tree.root)).toBe(1);
    expect(tree.root.value).toBe(25);
    expect(tree.toString()).toBe('20,25,30');
  });

  test('should do right-left rotation', () => {
    const tree = new AvlTree();

    tree.insert(30);
    tree.insert(40);
    tree.insert(35);

    expect(getHeight(tree.root)).toBe(1);
    expect(tree.root.value).toBe(35);
    expect(tree.toString()).toBe('30,35,40');
  });

  test('should create balanced tree: case #1', () => {
    // @see: https://www.youtube.com/watch?v=rbg7Qf8GkQ4&t=839s
    const tree = new AvlTree();

    tree.insert(1);
    tree.insert(2);
    tree.insert(3);

    expect(tree.root.value).toBe(2);
    expect(getHeight(tree.root)).toBe(1);
    expect(tree.toString()).toBe('1,2,3');

    tree.insert(6);

    expect(tree.root.value).toBe(2);
    expect(getHeight(tree.root)).toBe(2);
    expect(tree.toString()).toBe('1,2,3,6');

    tree.insert(15);

    expect(tree.root.value).toBe(2);
    expect(getHeight(tree.root)).toBe(2);
    expect(tree.toString()).toBe('1,2,3,6,15');

    tree.insert(-2);

    expect(tree.root.value).toBe(2);
    expect(getHeight(tree.root)).toBe(2);
    expect(tree.toString()).toBe('-2,1,2,3,6,15');

    tree.insert(-5);

    expect(tree.root.value).toBe(2);
    expect(getHeight(tree.root)).toBe(2);
    expect(tree.toString()).toBe('-5,-2,1,2,3,6,15');

    tree.insert(-8);

    expect(tree.root.value).toBe(2);
    expect(getHeight(tree.root)).toBe(3);
    expect(tree.toString()).toBe('-8,-5,-2,1,2,3,6,15');
  });

  test('should create balanced tree: case #2', () => {
    // @see https://www.youtube.com/watch?v=7m94k2Qhg68
    const tree = new AvlTree();

    tree.insert(43);
    tree.insert(18);
    tree.insert(22);
    tree.insert(9);
    tree.insert(21);
    tree.insert(6);

    expect(tree.root.value).toBe(18);
    expect(getHeight(tree.root)).toBe(2);
    expect(tree.toString()).toBe('6,9,18,21,22,43');

    tree.insert(8);

    expect(tree.root.value).toBe(18);
    expect(getHeight(tree.root)).toBe(2);
    expect(tree.toString()).toBe('6,8,9,18,21,22,43');
  });

  test('should do left right rotation and keeping left right node safe', () => {
    const tree = new AvlTree();

    tree.insert(30);
    tree.insert(15);
    tree.insert(40);
    tree.insert(10);
    tree.insert(18);
    tree.insert(35);
    tree.insert(45);
    tree.insert(5);
    tree.insert(12);

    expect(tree.toString()).toBe('5,10,12,15,18,30,35,40,45');
    expect(getHeight(tree.root)).toBe(3);

    tree.insert(11);

    expect(tree.toString()).toBe('5,10,11,12,15,18,30,35,40,45');
    expect(getHeight(tree.root)).toBe(3);
  });

  test('should do insert', () => {
    const tree = new AvlTree();

    tree.insert(30);
    tree.insert(15);
    tree.insert(40);
    tree.insert(10);
    tree.insert(18);
    tree.insert(35);
    tree.insert(45);
    tree.insert(42);
    tree.insert(47);

    expect(tree.toString()).toBe('10,15,18,30,35,40,42,45,47');
    expect(getHeight(tree.root)).toBe(3);

    tree.insert(43);

    expect(tree.toString()).toBe('10,15,18,30,35,40,42,43,45,47');
    expect(getHeight(tree.root)).toBe(3);
  });

  test('should remove values from the tree with right-right rotation', () => {
    const tree = new AvlTree();
    expect(getBalanceFactor(tree.root)).toBe(0);

    tree.insert(10);
    tree.insert(20);
    tree.insert(30);
    tree.insert(40);

    expect(tree.toString()).toBe('10,20,30,40');

    tree.remove(10);

    expect(tree.toString()).toBe('20,30,40');
    expect(tree.root.value).toBe(30);
    expect(tree.root.left.value).toBe(20);
    expect(tree.root.right.value).toBe(40);
    expect(getBalanceFactor(tree.root)).toBe(0);
  });

  test('should remove values from the tree with left-left rotation', () => {
    const tree = new AvlTree();

    tree.insert(10);
    tree.insert(20);
    tree.insert(30);
    tree.insert(5);

    expect(tree.toString()).toBe('5,10,20,30');

    tree.remove(30);

    expect(tree.toString()).toBe('5,10,20');
    expect(tree.root.value).toBe(10);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.right.value).toBe(20);
    expect(getBalanceFactor(tree.root)).toBe(0);
  });

  test('should keep balance after removal', () => {
    const tree = new AvlTree();

    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.insert(4);
    tree.insert(5);
    tree.insert(6);
    tree.insert(7);
    tree.insert(8);
    tree.insert(9);

    expect(tree.remove(19)).toBeFalsy();
    expect(tree.toString()).toBe('1,2,3,4,5,6,7,8,9');
    expect(tree.root.value).toBe(4);
    expect(getHeight(tree.root)).toBe(3);
    expect(getBalanceFactor(tree.root)).toBe(-1);

    tree.remove(8);

    expect(tree.root.value).toBe(4);
    expect(getBalanceFactor(tree.root)).toBe(-1);

    tree.remove(9);

    expect(tree.contains(8)).toBeFalsy();
    expect(tree.contains(9)).toBeFalsy();
    expect(tree.toString()).toBe('1,2,3,4,5,6,7');
    expect(tree.root.value).toBe(4);
    expect(getHeight(tree.root)).toBe(2);
    expect(getBalanceFactor(tree.root)).toBe(0);
  });
});
