export function groupStr(array: string[]): string[][] {
  const result = [];
  const sortStr: { [key in string]: number } = Object.create(null);

  array.forEach((item) => {
    const str = item.split('')
      .sort()
      .join('');

    if (Object.hasOwnProperty.call(sortStr, str)) {
      result[sortStr[str]].push(item);
    } else {
      sortStr[str] = result.length;
      result.push([item]);
    }
  });

  return result;
}
