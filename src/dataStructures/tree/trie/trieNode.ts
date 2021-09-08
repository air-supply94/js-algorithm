export class TrieNode {
  constructor(character: string, isCompleteWord = false) {
    this.character = character;
    this.isCompleteWord = isCompleteWord;
    this.wordCount = 0;
    this.prefixCount = 0;
    this.children = new Map<string, TrieNode>();
  }

  public wordCount: number;

  public prefixCount: number;

  public isCompleteWord: boolean;

  public readonly character: string;

  public children: Map<string, TrieNode>;

  public getChild(character: string): TrieNode | undefined {
    return this.children.get(character);
  }

  public addChild(character: string, isCompleteWord = false): TrieNode {
    if (!this.hasChild(character)) {
      this.children.set(character, new TrieNode(character, isCompleteWord));
    }

    const childNode = this.children.get(character);
    childNode.isCompleteWord = childNode.isCompleteWord || isCompleteWord;
    return childNode;
  }

  public hasChild(character: string): boolean {
    return this.children.has(character);
  }

  public suggestChildren(): string[] {
    const children: string[] = [];
    for (const child of this.children.values()) {
      children.push(child.character);
    }
    return children;
  }

  public toString(): string {
    return `${this.character}${this.suggestChildren()
      .join('')}`;
  }
}
