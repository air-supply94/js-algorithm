import { TrieNode } from './TrieNode';

const HEAD_CHARACTER = '*';

export class Trie {
  constructor() {
    this.head = new TrieNode(HEAD_CHARACTER);
  }

  public head: TrieNode;

  public addWord(word: string): this {
    const characters = word.split('');
    let currentNode = this.head;

    for (let charIndex = 0; charIndex < characters.length; charIndex += 1) {
      const isComplete = charIndex === characters.length - 1;
      currentNode = currentNode.addChild(characters[charIndex], isComplete);
    }

    return this;
  }

  public deleteWord(word: string): this {
    const depthFirstDelete = (currentNode, charIndex = 0) => {
      if (charIndex >= word.length) {
        return;
      }

      const character = word[charIndex];
      const nextNode = currentNode.getChild(character);

      if (nextNode == null) {
        return;
      }

      depthFirstDelete(nextNode, charIndex + 1);

      if (charIndex === (word.length - 1)) {
        nextNode.isCompleteWord = false;
      }

      currentNode.removeChild(character);
    };

    depthFirstDelete(this.head);

    return this;
  }

  public suggestNextCharacters(word: string): string[] {
    const lastCharacter = this.getLastCharacterNode(word);

    if (!lastCharacter) {
      return null;
    }

    return lastCharacter.suggestChildren();
  }

  public doesWordExist(word: string): boolean {
    const lastCharacter = this.getLastCharacterNode(word);

    return !!lastCharacter && lastCharacter.isCompleteWord;
  }

  public getLastCharacterNode(word: string): TrieNode {
    const characters: string[] = word.split('');
    let currentNode = this.head;

    for (let charIndex = 0; charIndex < characters.length; charIndex += 1) {
      if (!currentNode.hasChild(characters[charIndex])) {
        return null;
      }

      currentNode = currentNode.getChild(characters[charIndex]);
    }

    return currentNode;
  }
}
