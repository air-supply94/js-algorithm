// https://leetcode-cn.com/problems/word-ladder/
// 127
export function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const wordSet = new Set<string>(wordList);
  if (!wordSet.has(endWord)) {
    return 0;
  }

  // 固定模板开始
  const visitedSet = new Set<string>([
    beginWord,
    endWord,
  ]);
  let startSet = new Set<string>([beginWord]);
  let endSet = new Set<string>([endWord]);
  let level = 0;

  while (startSet.size > 0 && endSet.size > 0) {
    level++;
    if (startSet.size > endSet.size) {
      const tmp = startSet;
      startSet = endSet;
      endSet = tmp;
    }

    const tmpSet = new Set<string>();
    for (const currentNode of startSet) {
      for (const childNode of getChildren(currentNode)) {
        // 根据条件替换、删除
        if (!wordSet.has(childNode)) {
          continue;
        }

        if (endSet.has(childNode)) {
          return level + 1;
        }

        if (!visitedSet.has(childNode)) {
          visitedSet.add(childNode);
          tmpSet.add(childNode);
        }
      }
    }

    startSet = tmpSet;
  }

  return 0;
}

function getChildren(currentNode: string): string[] {
  const result: string[] = [];
  const a = 'a'.charCodeAt(0);
  const z = 'z'.charCodeAt(0);

  for (let j = 0; j < currentNode.length; j++) {
    for (let k = a; k <= z; k++) {
      result.push(`${currentNode.slice(0, j)}${String.fromCharCode(k)}${currentNode.slice(j + 1)}`);
    }
  }

  return result;
}
