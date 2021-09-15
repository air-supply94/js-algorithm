function buildGraph(numCourses: number, prerequisites: number[][]): number[][] {
  const graph: number[][] = Array(numCourses).fill(null);
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < prerequisites.length; i++) {
    graph[prerequisites[i][1]].push(prerequisites[i][0]);
  }

  return graph;
}

// https://leetcode-cn.com/problems/course-schedule/
// 207
export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graphData: number[][] = buildGraph(numCourses, prerequisites);

  const visitedCache: boolean[] = Array(numCourses).fill(false);
  const pathTmp: boolean[] = Array(numCourses).fill(false);
  let hasCircle = false;

  for (let i = 0; i < numCourses; i++) {
    dfs(graphData, i, visitedCache, pathTmp);
  }

  function dfs(graph: number[][], currentNode: number, visited: boolean[], path: boolean[]): void {
    if (path[currentNode]) {
      hasCircle = true;
    }

    if (visited[currentNode] || hasCircle) {
      return;
    }

    path[currentNode] = true;
    visited[currentNode] = true;

    for (let i = 0; i < graph[currentNode].length; i++) {
      dfs(graph, graph[currentNode][i], visited, path);
    }

    path[currentNode] = false;
  }

  return !hasCircle;
}

// https://leetcode-cn.com/problems/course-schedule-ii/
// 210
export function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  if (!canFinish(numCourses, prerequisites)) {
    return [];
  }

  function dfs(graph: number[][], currentNode: number, visited: boolean[], path: number[]): void {
    if (visited[currentNode]) {
      return;
    }
    visited[currentNode] = true;

    for (let i = 0; i < graph[currentNode].length; i++) {
      dfs(graph, graph[currentNode][i], visited, path);
    }

    path.push(currentNode);
  }

  const graphData = buildGraph(numCourses, prerequisites);
  const visitedCache: boolean[] = Array(numCourses).fill(false);
  const pathTmp: number[] = [];

  for (let i = 0; i < numCourses; i++) {
    dfs(graphData, i, visitedCache, pathTmp);
  }

  return pathTmp.reverse();
}

// https://leetcode-cn.com/problems/course-schedule-ii/
// 210
export function findOrderBfs(numCourses: number, prerequisites: number[][]): number[] {
  const graph = buildGraph(numCourses, prerequisites);
  const inDegree: number[] = Array(numCourses).fill(0);
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++;
  }

  const result: number[] = [];
  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const currentNode = queue.shift();
    result.push(currentNode);

    for (let i = 0; i < graph[currentNode].length; i++) {
      inDegree[graph[currentNode][i]]--;
      if (inDegree[graph[currentNode][i]] === 0) {
        queue.push(graph[currentNode][i]);
      }
    }
  }

  if (result.length === numCourses) {
    return result;
  } else {
    return [];
  }
}

