// https://leetcode-cn.com/problems/all-paths-from-source-to-target/
// 797
export function allPathsSourceTarget(graph: number[][], currentNode = 0, result: number[][] = [], path: number[] = []): number[][] {
  if (currentNode === graph.length - 1) {
    result.push(path.concat(currentNode));
    return result;
  }

  path.push(currentNode);
  for (let i = 0; i < graph[currentNode].length; i++) {
    allPathsSourceTarget(graph, graph[currentNode][i], result, path);
  }
  path.pop();

  return result;
}
