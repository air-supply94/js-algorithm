import { Heap } from '../heap';

// https://leetcode-cn.com/problems/maximum-number-of-eaten-apples/
// 1705
export function eatenApples(apples: number[], days: number[]): number {
  const minHeap = new Heap<[number, number]>((a, b) => a[0] <= b[0]);
  let result = 0;
  let day = 0;

  while (day < apples.length || !minHeap.isEmpty()) {
    // 移除过期
    while (!minHeap.isEmpty() && (minHeap.peek()[0] <= day || minHeap.peek()[1] <= 0)) {
      minHeap.poll();
    }

    // 新增到储物空间
    if (day < apples.length && apples[day] > 0) {
      minHeap.add([day + days[day], apples[day]]);
    }

    // 从储物空间拿出一个来吃
    if (!minHeap.isEmpty()) {
      result++;
      minHeap.peek()[1]--;
    }

    day++;
  }

  return result;
}
