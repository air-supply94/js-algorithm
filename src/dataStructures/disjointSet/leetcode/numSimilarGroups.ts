import { DisjointSet } from '../disjointSet';

// https://leetcode-cn.com/problems/similar-string-groups/
// 839
export function numSimilarGroups(list: string[]): number {
  const disjointSet = new DisjointSet<string>();
  for (let i = 0; i < list.length; i++) {
    disjointSet.makeSet(list[i]);
  }

  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (check(list[i], list[j])) {
        disjointSet.union(list[i], list[j]);
      }
    }
  }

  let count = 0;
  for (const item of disjointSet.items.values()) {
    if (item.isRoot()) {
      count++;
    }
  }
  return count;
}

function check(s1: string, s2: string): boolean {
  let notMatchCount = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      notMatchCount++;
    }
  }

  return notMatchCount === 0 || notMatchCount === 2;
}
