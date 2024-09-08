import { TrieNode } from '../trieNode';

// https://leetcode-cn.com/problems/replace-words/
// 648
export function replaceWords(dictionary: string[], sentence: string): string {
  const root = new TrieNode('');
  for (let i = 0; i < dictionary.length; i++) {
    let current = root;
    for (let j = 0; j < dictionary[i].length; j++) {
      current = current.addChild(dictionary[i][j]);
    }
    current.isCompleteWord = true;
  }

  const result: string[] = [];
  const sentenceList: string[] = sentence.split(' ');
  for (let i = 0; i < sentenceList.length; i++) {
    const sentence = sentenceList[i];
    let currentNode = root;
    let j = 0;
    while (j < sentence.length && currentNode && !currentNode.isCompleteWord) {
      currentNode = currentNode.getChild(sentence[j]);
      j++;
    }

    if (currentNode?.isCompleteWord) {
      result.push(sentence.slice(0, j));
    } else {
      result.push(sentence);
    }
  }
  return result.join(' ');
}
