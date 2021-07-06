import { Queue } from '../../queue';
import { TrieNode } from './trieNode';

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
  const queue = new Queue<{ node: TrieNode; word: string; }>();
  queue.enqueue({
    node: root,
    word: '',
  });

  while (!queue.isEmpty()) {
    const size = queue.size;
    for (let i = 0; i < size; i++) {
      const item = queue.dequeue();
      if (item.node.isCompleteWord) {
        result[`${item.word}${item.node.character}`] = item.node.wordCount;
      }

      Object.values(item.node.children)
        .forEach((trieNode) => queue.enqueue({
          node: trieNode,
          word: `${item.word}${item.node.character}`,
        }));
    }
  }

  return result;
}
