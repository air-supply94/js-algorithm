import { findFirstLarge } from '../../search/binarySearch/findFirstLarge';

// https://leetcode-cn.com/problems/is-subsequence/
// 392
export function isSubsequence(t: string, s: string): boolean {
  let i = 0;
  let j = 0;

  while (i < t.length && j < s.length) {
    if (t[i] === s[j]) {
      i++;
    }
    j++;
  }

  return i === t.length;
}

// https://leetcode-cn.com/problems/is-subsequence/
// 392
export function isSubsequenceBs(t: string, s: string): boolean {
  const cache = new Map<string, number[]>();
  for (let i = 0; i < s.length; i++) {
    if (cache.has(s[i])) {
      cache.get(s[i])
        .push(i);
    } else {
      cache.set(s[i], [i]);
    }
  }

  let pre = -1;
  for (let i = 0; i < t.length; i++) {
    const positions = cache.get(t[i]);
    if (!positions) {
      return false;
    }

    const newIndex = findFirstLarge(positions, pre);
    if (newIndex === -1) {
      return false;
    }
    pre = positions[newIndex];
  }

  return true;
}
