// 剑指 Offer
// https://www.nowcoder.com/practice/a861533d45854474ac791d90e447bafd

export function VerifySquenceOfBST(sequence: number[], left = 0, right = sequence.length - 1): boolean {
  if (sequence.length <= 0) {
    return false;
  }

  if (left >= right) {
    return true;
  }

  const rootValue = sequence[right];
  let leftRight = right - 1;
  while (leftRight >= left && sequence[leftRight] > rootValue) {
    leftRight--;
  }

  for (let i = left; i <= leftRight; i++) {
    if (sequence[i] > rootValue) {
      return false;
    }
  }

  return VerifySquenceOfBST(sequence, left, leftRight) && VerifySquenceOfBST(sequence, leftRight + 1, right - 1);
}
