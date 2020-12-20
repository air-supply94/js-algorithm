export function rubberHouse(nums: number[]): number {
  if (nums.length < 1) {
    return 0;
  }

  if (nums.length < 3) {
    return Math.max.apply(null, nums);
  }

  let last = nums[0];
  let current = Math.max(last, nums[1]);
  for (let i = 2; i < nums.length; i++) {
    const tmp = Math.max(last + nums[i], current);
    last = current;
    current = tmp;
  }

  return current;
}
