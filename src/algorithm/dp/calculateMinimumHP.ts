// https://leetcode-cn.com/problems/dungeon-game/
// 174
export function calculateMinimumHP(dungeon: number[][]): number {
  const height = dungeon.length;
  const width = dungeon[0].length;
  const cache: number[][] = Array(height)
    .fill(null)
    .map(() => Array(width).fill(null));

  return recursion(dungeon, 0, 0, height, width, cache);
}

function recursion(
  dungeon: number[][],
  h: number,
  w: number,
  height: number,
  width: number,
  cache: number[][],
): number {
  if (h === height - 1 && w === width - 1) {
    return dungeon[h][w] >= 0 ? 1 : -dungeon[h][w] + 1;
  }

  if (h === height || w === width) {
    return Number.POSITIVE_INFINITY;
  }

  if (cache[h][w] !== null) {
    return cache[h][w];
  }

  const totalCost =
    Math.min(recursion(dungeon, h, w + 1, height, width, cache), recursion(dungeon, h + 1, w, height, width, cache)) -
    dungeon[h][w];
  cache[h][w] = totalCost <= 0 ? 1 : totalCost;
  return cache[h][w];
}

export function calculateMinimumHPDp(dungeon: number[][]): number {
  const height = dungeon.length;
  const width = dungeon[0].length;
  const dp = Array(width + 1).fill(Number.POSITIVE_INFINITY);

  for (let i = height - 1; i >= 0; i--) {
    for (let j = width - 1; j >= 0; j--) {
      if (i === height - 1 && j === width - 1) {
        dp[j] = dungeon[i][j] >= 0 ? 1 : -dungeon[i][j] + 1;
      } else {
        const res = Math.min(dp[j + 1], dp[j]) - dungeon[i][j];
        dp[j] = res <= 0 ? 1 : res;
      }
    }
  }

  return dp[0];
}
