import { Heap } from '../heap';

export function eatenApples(apples: number[], days: number[]): number {
  const minHeap = new Heap<[number, number]>((a, b) => a[0] <= b[0]);
  let result = 0;

  // 注意到达n天过后，minHeap不为空也可以吃
  for (let i = 0; i < apples.length || !minHeap.isEmpty(); i++) {
    // 移除过期
    while (!minHeap.isEmpty() && minHeap.peek()[0] <= i) {
      minHeap.poll();
    }

    // 新增到储物空间---注意判断i是否已经新增
    if (i < apples.length && apples[i] > 0) {
      minHeap.add([
        i + days[i],
        apples[i],
      ]);
    }

    // 从储物空间拿出一个来吃
    if (!minHeap.isEmpty() && minHeap.peek()[1] > 0) {
      result++;
      minHeap.peek()[1]--;
      if (minHeap.peek()[1] === 0) {
        minHeap.poll();
      }
    }
  }
  return result;
}
