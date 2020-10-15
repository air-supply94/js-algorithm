function recursion(allResult: number[][], restArr: number[], tempArray: number[]): number[][] {
  restArr.forEach((item) => {
    const nextTempResult = tempArray.concat(item);
    if (restArr.length > 1) {
      recursion(allResult, restArr.filter((val) => val !== item), nextTempResult);
    } else {
      allResult.push(nextTempResult);
    }
  });
  return allResult;
}

export function permutation(nums: number[]): number[][] {
  return recursion([], nums, []);
}
