import { Trie } from '../trie';
import { findPrefixCount, findWordsCount, wordFrequency } from '../utils';

test('trie findWordsCount findPrefixCount wordFrequency', () => {
  const trie = new Trie();
  const str = 'the apple apple banana potato potato potato apple oppo potato apple tomato the';
  str.split(' ')
    .filter((item) => item)
    .forEach((item) => trie.addWord(item));

  expect(findWordsCount(trie.root, 'xxx'))
    .toBe(0);
  expect(findWordsCount(trie.root, 'banana'))
    .toBe(1);
  expect(findWordsCount(trie.root, 'apple'))
    .toBe(4);

  expect(findPrefixCount(trie.root, 'xxx'))
    .toBe(0);
  expect(findPrefixCount(trie.root, 'ba'))
    .toBe(1);
  expect(findPrefixCount(trie.root, 't'))
    .toBe(3);

  expect(wordFrequency(trie.root))
    .toEqual({
      apple: 4,
      banana: 1,
      oppo: 1,
      potato: 4,
      the: 2,
      tomato: 1,
    });
});
