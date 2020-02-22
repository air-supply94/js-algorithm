import { HashTable } from '../hashTable';

export class TrieNode {
  constructor(character: string, isCompleteWord = false) {
    this.character = character;
    this.isCompleteWord = isCompleteWord;
    this.children = new HashTable(26);
  }

  public character: string;
  public isCompleteWord: boolean;
  public children: HashTable<TrieNode>;

  public getChild(character: string): TrieNode | null {
    return this.children.get(character);
  }

  public addChild(character: string, isCompleteWord = false): TrieNode {
    if (!this.children.has(character)) {
      this.children.set(character, new TrieNode(character, isCompleteWord));
    }

    const childNode = this.children.get(character);

    childNode.isCompleteWord = childNode.isCompleteWord || isCompleteWord;

    return childNode;
  }

  public removeChild(character: string): this {
    const childNode = this.getChild(character);

    if (
      childNode
      && !childNode.isCompleteWord
      && !childNode.hasChildren()
    ) {
      this.children.delete(character);
    }

    return this;
  }

  public hasChild(character: string): boolean {
    return this.children.has(character);
  }

  public hasChildren(): boolean {
    return this.children.getKeys().length !== 0;
  }

  public suggestChildren(): string[] {
    return this.children.getKeys();
  }

  public toString(): string {
    let childrenAsString = this.suggestChildren()
    .toString();
    childrenAsString = childrenAsString ? `:${childrenAsString}` : '';
    const isCompleteString = this.isCompleteWord ? '*' : '';

    return `${this.character}${isCompleteString}${childrenAsString}`;
  }
}
