export function primalityTest(x: number): boolean {
  if (x <= 1) {
    return false;
  }

  if (x <= 3) {
    return true;
  }

  if (x % 2 === 0) {
    return false;
  }

  const dividerLimit = Math.sqrt(x);
  for (let divider = 3; divider <= dividerLimit; divider += 2) {
    if (x % divider === 0) {
      return false;
    }
  }

  return true;
}
