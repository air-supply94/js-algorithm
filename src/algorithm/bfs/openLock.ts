// https://leetcode-cn.com/problems/open-the-lock/
// 752
export function openLock(dead: string[], target: string): number {
  const queue: string[] = [];
  const visited = new Map<string, boolean>();
  const deadMap = new Map<string, boolean>();

  for (let i = 0; i < dead.length; i++) {
    deadMap.set(dead[i], true);
  }

  if (!deadMap.has('0000')) {
    queue.push('0000');
    visited.set('0000', true);
  }

  let level = 0;
  while (queue.length) {
    level++;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const currentNode = queue.shift();
      if (currentNode === target) {
        return level - 1;
      }

      for (let j = 0; j < 4; j++) {
        const head = currentNode.slice(0, j);
        const tail = currentNode.slice(j + 1);

        const up = `${head}${(Number(currentNode[j]) + 1) % 10}${tail}`;
        if (!deadMap.has(up) && !visited.has(up)) {
          queue.push(up);
          visited.set(up, true);
        }

        const bottom = `${head}${(Number(currentNode[j]) + 9) % 10}${tail}`;
        if (!deadMap.has(bottom) && !visited.has(bottom)) {
          queue.push(bottom);
          visited.set(bottom, true);
        }
      }
    }
  }

  return -1;
}
