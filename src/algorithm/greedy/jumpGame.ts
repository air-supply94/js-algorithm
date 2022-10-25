// https://leetcode-cn.com/problems/jump-game/
// 55
export function canJump(numbers: number[]): boolean {
  let maxDistance = 0;

  for (let i = 0; i < numbers.length - 1; i++) {
    maxDistance = Math.max(maxDistance, i + numbers[i]);
    if (maxDistance <= i) {
      return false;
    }
  }

  return maxDistance >= numbers.length - 1;
}

// https://leetcode-cn.com/problems/jump-game-ii/
// 45
export function jump(numbers: number[]): number {
  let end = 0;
  let maxDistance = 0;
  let count = 0;

  for (let i = 0; i < numbers.length - 1; i++) {
    maxDistance = Math.max(maxDistance, i + numbers[i]);
    if (i === end) {
      count++;
      end = maxDistance;
    }
  }

  return count;
}

// https://leetcode.cn/problems/partition-labels/description/
// 763
export function partitionLabels(s: string): number[] {
  const a = 'a'.charCodeAt(0);
  const z = 'z'.charCodeAt(0);
  const distanceMap: number[] = Array(z - a + 1).fill(null);

  for (let i = 0; i < s.length; i++) {
    distanceMap[s.charCodeAt(i) - a] = i;
  }

  const result: number[] = [];
  let maxDistance = 0;

  // 开区间
  let start = -1;
  for (let i = 0; i < s.length; i++) {
    maxDistance = Math.max(maxDistance, distanceMap[s.charCodeAt(i) - a]);
    if (maxDistance === i) {
      result.push(maxDistance - start);
      start = i;
    }
  }
  return result;
}
