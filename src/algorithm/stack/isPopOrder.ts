// 剑指offer
// https://www.nowcoder.com/practice/d77d11405cc7470d82554cb392585106
export function IsPopOrder(pushValue: number[], popValue: number[]): boolean {
  const stack: number[] = [];
  const n = pushValue.length;
  let pushIndex = 0;

  for (let popIndex = 0; popIndex < n; popIndex++) {
    while (pushIndex < n && (stack.length === 0 || stack[stack.length - 1] !== popValue[popIndex])) {
      stack.push(pushValue[pushIndex]);
      pushIndex++;
    }

    if (stack[stack.length - 1] === popValue[popIndex]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return true;
}
