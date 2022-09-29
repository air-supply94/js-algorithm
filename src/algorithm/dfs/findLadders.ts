// https://leetcode-cn.com/problems/word-transformer-lcci/
// 金典-17.22
export function findLadders(beginWord: string, endWord: string, wordList: string[]): string[] {
  const wordSet = new Set(wordList);
  const visited = new Set();
  const a = 'a'.charCodeAt(0);
  const z = 'z'.charCodeAt(0);
  let result: string[] = [];

  function dfs(currentPath: string[], currentWord: string): void {
    if (visited.has(currentWord)) {
      return;
    }

    if (result.length > 0) {
      return;
    }

    visited.add(currentWord);
    currentPath.push(currentWord);

    if (currentWord === endWord) {
      result = currentPath.slice();
      return;
    }

    for (let i = 0; i < currentWord.length; i++) {
      for (let j = a; j <= z; j++) {
        const newWord = `${currentWord.slice(0, i)}${String.fromCharCode(j)}${currentWord.slice(i + 1)}`;
        if (newWord !== currentWord && wordSet.has(newWord)) {
          dfs(currentPath, newWord);
        }
      }
    }

    currentPath.pop();
  }

  dfs([], beginWord);
  return result;
}
