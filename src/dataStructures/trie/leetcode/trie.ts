import { TrieNode } from '../trieNode';

function getLastCharacterNode(root: TrieNode, word: string): TrieNode | undefined {
  let currentNode = root;
  let i = 0;
  while (i < word.length && currentNode) {
    currentNode = currentNode.getChild(word[i]);
    i++;
  }

  return currentNode;
}

export function findWordsCount(root: TrieNode, word: string): number {
  const lastCharacter = getLastCharacterNode(root, word);
  if (lastCharacter) {
    return lastCharacter.wordCount;
  } else {
    return 0;
  }
}

export function findPrefixCount(root: TrieNode, word: string): number {
  const lastCharacter = getLastCharacterNode(root, word);
  if (lastCharacter) {
    return lastCharacter.prefixCount;
  } else {
    return 0;
  }
}

export function wordFrequency(root: TrieNode): {[key: string]: number; } {
  const result = {};
  const queue: Array<{ node: TrieNode; word: string; }> = [];
  queue.push({
    node: root,
    word: '',
  });

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const item = queue.shift();
      if (item.node.isCompleteWord) {
        result[`${item.word}${item.node.character}`] = item.node.wordCount;
      }

      for (const trieNode of item.node.children.values()) {
        queue.push({
          node: trieNode,
          word: `${item.word}${item.node.character}`,
        });
      }
    }
  }

  return result;
}

// https://leetcode-cn.com/problems/design-add-and-search-words-data-structure/
// 211
// 和此很类似,此类功能更完善
export class Trie {
  constructor() {
    this.root = new TrieNode('');
  }

  public readonly root: TrieNode;

  public addWord(word: string): void {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      currentNode = currentNode.addChild(word[i]);
      currentNode.prefixCount++;
    }

    currentNode.wordCount++;
    currentNode.isCompleteWord = true;
    this.root.isCompleteWord = false;
    this.root.wordCount = 0;
    this.root.prefixCount = 0;
  }

  public suggestNextCharacters(word: string): string[] {
    const lastCharacter = getLastCharacterNode(this.root, word);
    if (lastCharacter) {
      return lastCharacter.suggestChildren();
    } else {
      return [];
    }
  }

  public doesWordExist(word: string): boolean {
    const lastCharacter = getLastCharacterNode(this.root, word);
    if (lastCharacter) {
      return lastCharacter.isCompleteWord;
    } else {
      return false;
    }
  }
}
