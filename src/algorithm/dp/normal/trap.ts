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

/*
export function trap(terraces: number[]): number {
  let result = 0;
  let left = 0;
  let right = terraces.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    leftMax = Math.max(leftMax, terraces[left]);
    rightMax = Math.max(rightMax, terraces[right]);

    if (leftMax < rightMax) {
      result += leftMax - terraces[left];
      left++;
    } else {
      result += rightMax - terraces[right];
      right--;
    }
  }

  return result;
}
*/

// https://leetcode.cn/problems/container-with-most-water/
// 11
export function maxArea(height: number[]): number {
  let result = 0;
  let left = 0;
  let right = height.length - 1;
  let area: number;

  while (left < right) {
    area = Math.min(height[left], height[right]) * (right - left);
    result = Math.max(result, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return result;
}
