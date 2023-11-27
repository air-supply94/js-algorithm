// https://leetcode-cn.com/problems/trapping-rain-water/
// 42
// 单一柱子角度
// top100
export function trap1(height: number[]): number {
  let result = 0;
  const leftMax = Array(height.length).fill(null);
  const rightMax = Array(height.length).fill(null);
  let leftTmp = -Infinity;
  let rightTmp = -Infinity;

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
export function trap2(height: number[]): number {
  let result = 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (left <= right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

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

// 区域角度
export function trap3(height: number[]): number {
  let result = 0;
  const stack: number[] = [];
  for (let i = 0; i < height.length; ++i) {
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      const topIndex = stack.pop();

      if (stack.length > 0) {
        const left = stack[stack.length - 1];
        const currWidth = i - left - 1;
        const currHeight = Math.min(height[left], height[i]) - height[topIndex];
        result += currWidth * currHeight;
      }
    }
    stack.push(i);
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
