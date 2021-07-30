// https://leetcode-cn.com/problems/word-transformer-lcci/
// 金典-17.22
export function findLadders(beginWord: string, endWord: string, wordList: string[]): string[] {
  const wordSet = new Set(wordList);
  const visited = new Set();
  const a = 'a'.charCodeAt(0);
  const z = 'z'.charCodeAt(0);
  let result: string[] = [];

  function dfs(currentPath: string[]) {
    const currentWord = currentPath[currentPath.length - 1];
    if (result.length) {
      return;
    }

    if (currentWord === endWord) {
      result = currentPath.slice();
      return;
    }

    for (let i = 0; i < currentWord.length; i++) {
      for (let j = a; j <= z; j++) {
        const newWord = `${currentWord.slice(0, i)}${String.fromCharCode(j)}${currentWord.slice(i + 1)}`;
        if (newWord !== currentWord && wordSet.has(newWord) && !visited.has(newWord)) {
          currentPath.push(newWord);
          visited.add(newWord);
          dfs(currentPath);
          currentPath.pop();
        }
      }
    }
  }

  dfs([beginWord]);
  return result;
}

