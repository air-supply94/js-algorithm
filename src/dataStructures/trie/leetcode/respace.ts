import { TrieNode } from '../trieNode';

// https://leetcode-cn.com/problems/re-space-lcci/
// 17.13. 恢复空格

export function respace(dictionary: string[], sentence: string): number {
  const root = new TrieNode('');
  const n = sentence.length;
  for (let i = 0; i < dictionary.length; i++) {
    let current = root;
    for (let j = dictionary[i].length - 1; j >= 0; j--) {
      current = current.addChild(dictionary[i][j]);
    }
    current.isCompleteWord = true;
  }

  const dp = Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    let current = root;

    for (let j = i; j >= 1 && current.getChild(sentence[j - 1]); j--) {
      if (current.getChild(sentence[j - 1]).isCompleteWord) {
        dp[i] = Math.min(dp[i], dp[j - 1]);
      }
      current = current.getChild(sentence[j - 1]);
    }
  }

  return dp[n];
}
