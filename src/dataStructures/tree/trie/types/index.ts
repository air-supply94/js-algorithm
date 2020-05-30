export interface TrieInterface {
  head: TrieNodeInterface;
  addWord: (word: string) => this;
  deleteWord: (word: string) => this;
  suggestNextCharacters: (word: string) => string[];
  doesWordExist: (word: string) => boolean;
}

export interface TrieNodeInterface {
  readonly isCompleteWord: boolean;
  character: string;
  children: { [key: string]: TrieNodeInterface; };
  setIsCompleteWord: (isCompleteWord: boolean) => this;
  getChild: (character: string) => TrieNodeInterface | undefined;
  addChild: (character: string, isCompleteWord?: boolean) => TrieNodeInterface;
  removeChild: (character: string) => boolean;
  hasChild: (character: string) => boolean;
  hasChildren: () => boolean;
  suggestChildren: () => string[];
}
