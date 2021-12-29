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
