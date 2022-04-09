// https://leetcode-cn.com/problems/open-the-lock/
// 752
export function openLock(dead: string[], target: string): number {
  const queue: string[] = [];
  const visited = new Set<string>();
  const deadMap = new Set<string>();

  for (let i = 0; i < dead.length; i++) {
    deadMap.add(dead[i]);
  }

  if (deadMap.has('0000') === false) {
    queue.push('0000');
    visited.add('0000');
  }

  let level = 0;
  while (queue.length > 0) {
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
        if (deadMap.has(up) === false && visited.has(up) === false) {
          queue.push(up);
          visited.add(up);
        }

        const bottom = `${head}${(Number(currentNode[j]) + 9) % 10}${tail}`;
        if (deadMap.has(bottom) === false && visited.has(bottom) === false) {
          queue.push(bottom);
          visited.add(bottom);
        }
      }
    }
  }

  return -1;
}
