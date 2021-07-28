// https://leetcode-cn.com/problems/swap-numbers-lcci/
// 金典-16.01
export function swapNumbers(numbers: [number, number]): [number, number] {
  numbers[0] ^= numbers[1];
  numbers[1] ^= numbers[0];
  numbers[0] ^= numbers[1];
  return numbers;
}
