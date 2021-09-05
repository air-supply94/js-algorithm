// https://leetcode-cn.com/problems/gas-station/
// 134
export function canCompleteCircuit(gas: number[], cost: number[]): number {
  let sum = 0;
  let start = 0;
  let minValue = Infinity;

  for (let i = 0; i < gas.length; i++) {
    sum += gas[i] - cost[i];
    if (sum < minValue) {
      start = i + 1;
      minValue = sum;
    }
  }

  if (sum < 0) {
    return -1;
  } else {
    return start % gas.length;
  }
}
