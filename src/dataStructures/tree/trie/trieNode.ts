import { TrieNodeInterface } from './types';

export class TrieNode implements TrieNodeInterface {
  constructor(character: string, isCompleteWord = false) {
    this.character = character;
    this.isCompleteWord = isCompleteWord;
    this.wordCount = 0;
    this.prefixCount = 0;
    this.children = {};
  }

  public wordCount: number;

  public prefixCount: number;

  public isCompleteWord: boolean;

  public readonly character: string;

  public children: {[key: string]: TrieNodeInterface; };

  public getChild(character: string): TrieNodeInterface | undefined {
    return this.children[character];
  }

  public addChild(character: string, isCompleteWord = false): TrieNodeInterface {
    if (!this.hasChild(character)) {
      this.children[character] = new TrieNode(character, isCompleteWord);
    }

    const childNode = this.children[character];
    childNode.isCompleteWord = childNode.isCompleteWord || isCompleteWord;
    return childNode;
  }

  public hasChild(character: string): boolean {
    return Object.prototype.hasOwnProperty.call(this.children, character);
  }

  public suggestChildren(): string[] {
    return Object.values(this.children)
      .map((item) => item.character);
  }

  public toString(): string {
    return `${this.character}${this.suggestChildren()
      .join('')}`;
  }
}
