import { expect, test } from 'vitest';
import type { interfaces } from '../../types';
import { huffmanTree } from './huffmanTree';

test('huffmanTree', () => {
  expect(getHuffmanWPL(huffmanTree([]))).toBe(0);

  expect(getHuffmanWPL(huffmanTree([7, 5, 2, 4]))).toBe(35);

  expect(getHuffmanWPL(huffmanTree([1, 1, 2, 2]))).toBe(12);

  expect(getHuffmanWPL(huffmanTree([5, 15, 40, 30, 10]))).toBe(205);

  expect(getHuffmanWPL(huffmanTree([5, 29, 7, 8, 14, 23, 3, 11]))).toBe(271);
  expect(getHuffmanWPL(huffmanTree([5, 8, 4, 11, 9, 13]))).toBe(126);
});

function getHuffmanWPL(root: interfaces.BinarySearchTreeNode<number> | null): number {
  let result = 0;

  function dfs(node: interfaces.BinarySearchTreeNode<number>, height: number): void {
    if (node == null) {
      return;
    }

    if (node.left == null && node.right == null) {
      result += height * node.value;
    }

    dfs(node.left, height + 1);
    dfs(node.right, height + 1);
  }

  dfs(root, 0);

  return result;
}
