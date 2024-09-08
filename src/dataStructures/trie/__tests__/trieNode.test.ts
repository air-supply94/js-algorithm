import { describe, expect, test } from 'vitest';
import { TrieNode } from '../trieNode';

describe('TrieNode', () => {
  test('should create trie node', () => {
    const trieNode = new TrieNode('c');

    expect(trieNode.character).toBe('c');
    expect(trieNode.isCompleteWord).toBe(false);
    expect(trieNode.toString()).toBe('c');
  });

  test('should get child nodes', () => {
    const trieNode = new TrieNode('c');

    trieNode.addChild('a');
    trieNode.addChild('o');

    expect(trieNode.getChild('a').toString()).toBe('a');
    expect(trieNode.getChild('a').character).toBe('a');
    expect(trieNode.getChild('o').toString()).toBe('o');
    expect(trieNode.getChild('b')).toBeUndefined();
  });

  test('should check if node has specific child', () => {
    const trieNode = new TrieNode('c');

    trieNode.addChild('a');
    trieNode.addChild('o');

    expect(trieNode.hasChild('a')).toBe(true);
    expect(trieNode.hasChild('o')).toBe(true);
    expect(trieNode.hasChild('b')).toBe(false);
  });

  test('should suggest next children', () => {
    const trieNode = new TrieNode('c');

    trieNode.addChild('a');
    trieNode.addChild('o');

    expect(trieNode.suggestChildren()).toEqual(['a', 'o']);
  });
});
