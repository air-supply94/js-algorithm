import { MinHeap } from '../../../dataStructures/heap';

interface Item {
  weight: number;
  value: number;
}

export function WSRARes(nums: number[], count: number): number[] {
  const minHeap = new MinHeap<Item>((a: Item, b: Item) => {
    if (a.weight < b.weight) {
      return -1;
    } else if (a.weight === b.weight) {
      return 0;
    } else {
      return 1;
    }
  });

  for (let i = 0; i < count; i++) {
    minHeap.add({
      weight: getSampleScore(nums[i]),
      value: nums[i],
    });
  }

  for (let i = count; i < nums.length; i++) {
    const sampleScore = getSampleScore(nums[i]);
    if (!minHeap.isEmpty() && sampleScore > minHeap.peek().weight) {
      minHeap.add({
        weight: sampleScore,
        value: nums[i],
      });
    }
  }

  return minHeap.heapContainer.map((item) => item.value);
}

function getSampleScore(weight: number): number {
  return Math.pow(Math.random(), 1 / weight);
}
