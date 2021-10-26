import type { TrieNode } from './trieNode';

export function getLastCharacterNode(root: TrieNode, word: string): TrieNode | undefined {
  let currentNode = root;
  let i = 0;
  while (i < word.length && currentNode) {
    currentNode = currentNode.getChild(word[i]);
    i++;
  }

  return currentNode;
}

export function findWordsCount(root: TrieNode, word: string): number {
  const lastCharacter = getLastCharacterNode(root, word);
  if (lastCharacter) {
    return lastCharacter.wordCount;
  } else {
    return 0;
  }
}

export function findPrefixCount(root: TrieNode, word: string): number {
  const lastCharacter = getLastCharacterNode(root, word);
  if (lastCharacter) {
    return lastCharacter.prefixCount;
  } else {
    return 0;
  }
}

export function wordFrequency(root: TrieNode): {[key in string]: number } {
  const result = {};
  const queue: Array<{ node: TrieNode; word: string; }> = [];
  queue.push({
    node: root,
    word: '',
  });

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const item = queue.shift();
      if (item.node.isCompleteWord) {
        result[`${item.word}${item.node.character}`] = item.node.wordCount;
      }

      for (const trieNode of item.node.children.values()) {
        queue.push({
          node: trieNode,
          word: `${item.word}${item.node.character}`,
        });
      }
    }
  }

  return result;
}
