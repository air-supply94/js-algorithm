// https://leetcode-cn.com/problems/open-the-lock/
// 752
export function openLock(dead: string[], target: string): number {
  const startNode = '0000';
  const queue: string[] = [];
  const visited = new Set<string>();
  const deadSet = new Set<string>(dead);

  if (!deadSet.has(startNode)) {
    queue.push(startNode);
    visited.add(startNode);
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
        const bottom = `${head}${(Number(currentNode[j]) + 9) % 10}${tail}`;
        const tmpList = [
          up,
          bottom,
        ];

        for (let k = 0; k < tmpList.length; k++) {
          if (!deadSet.has(tmpList[k]) && !visited.has(tmpList[k])) {
            queue.push(tmpList[k]);
            visited.add(tmpList[k]);
          }
        }
      }
    }
  }

  return -1;
}

export function openLockDoubleBfs(dead: string[], target: string): number {
  const startNode = '0000';
  const visited = new Set<string>([
    startNode,
    target,
  ]);
  const deadSet = new Set<string>(dead);

  if (deadSet.has(startNode)) {
    return -1;
  }

  if (target === startNode) {
    return 0;
  }

  let startSet = new Set<string>([startNode]);
  let endSet = new Set<string>([target]);
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
      for (let i = 0; i < 4; i++) {
        const head = currentNode.slice(0, i);
        const tail = currentNode.slice(i + 1);
        const list = [
          `${head}${(Number(currentNode[i]) + 1) % 10}${tail}`,
          `${head}${(Number(currentNode[i]) + 9) % 10}${tail}`,
        ];

        for (let j = 0; j < list.length; j++) {
          const listNode = list[j];
          if (!deadSet.has(listNode)) {
            if (endSet.has(listNode)) {
              return level;
            }

            if (!visited.has(listNode)) {
              tmpSet.add(listNode);
              visited.add(listNode);
            }
          }
        }
      }
    }

    startSet = tmpSet;
  }

  return -1;
}
