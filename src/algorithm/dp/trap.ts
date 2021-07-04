// https://leetcode-cn.com/problems/trapping-rain-water/
// 42
export function trap(terraces: number[]): number {
  let amount = 0;
  const leftMax = Array(terraces.length)
    .fill(0);
  const rightMax = Array(terraces.length)
    .fill(0);

  let leftTmp = 0;
  for (let i = 0; i < terraces.length; i++) {
    leftMax[i] = Math.max(terraces[i], leftTmp);
    leftTmp = leftMax[i];
  }

  let rightTmp = 0;
  for (let i = terraces.length - 1; i >= 0; i--) {
    rightMax[i] = Math.max(terraces[i], rightTmp);
    rightTmp = rightMax[i];
  }

  for (let i = 0; i < terraces.length; i++) {
    const dx = Math.min(leftMax[i], rightMax[i]) - terraces[i];
    amount += dx > 0 ? dx : 0;
  }

  return amount;
}
