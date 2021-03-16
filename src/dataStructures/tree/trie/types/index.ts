export interface TrieInterface {
  root: TrieNodeInterface;
  addWord: (word: string) => this;
  suggestNextCharacters: (word: string) => string[];
  doesWordExist: (word: string) => boolean;
}

export interface TrieNodeInterface {
  wordCount: number;
  prefixCount: number;
  isCompleteWord: boolean;
  character: string;
  children: {[key: string]: TrieNodeInterface; };
  getChild: (character: string) => TrieNodeInterface | undefined;
  addChild: (character: string, isCompleteWord?: boolean) => TrieNodeInterface;
  hasChild: (character: string) => boolean;
  suggestChildren: () => string[];
}
