// https://leetcode.cn/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-100-liked
// 49
// top100
export function groupAnagrams(strs: string[]): string[][] {
  const result: Record<string, string[]> = {};
  const aCharCode = 'a'.charCodeAt(0);
  const position: number[] = Array(26);

  for (const str of strs) {
    position.fill(0);
    for (let j = 0; j < str.length; j++) {
      position[str.charCodeAt(j) - aCharCode]++;
    }
    const positionStr = position.join();
    if (result[positionStr]) {
      result[positionStr].push(str);
    } else {
      result[positionStr] = [str];
    }
  }

  return Object.values(result);
}
