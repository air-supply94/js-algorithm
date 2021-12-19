// https://leetcode-cn.com/problems/all-paths-from-source-to-target/
// 797
// graph-dfs
export function allPathsSourceTarget(graph: number[][]): number[][] {
  const result: number[][] = [];
  dfs(graph, 0, result, []);
  return result;
}

function dfs(graph: number[][], currentNode: number, result: number[][], path: number[]): void {
  path.push(currentNode);

  if (currentNode === graph.length - 1) {
    result.push(path.slice());
    path.pop();
    return;
  }

  for (let i = 0; i < graph[currentNode].length; i++) {
    dfs(graph, graph[currentNode][i], result, path);
  }

  path.pop();
}
