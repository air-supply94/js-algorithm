// https://leetcode-cn.com/problems/word-ladder/
// 127
export function ladderLengthDoubleBfs(beginWord: string, endWord: string, wordList: string[]): number {
  const wordSet = new Set<string>(wordList);
  const visitedSet = new Set<string>([
    beginWord,
    endWord,
  ]);
  if (!wordSet.has(endWord)) {
    return 0;
  }

  let startSet = new Set<string>([beginWord]);
  let endSet = new Set<string>([endWord]);

  let level = 0;
  const a = 'a'.charCodeAt(0);
  const z = 'z'.charCodeAt(0);

  while (startSet.size > 0 && endSet.size > 0) {
    level++;
    if (startSet.size > endSet.size) {
      const change = startSet;
      startSet = endSet;
      endSet = change;
    }

    const tmpSet = new Set<string>();
    for (const currentWord of startSet) {
      for (let j = 0; j < currentWord.length; j++) {
        for (let k = a; k <= z; k++) {
          const newWord = `${currentWord.slice(0, j)}${String.fromCharCode(k)}${currentWord.slice(j + 1)}`;
          if (wordSet.has(newWord)) {
            if (endSet.has(newWord)) {
              return level + 1;
            }

            if (!visitedSet.has(newWord)) {
              visitedSet.add(newWord);
              tmpSet.add(newWord);
            }
          }
        }
      }
    }

    startSet = tmpSet;
  }

  return 0;
}
