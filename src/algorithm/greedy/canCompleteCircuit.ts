// https://leetcode-cn.com/problems/gas-station/
// 134
export function canCompleteCircuit(gas: number[], cost: number[]): number {
  let sum = 0;
  let start = 0;
  let minValue = 0;

  for (let i = 0; i < gas.length; i++) {
    sum += gas[i] - cost[i];
    if (sum < minValue) {
      start = i + 1;
      minValue = sum;
    }
  }

  return sum < 0 ? -1 : start % gas.length;
}
