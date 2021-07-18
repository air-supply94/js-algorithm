// https://www.nowcoder.com/questionTerminal/14c0359fb77a48319f0122ec175c9ada
export function eatGrape(a: number, b: number, c: number): number {
  const array = [
    a,
    b,
    c,
  ].sort();
  const sum = a + b + c;

  if (array[0] + array[1] > array[2]) {
    return Math.ceil(sum / 3);
  } else {
    if (2 * (array[0] + array[1]) < array[2]) {
      return Math.ceil(array[2] / 2);
    } else {
      return Math.ceil(sum / 3);
    }
  }
}
