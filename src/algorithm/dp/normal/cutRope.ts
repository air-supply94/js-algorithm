// 剑指offer 14
export function cutRope(target: number): number {
  if (target <= 3) {
    return target - 1;
  }

  const dp: number[] = Array(target + 1)
    .fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;
  dp[4] = 4;

  for (let i = 5; i <= target; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[j] * dp[i - j]);
    }
  }

  return dp[target];
}

/*
function cutRope(target: number): number {
  if (target <= 3) {
    return target - 1;
  }

  let result = 1;
  while (target > 4) {
    target -= 3;
    result *= 3;
  }

  return result * target;
}
*/
