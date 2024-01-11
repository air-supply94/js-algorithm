// https://leetcode-cn.com/problems/next-greater-element-i/
// 496
export function nextGreaterElement(num1: number[], num2: number[]): number[] {
  const stack: number[] = [];
  const hashMap = new Map<number, number>();

  for (let i = num2.length - 1; i >= 0; i--) {
    while (stack.length && num2[i] >= stack[stack.length - 1]) {
      stack.pop();
    }

    hashMap.set(num2[i], stack.length ? stack[stack.length - 1] : -1);
    stack.push(num2[i]);
  }

  const result: number[] = Array(num1.length).fill(null);
  for (let i = 0; i < num1.length; i++) {
    result[i] = hashMap.get(num1[i]);
  }
  return result;
}

// https://leetcode-cn.com/problems/next-greater-element-ii/submissions/
// 503
export function nextGreaterElements(num: number[]): number[] {
  const stack: number[] = [];
  const len = num.length;
  const result: number[] = Array(num.length)
    .fill(null);

  for (let i = 2 * len - 1; i >= 0; i--) {
    while (stack.length && num[i % len] >= stack[stack.length - 1]) {
      stack.pop();
    }

    result[i % len] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(num[i % len]);
  }

  return result;
}

// https://leetcode.cn/problems/daily-temperatures/description/?envType=study-plan-v2&envId=top-100-liked
// 739
// top100
export function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [];
  const result: number[] = [];

  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
      stack.pop();
    }

    result[i] = stack.length ? stack[stack.length - 1] - i : 0;
    stack.push(i);
  }

  return result;
}

// https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
// 84
// top100
export function largestRectangleArea(heights: number[]): number {
  heights.push(0);
  let max = 0;
  const stack: number[] = [];

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()];
      const width = stack.length ? i - 1 - (stack[stack.length - 1] + 1) + 1 : i;
      max = Math.max(max, width * height);
    }

    stack.push(i);
  }

  heights.pop();
  return max;
}

// https://leetcode-cn.com/problems/remove-duplicate-letters/
// 316
export function removeDuplicateLetters(s: string): string {
  const countMap = new Map<string, number>();
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    countMap.set(s[i], (countMap.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    countMap.set(item, countMap.get(item) - 1);

    if (!stack.includes(item)) {
      while (stack.length > 0 && s.charCodeAt(i) <= stack[stack.length - 1].charCodeAt(0) && countMap.get(stack[stack.length - 1]) > 0) {
        stack.pop();
      }

      stack.push(item);
    }
  }

  return stack.join('');
}
