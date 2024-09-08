// https://leetcode-cn.com/problems/trapping-rain-water/
// 42
// 单一柱子角度
// top100
export function trap1(height: number[]): number {
  let result = 0;
  const leftMax: number[] = Array(height.length).fill(null);
  const rightMax: number[] = Array(height.length).fill(null);
  let leftTmp = Number.NEGATIVE_INFINITY;
  let rightTmp = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < height.length; i++) {
    leftTmp = Math.max(leftTmp, height[i]);
    leftMax[i] = leftTmp;

    rightTmp = Math.max(rightTmp, height[height.length - 1 - i]);
    rightMax[height.length - 1 - i] = rightTmp;
  }

  for (let i = 0; i < height.length; i++) {
    const h = Math.min(leftMax[i], rightMax[i]);
    result += h > height[i] ? h - height[i] : 0;
  }
  return result;
}

// 单一柱子角度
// 单个柱子接水量 = 左右柱子最大高度的最小值 - 柱子高度

export function trap2(height: number[]): number {
  let result = 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (left <= right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    // leftMax < rightMax时,当前柱子的接水量取决2者最小值leftMax,rightMax不需要精确。反之同理
    if (leftMax < rightMax) {
      result += leftMax - height[left];
      left++;
    } else {
      result += rightMax - height[right];
      right--;
    }
  }
  return result;
}

// https://leetcode.cn/problems/container-with-most-water/
// 11
// 单一柱子角度
// top100
export function maxArea(height: number[]): number {
  let result = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    result = Math.max(result, Math.min(height[left], height[right]) * (right - left));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return result;
}
