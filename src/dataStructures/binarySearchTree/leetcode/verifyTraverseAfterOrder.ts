// 剑指 Offer
// https://www.nowcoder.com/practice/a861533d45854474ac791d90e447bafd
export function verifyTraverseAfterOrder(sequence: number[]): boolean {
  if (sequence.length <= 0) {
    return false;
  }

  return dfs(sequence, 0, sequence.length - 1);
}

function dfs(sequence: number[], left: number, right: number): boolean {
  if (left >= right) {
    return true;
  }

  const rootValue = sequence[right];
  let leftRight = right - 1;
  while (leftRight >= 0 && sequence[leftRight] > rootValue) {
    leftRight--;
  }

  for (let i = left; i <= leftRight; i++) {
    if (sequence[i] > rootValue) {
      return false;
    }
  }

  return dfs(sequence, left, leftRight) && dfs(sequence, leftRight + 1, right - 1);
}
