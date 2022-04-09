// https://leetcode-cn.com/problems/word-ladder/
// 127
export function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  if (!wordList.includes(endWord)) {
    return 0;
  }

  const {
    beginIndex,
    endIndex,
    graph,
  } = buildGraph(beginWord, endWord, wordList);
  const queue: number[] = [];
  let level = 0;
  const visited = Array(graph.length)
    .fill(0);
  queue.push(beginIndex);
  visited[beginIndex] = 1;

  while (queue.length) {
    level++;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const currentItem = queue.shift();
      if (currentItem === endIndex) {
        return level;
      }

      const children = graph[currentItem];
      for (let j = 0; j < children.length; j++) {
        if (visited[children[j]] === 0) {
          visited[children[j]] = 1;
          queue.push(children[j]);
        }
      }
    }
  }

  return 0;
}

function buildGraph(beginWord: string, endWord: string, wordList: string[]): { graph: number[][]; beginIndex: number; endIndex: number; } {
  let id = 0;
  const wordMap = new Map<string, number>();
  const newWordList = Array.from(new Set([beginWord].concat(wordList)));
  for (let i = 0; i < newWordList.length; i++) {
    wordMap.set(newWordList[i], id);
    id++;
  }

  const graph: number[][] = Array(id)
    .fill(null);
  for (let i = 0; i < id; i++) {
    graph[i] = [];
  }

  const a = 'a'.charCodeAt(0);
  const z = 'z'.charCodeAt(0);

  for (let i = 0; i < newWordList.length; i++) {
    const currentWord = newWordList[i];
    for (let j = 0; j < currentWord.length; j++) {
      for (let k = a; k <= z; k++) {
        const newWord = `${currentWord.slice(0, j)}${String.fromCharCode(k)}${currentWord.slice(j + 1)}`;
        if (newWord !== currentWord && wordMap.has(newWord)) {
          graph[wordMap.get(currentWord)].push(wordMap.get(newWord));
        }
      }
    }
  }

  return {
    graph,
    beginIndex: 0,
    endIndex: wordMap.get(endWord),
  };
}

// https://leetcode-cn.com/problems/word-ladder/
// 127
export function ladderLengthDoubleBfs(beginWord: string, endWord: string, wordList: string[]): number {
  const wordSet = new Set<string>();
  const visitedSet = new Set<string>();
  for (let i = 0; i < wordList.length; i++) {
    wordSet.add(wordList[i]);
  }
  if (!wordSet.has(endWord)) {
    return 0;
  }

  let startSet = new Set<string>();
  let endSet = new Set<string>();
  startSet.add(beginWord);
  endSet.add(endWord);
  visitedSet.add(beginWord);
  visitedSet.add(endWord);

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
