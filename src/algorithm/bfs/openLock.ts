// https://leetcode-cn.com/problems/open-the-lock/
// 752
export function openLock(dead: string[], target: string): number {
  const startNode = '0000';
  const deadSet = new Set<string>(dead);
  if (deadSet.has(startNode)) {
    return -1;
  }

  if (target === startNode) {
    return 0;
  }

  // 固定模板开始
  const visited = new Set<string>([startNode, target]);
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
      for (const neighborNode of getChildren(currentNode)) {
        // 根据条件替换、删除
        if (deadSet.has(neighborNode)) {
          continue;
        }

        if (endSet.has(neighborNode)) {
          return level;
        }

        if (!visited.has(neighborNode)) {
          tmpSet.add(neighborNode);
          visited.add(neighborNode);
        }
      }
    }

    startSet = tmpSet;
  }

  return -1;
}

function getChildren(currentNode: string): string[] {
  const result: string[] = [];
  for (let i = 0; i < 4; i++) {
    const head = currentNode.slice(0, i);
    const tail = currentNode.slice(i + 1);
    result.push(`${head}${(Number(currentNode[i]) + 1) % 10}${tail}`);
    result.push(`${head}${(Number(currentNode[i]) - 1 + 10) % 10}${tail}`);
  }

  return result;
}
