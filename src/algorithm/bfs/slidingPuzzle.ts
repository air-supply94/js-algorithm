// https://leetcode-cn.com/problems/sliding-puzzle/
// 773
export function slidingPuzzle(board: number[][]): number {
  const h = board.length;
  const w = board[0].length;
  const visited = new Set<string>();

  let end = '0';
  for (let i = h * w - 1; i >= 1; i--) {
    end = `${i}${end}`;
  }

  const queue: Array<{ root: string; index: number; }> = [];
  const root = board.map((item) => item.join('')).join('');
  queue.push({
    root,
    index: root.indexOf('0'),
  });

  let level = 0;
  while (queue.length > 0) {
    level++;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const currentItem = queue.shift();
      if (currentItem.root === end) {
        return level - 1;
      }

      const currentNeighbor = getNeighborIndex(h, w, currentItem.index);
      for (let j = 0; j < currentNeighbor.length; j++) {
        const nextRootList = currentItem.root.split('');
        nextRootList.splice(currentItem.index, 1, currentItem.root[currentNeighbor[j]]);
        nextRootList.splice(currentNeighbor[j], 1, currentItem.root[currentItem.index]);
        const nextRoot = nextRootList.join('');

        if (!visited.has(nextRoot)) {
          visited.add(nextRoot);
          queue.push({
            root: nextRoot,
            index: currentNeighbor[j],
          });
        }
      }
    }
  }

  return -1;
}

function getNeighborIndex(h: number, w: number, i: number): number[] {
  const result: number[] = [];
  if (i >= w) {
    result.push(i - w);
  }

  if (i < (h - 1) * w) {
    result.push(i + w);
  }

  if (i % w > 0) {
    result.push(i - 1);
  }

  if (i % w < w - 1) {
    result.push(i + 1);
  }

  return result;
}
