export function fastPowering(base: number, power: number): number {
  if (power === 0) {
    return 1;
  } else if (power === 1) {
    return base;
  } else if (power === -1) {
    return 1 / base;
  } else if (power % 2 === 0) {
    const multiplier = fastPowering(base, power / 2);
    return multiplier * multiplier;
  } else {
    const multiplier = fastPowering(base, Math.floor(power / 2));
    return multiplier * multiplier * base;
  }
}
