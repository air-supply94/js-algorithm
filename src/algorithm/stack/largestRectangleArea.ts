// https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
export function largestRectangleArea(heights: number[]): number {
  const n = heights.length;
  let max = 0;
  const stack: number[] = [];

  for (let i = 0; i <= n; i++) {
    while (stack.length && (i === n || heights[i] < heights[stack[stack.length - 1]])) {
      const height = heights[stack.pop()];
      const width = stack.length ? i - 1 - stack[stack.length - 1] : i;
      max = Math.max(max, width * height);
    }

    stack.push(i);
  }

  return max;
}
