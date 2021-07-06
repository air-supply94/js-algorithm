import { Trie } from '../trie';

describe('Trie', () => {
  test('should create trie', () => {
    const trie = new Trie();

    expect(trie)
      .toBeDefined();
    expect(trie.root.toString())
      .toBe('');
  });

  test('should add words to trie', () => {
    const trie = new Trie();

    trie.addWord('cat');

    expect(trie.root.toString())
      .toBe('c');
    expect(trie.root.getChild('c')
      .toString())
      .toBe('ca');

    trie.addWord('car');
    expect(trie.root.toString())
      .toBe('c');
    expect(trie.root.getChild('c')
      .toString())
      .toBe('ca');
    expect(trie.root.getChild('c')
      .getChild('a')
      .toString())
      .toBe('atr');
    expect(trie.root.getChild('c')
      .getChild('a')
      .getChild('t')
      .toString())
      .toBe('t');
  });

  test('should suggests next characters', () => {
    const trie = new Trie();

    trie.addWord('cat');
    trie.addWord('cats');
    trie.addWord('car');
    trie.addWord('caption');

    expect(trie.suggestNextCharacters('ca'))
      .toEqual([
        't',
        'r',
        'p',
      ]);
    expect(trie.suggestNextCharacters('cat'))
      .toEqual(['s']);
    expect(trie.suggestNextCharacters('cab'))
      .toEqual([]);
  });

  test('should check if word exists', () => {
    const trie = new Trie();

    trie.addWord('cat');
    trie.addWord('cats');
    trie.addWord('carpet');
    trie.addWord('car');
    trie.addWord('caption');

    expect(trie.doesWordExist('cat'))
      .toBe(true);
    expect(trie.doesWordExist('cats'))
      .toBe(true);
    expect(trie.doesWordExist('carpet'))
      .toBe(true);
    expect(trie.doesWordExist('car'))
      .toBe(true);
    expect(trie.doesWordExist('cap'))
      .toBe(false);
    expect(trie.doesWordExist('call'))
      .toBe(false);
  });
});
