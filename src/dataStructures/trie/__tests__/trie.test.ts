import { describe, expect, test } from 'vitest';
import { Trie, findPrefixCount, findWordsCount, wordFrequency } from '../trie';

describe('Trie', () => {
  test('trie findWordsCount findPrefixCount wordFrequency', () => {
    const trie = new Trie();
    const str = 'the apple apple banana potato potato potato apple oppo potato apple tomato the';
    str
      .split(' ')
      .filter((item) => item)
      .forEach((item) => trie.addWord(item));

    expect(findWordsCount(trie.root, 'xxx')).toBe(0);
    expect(findWordsCount(trie.root, 'banana')).toBe(1);
    expect(findWordsCount(trie.root, 'apple')).toBe(4);

    expect(findPrefixCount(trie.root, 'xxx')).toBe(0);
    expect(findPrefixCount(trie.root, 'ba')).toBe(1);
    expect(findPrefixCount(trie.root, 't')).toBe(3);

    expect(wordFrequency(trie.root)).toEqual({
      apple: 4,
      banana: 1,
      oppo: 1,
      potato: 4,
      the: 2,
      tomato: 1,
    });
  });

  test('should add words to trie', () => {
    const trie = new Trie();

    trie.addWord('cat');

    expect(trie.root.toString()).toBe('c');
    expect(trie.root.getChild('c').toString()).toBe('ca');

    trie.addWord('car');
    expect(trie.root.toString()).toBe('c');
    expect(trie.root.getChild('c').toString()).toBe('ca');
    expect(trie.root.getChild('c').getChild('a').toString()).toBe('atr');
    expect(trie.root.getChild('c').getChild('a').getChild('t').toString()).toBe('t');
  });

  test('should suggests next characters', () => {
    const trie = new Trie();

    trie.addWord('cat');
    trie.addWord('cats');
    trie.addWord('car');
    trie.addWord('caption');

    expect(trie.suggestNextCharacters('ca')).toEqual(['t', 'r', 'p']);
    expect(trie.suggestNextCharacters('cat')).toEqual(['s']);
    expect(trie.suggestNextCharacters('cab')).toEqual([]);
  });

  test('should check if word exists', () => {
    const trie = new Trie();

    trie.addWord('cat');
    trie.addWord('cats');
    trie.addWord('carpet');
    trie.addWord('car');
    trie.addWord('caption');

    expect(trie.doesWordExist('cat')).toBe(true);
    expect(trie.doesWordExist('cats')).toBe(true);
    expect(trie.doesWordExist('carpet')).toBe(true);
    expect(trie.doesWordExist('car')).toBe(true);
    expect(trie.doesWordExist('cap')).toBe(false);
    expect(trie.doesWordExist('call')).toBe(false);
  });
});
