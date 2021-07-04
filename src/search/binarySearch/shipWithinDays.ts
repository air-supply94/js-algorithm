// https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/
// 1011
export function shipWithinDays(weights: number[], day: number): number {
  let right = weights.reduce((prev, current) => current + prev, 0);
  let left = Math.max.apply(null, weights);

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    if (canFinish(weights, middle, day)) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return left;
}

function canFinish(weights: number[], capacity: number, day: number): boolean {
  let cost = 0;
  let tmpCapacity = capacity;

  for (let i = 0; i < weights.length; i++) {
    if (tmpCapacity >= weights[i]) {
      tmpCapacity -= weights[i];
    } else {
      tmpCapacity = capacity - weights[i];
      cost++;
    }

    if (i === weights.length - 1) {
      cost++;
    }
  }

  return cost <= day;
}
