import { TrieNode } from './trieNode';
import { getLastCharacterNode } from './utils';

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
