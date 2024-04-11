// 剑指offer
// https://www.nowcoder.com/practice/8fecd3f8ba334add803bf2a06af1b993
export function printMinNumber(numbers: number[]): string {
  numbers.sort((a, b) => {
    const str1 = `${a}`;
    const str2 = `${b}`;
    const len = Math.max(str1.length, str2.length);

    for (let i = 0; i < len; i++) {
      const item1 = i >= str1.length ? str1[0] : str1[i];
      const item2 = i >= str2.length ? str2[0] : str2[i];
      if (item1 < item2) {
        return -1;
      } else if (item1 > item2) {
        return 1;
      }
    }

    return 0;
  });

  return numbers.join('');
}
