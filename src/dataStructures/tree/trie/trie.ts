import { Queue } from '../../queue';
import { TrieNode } from './trieNode';
import { TrieInterface, TrieNodeInterface } from './types';

function getLastCharacterNode(root: TrieNodeInterface, word: string): TrieNodeInterface | undefined {
  let currentNode = root;
  let i = 0;
  while (i < word.length && currentNode) {
    currentNode = currentNode.getChild(word[i]);
    i++;
  }

  return currentNode;
}

export class Trie implements TrieInterface {
  constructor() {
    this.root = new TrieNode('');
  }

  public readonly root: TrieNodeInterface;

  public addWord(word: string): this {
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
    return this;
  }

  public findWordsCount(word: string): number {
    const lastCharacter = getLastCharacterNode(this.root, word);
    if (lastCharacter) {
      return lastCharacter.wordCount;
    } else {
      return 0;
    }
  }

  public findPrefixCount(word: string): number {
    const lastCharacter = getLastCharacterNode(this.root, word);
    if (lastCharacter) {
      return lastCharacter.prefixCount;
    } else {
      return 0;
    }
  }

  public wordFrequency(): {[key in string]: number } {
    const result = {};
    const queue = new Queue<{ node: TrieNodeInterface; word: string; }>();
    queue.enqueue({
      node: this.root,
      word: '',
    });

    while (!queue.isEmpty()) {
      const size = queue.size;
      for (let i = 0; i < size; i++) {
        const item = queue.dequeue();
        if (item.node.isCompleteWord) {
          result[`${item.word}${item.node.character}`] = item.node.wordCount;
        }

        Object.values(item.node.children)
          .forEach((trieNode) => queue.enqueue({
            node: trieNode,
            word: `${item.word}${item.node.character}`,
          }));
      }
    }

    return result;
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
