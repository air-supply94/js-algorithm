import { hasCircle, topologicalSortingBfs, topologicalSortingDfs } from './utils';

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
  return !hasCircle(buildGraph(numCourses, prerequisites));
}

// https://leetcode-cn.com/problems/course-schedule-ii/
// 210
export function findOrderDfs(numCourses: number, prerequisites: number[][]): number[] {
  return topologicalSortingDfs(buildGraph(numCourses, prerequisites));
}

// https://leetcode-cn.com/problems/course-schedule-ii/
// 210
export function findOrderBfs(numCourses: number, prerequisites: number[][]): number[] {
  return topologicalSortingBfs(buildGraph(numCourses, prerequisites));
}

