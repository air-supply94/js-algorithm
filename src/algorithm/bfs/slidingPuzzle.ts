// https://leetcode-cn.com/problems/sliding-puzzle/
// 773
export function slidingPuzzle(board: number[][]): number {
  const height = 2;
  const width = 3;
  const end = '123450';

  const visited = new Set<string>();
  const queue: [string, number][] = [];
  const startNode = board.map((item) => item.join('')).join('');
  visited.add(startNode);
  queue.push([startNode, startNode.indexOf('0')]);

  let level = 0;
  while (queue.length > 0) {
    level++;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const currentItem = queue.shift();
      if (currentItem[0] === end) {
        return level - 1;
      }

      for (const neighborNode of getChildren(height, width, currentItem)) {
        if (!visited.has(neighborNode[0])) {
          visited.add(neighborNode[0]);
          queue.push(neighborNode);
        }
      }
    }
  }

  return -1;
}

function getChildren(height: number, width: number, currentNode: [string, number]): [string, number][] {
  const neighborIndex: number[] = [];
  const oldString = currentNode[0];
  const oldZeroPosition = currentNode[1];

  if (oldZeroPosition >= width) {
    neighborIndex.push(oldZeroPosition - width);
  }

  if (oldZeroPosition < (height - 1) * width) {
    neighborIndex.push(oldZeroPosition + width);
  }

  if (oldZeroPosition % width > 0) {
    neighborIndex.push(oldZeroPosition - 1);
  }

  if (oldZeroPosition % width < width - 1) {
    neighborIndex.push(oldZeroPosition + 1);
  }

  return neighborIndex.map((item) => {
    const newString = oldString.replace('0', 'a').replace(oldString[item], '0').replace('a', oldString[item]);

    return [newString, item];
  });
}
