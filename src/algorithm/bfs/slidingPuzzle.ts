import { Queue } from '../../dataStructures/queue';
import { swap } from '../../utils';

export function slidingPuzzle(board: number[][]): number {
  const h = board.length;
  const w = board[0].length;
  const neighbor = getNeighborIndex(h, w);

  let end = '0';
  for (let i = h * w - 1; i >= 1; i--) {
    end = `${i}${end}`;
  }

  const root: number[] = [];
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      root.push(board[i][j]);
    }
  }
  const index = root.indexOf(0);

  const queue = new Queue<{ root: number[]; index: number; }>();
  const enqueueMap = new Map<string, boolean>();

  queue.enqueue({
    root,
    index,
  });
  enqueueMap.set(root.join(','), true);

  let level = 0;

  while (!queue.isEmpty()) {
    level++;
    const size = queue.size;

    for (let i = 0; i < size; i++) {
      const currentNode = queue.dequeue();
      if (currentNode.root.join('') === end) {
        return level - 1;
      }

      neighbor[currentNode.index].forEach((index) => {
        swap(currentNode.root, currentNode.index, index);
        const tmpNode = currentNode.root.slice();
        if (!enqueueMap.has(tmpNode.join(','))) {
          queue.enqueue({
            root: tmpNode,
            index,
          });
          enqueueMap.set(tmpNode.join(','), true);
        }
        swap(currentNode.root, currentNode.index, index);
      });
    }
  }

  return -1;
}

function getNeighborIndex(h: number, w: number): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < h * w; i++) {
    const tmp = [];
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
