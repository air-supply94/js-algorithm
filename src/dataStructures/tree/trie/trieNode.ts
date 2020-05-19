import { TrieNodeInterface } from './types';

export class TrieNode implements TrieNodeInterface {
  constructor(character: string, isCompleteWord = false) {
    this.character = character;
    this._isCompleteWord = isCompleteWord;
    this.children = {};
  }

  private _isCompleteWord: boolean;

  get isCompleteWord(): boolean {
    return this._isCompleteWord;
  }

  public readonly character: string;
  public children: { [key: string]: TrieNodeInterface };

  public setIsCompleteWord(isCompleteWord: boolean): this {
    this._isCompleteWord = isCompleteWord;
    return this;
  }

  public getChild(character: string): TrieNodeInterface | undefined {
    return this.children[character];
  }

  public addChild(character: string, isCompleteWord = false): TrieNodeInterface {
    if (!this.hasChild(character)) {
      this.children[character] = new TrieNode(character, isCompleteWord);
    }

    const childNode = this.children[character];

    return childNode.setIsCompleteWord(childNode.isCompleteWord || isCompleteWord);
  }

  public removeChild(character: string): boolean {
    const childNode = this.getChild(character);

    if (
      childNode
      && !childNode.isCompleteWord
      && !childNode.hasChildren()
    ) {
      delete this.children[character];
      return true;
    }

    return false;
  }

  public hasChild(character: string): boolean {
    return Object.prototype.hasOwnProperty.call(this.children, character);
  }

  public hasChildren(): boolean {
    return Object.keys(this.children).length !== 0;
  }

  public suggestChildren(): string[] {
    return Object.values(this.children)
    .map(item => item.character);
  }

  public toString(): string {
    let childrenAsString = this.suggestChildren()
    .toString();
    childrenAsString = childrenAsString ? `:${childrenAsString}` : '';
    const isCompleteString = this.isCompleteWord ? '*' : '';

    return `${this.character}${isCompleteString}${childrenAsString}`;
  }
}
