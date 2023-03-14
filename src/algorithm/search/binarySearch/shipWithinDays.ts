// https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/
// 1011
// https://leetcode-cn.com/problems/split-array-largest-sum/
// 410
export function shipWithinDays(weights: number[], day: number): number {
  let right = weights.reduce((prev, current) => current + prev, 0);
  let left = Math.max.apply(null, weights);

  while (left <= right) {
    const middle = (left + right) >>> 1;
    if (getCostDay(weights, middle) <= day) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return left;
}

function getCostDay(weights: number[], capacity: number): number {
  let costDay = 1;
  let restCapacity = capacity - weights[0];

  for (let i = 1; i < weights.length; i++) {
    if (restCapacity >= weights[i]) {
      restCapacity -= weights[i];
    } else {
      restCapacity = capacity - weights[i];
      costDay++;
    }
  }

  return costDay;
}
