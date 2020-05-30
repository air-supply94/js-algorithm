import { TrieNode } from './trieNode';
import {
  TrieInterface,
  TrieNodeInterface,
} from './types';

const HEAD_CHARACTER = '';

export class Trie implements TrieInterface {
  constructor() {
    this.head = new TrieNode(HEAD_CHARACTER);
  }

  private getLastCharacterNode(word: string): TrieNodeInterface | undefined {
    let currentNode = this.head;
    for (const character of word) {
      if (!currentNode.hasChild(character)) {
        return undefined;
      }
      currentNode = currentNode.getChild(character);
    }

    return currentNode;
  }

  public readonly head: TrieNodeInterface;

  public addWord(word: string): this {
    let currentNode = this.head;
    for (const character of word) {
      currentNode = currentNode.addChild(character);
    }

    currentNode.setIsCompleteWord(true);
    this.head.setIsCompleteWord(false);
    return this;
  }

  public deleteWord(word: string): this {
    const str: string[] = Array.from(word);

    function depthFirstDelete(currentNode: TrieNodeInterface, charIndex = 0) {
      if (charIndex >= str.length) {
        return;
      }

      const nextNode = currentNode.getChild(str[charIndex]);

      if (!nextNode) {
        return;
      }

      depthFirstDelete(nextNode, charIndex + 1);

      if (charIndex === (word.length - 1)) {
        nextNode.setIsCompleteWord(false);
      }

      currentNode.removeChild(str[charIndex]);
    }

    depthFirstDelete(this.head);

    return this;
  }

  public suggestNextCharacters(word: string): string[] {
    const lastCharacter = this.getLastCharacterNode(word);

    if (!lastCharacter) {
      return [];
    }

    return lastCharacter.suggestChildren();
  }

  public doesWordExist(word: string): boolean {
    const lastCharacter = this.getLastCharacterNode(word);

    return !!lastCharacter && lastCharacter.isCompleteWord;
  }
}
