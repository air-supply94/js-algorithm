import { TrieNode } from './trieNode';

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
  return lastCharacter ? lastCharacter.wordCount : 0;
}

export function findPrefixCount(root: TrieNode, word: string): number {
  const lastCharacter = getLastCharacterNode(root, word);
  return lastCharacter ? lastCharacter.prefixCount : 0;
}

export function wordFrequency(root: TrieNode): Record<string, number> {
  const result = {};
  const queue: Array<[string, TrieNode]> = [
    [
      '',
      root,
    ],
  ];

  while (queue.length) {
    const currentItem = queue.shift();
    if (currentItem[1].isCompleteWord) {
      result[currentItem[0]] = currentItem[1].wordCount;
    }

    for (const trieNode of currentItem[1].children.values()) {
      queue.push([
        `${currentItem[0]}${trieNode.character}`,
        trieNode,
      ]);
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

    currentNode.isCompleteWord = true;
    currentNode.wordCount++;

    this.root.isCompleteWord = false;
    this.root.wordCount = 0;
    this.root.prefixCount = 0;
  }

  public suggestNextCharacters(word: string): string[] {
    const lastCharacter = getLastCharacterNode(this.root, word);
    return lastCharacter ? lastCharacter.suggestChildren() : [];
  }

  public doesWordExist(word: string): boolean {
    const lastCharacter = getLastCharacterNode(this.root, word);
    return lastCharacter ? lastCharacter.isCompleteWord : false;
  }
}