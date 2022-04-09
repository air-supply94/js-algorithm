// https://leetcode-cn.com/problems/all-paths-from-source-to-target/
// 797
// graph-dfs
export function allPathsSourceTarget(graph: number[][]): number[][] {
  return dfs(graph, 0, [], []);
}

function dfs(graph: number[][], currentNode: number, result: number[][], path: number[]): number[][] {
  if (currentNode === graph.length - 1) {
    result.push(path.concat(currentNode));
    return result;
  }

  path.push(currentNode);
  for (let i = 0; i < graph[currentNode].length; i++) {
    dfs(graph, graph[currentNode][i], result, path);
  }
  path.pop();

  return result;
}
