export class TrieNode {
  constructor(character: string) {
    this.character = character;
    this.children = new Map<string, TrieNode>();
  }

  public wordCount = 0;

  public prefixCount = 0;

  public isCompleteWord = false;

  public readonly character: string;

  public children: Map<string, TrieNode>;

  public getChild(character: string): TrieNode | undefined {
    return this.children.get(character);
  }

  public addChild(character: string): TrieNode {
    if (!this.hasChild(character)) {
      this.children.set(character, new TrieNode(character));
    }

    return this.children.get(character);
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
