// https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/
// 1011
// https://leetcode-cn.com/problems/split-array-largest-sum/
// 410
export function shipWithinDays(weights: number[], day: number): number {
  let right = weights.reduce((prev, current) => current + prev, 0);
  let left = Math.max.apply(null, weights);

  while (left <= right) {
    const middle = (left + right) >>> 1;
    if (costDay(weights, middle) <= day) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return left;
}

function costDay(weights: number[], capacity: number): number {
  let cost = 0;
  let tmpCapacity = capacity;

  for (let i = 0; i < weights.length; i++) {
    if (i === 0) {
      cost++;
    }

    if (tmpCapacity >= weights[i]) {
      tmpCapacity -= weights[i];
    } else {
      tmpCapacity = capacity - weights[i];
      cost++;
    }
  }

  return cost;
}
