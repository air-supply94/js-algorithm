// https://leetcode-cn.com/problems/koko-eating-bananas/
// 875
export function minEatingSpeed(piles: number[], h: number): number {
  let right = Math.max.apply(null, piles);
  let left = 1;

  while (left <= right) {
    const middle = (left + right) >>> 1;
    if (getCost(piles, middle) > h) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;
}

function getCost(piles: number[], speed: number): number {
  let cost = 0;
  for (let i = 0; i < piles.length; i++) {
    cost += Math.ceil(piles[i] / speed);
  }
  return cost;
}
