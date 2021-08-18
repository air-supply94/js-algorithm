// https://leetcode-cn.com/problems/sliding-puzzle/
// 773
export function slidingPuzzle(board: number[][]): number {
  const h = board.length;
  const w = board[0].length;
  const neighbor = getNeighborIndex(h, w);
  const visited = new Map<string, boolean>();

  let end = '0';
  for (let i = h * w - 1; i >= 1; i--) {
    end = `${i}${end}`;
  }

  const queue: Array<{ root: number[]; index: number; }> = [];
  const root: number[] = [];
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      root.push(board[i][j]);
    }
  }
  const index = root.indexOf(0);
  queue.push({
    root,
    index,
  });

  let level = 0;
  while (queue.length) {
    level++;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const currentItem = queue.shift();
      if (currentItem.root.join('') === end) {
        return level - 1;
      }

      const currentNeighbor = neighbor[currentItem.index];
      for (let j = 0; j < currentNeighbor.length; j++) {
        swap(currentItem.root, currentItem.index, currentNeighbor[j]);
        if (!visited.has(currentItem.root.join(''))) {
          visited.set(currentItem.root.join(''), true);
          queue.push({
            root: currentItem.root.slice(),
            index: currentNeighbor[j],
          });
        }
        swap(currentItem.root, currentItem.index, currentNeighbor[j]);
      }
    }
  }

  return -1;
}

function getNeighborIndex(h: number, w: number): number[][] {
  const result: number[][] = [];
  for (let i = 0; i < h * w; i++) {
    const tmp: number[] = [];
    if (i >= w) {
      tmp.push(i - w);
    }

    if (i < (h - 1) * w) {
      tmp.push(i + w);
    }

    if (i % w > 0) {
      tmp.push(i - 1);
    }

    if (i % w < w - 1) {
      tmp.push(i + 1);
    }

    result.push(tmp);
  }

  return result;
}

function swap(data: unknown[], first: number, second: number): void {
  const t = data[first];
  data[first] = data[second];
  data[second] = t;
}
