export function btSubSet<T = unknown>(originalSet: T[]): T[][] {
  let result = [[]];
  for (const item of originalSet) {
    const tempResult = [];
    for (const key of result) {
      tempResult.push(key.concat(item));
    }
    result = result.concat(tempResult);
  }
  return result;
}
