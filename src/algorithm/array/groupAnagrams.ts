// https://leetcode.cn/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-100-liked
// 49
// top100
export function groupAnagrams(strs: string[]): string[][] {
  const result: Record<string, string[]> = {};

  for (const str of strs) {
    const positionStr = str.split('').sort()
      .join('');
    if (result[positionStr]) {
      result[positionStr].push(str);
    } else {
      result[positionStr] = [str];
    }
  }

  return Object.values(result);
}
