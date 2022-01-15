import { Heap } from '../../dataStructures/heap';

// https://leetcode-cn.com/problems/maximum-number-of-eaten-apples/
// 1705
export function eatenApples(apples: number[], days: number[]): number {
  const minHeap = new Heap<[number, number]>((a, b) => a[0] <= b[0]);
  let result = 0;

  for (let i = 0; i < apples.length || !minHeap.isEmpty(); i++) {
    // 移除过期
    while (!minHeap.isEmpty() && (minHeap.peek()[0] <= i || minHeap.peek()[1] <= 0)) {
      minHeap.poll();
    }

    // 新增到储物空间
    if (i < apples.length && apples[i] > 0) {
      minHeap.add([
        i + days[i],
        apples[i],
      ]);
    }

    // 从储物空间拿出一个来吃
    if (!minHeap.isEmpty()) {
      result++;
      minHeap.peek()[1]--;
    }
  }
  return result;
}