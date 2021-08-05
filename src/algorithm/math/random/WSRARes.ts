import { Heap } from '../../../dataStructures/heap';

interface Item {
  score: number;
  value: number;
}

export function WSRARes(nums: number[], count: number): number[] {
  const minHeap = new Heap<Item>((a: Item, b: Item) => {
    return a.score < b.score;
  });

  for (let i = 0; i < count; i++) {
    minHeap.add({
      score: getSampleScore(nums[i]),
      value: nums[i],
    });
  }

  for (let i = count; i < nums.length; i++) {
    const sampleScore = getSampleScore(nums[i]);
    if (sampleScore > minHeap.peek().score) {
      minHeap.poll();
      minHeap.add({
        score: sampleScore,
        value: nums[i],
      });
    }
  }

  return minHeap.heapContainer.map((item) => item.value);
}

function getSampleScore(weight: number): number {
  return Math.pow(Math.random(), 1 / weight);
}
