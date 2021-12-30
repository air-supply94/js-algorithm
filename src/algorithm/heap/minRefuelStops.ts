import { Heap } from '../../dataStructures/heap';

// https://leetcode-cn.com/problems/minimum-number-of-refueling-stops/
// 871
export function minRefuelStops(target: number, startFuel: number, stations: number[][]): number {
  let totalFuel = startFuel;
  let i = 0;
  let count = 0;
  const maxHeap = new Heap<number>((a, b) => a >= b);

  while (totalFuel < target) {
    while (i < stations.length && totalFuel >= stations[i][0]) {
      maxHeap.add(stations[i][1]);
      i++;
    }

    if (maxHeap.isEmpty()) {
      return -1;
    }

    totalFuel += maxHeap.poll();
    count++;
  }
  return count;
}
