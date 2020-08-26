export function bitLength(x: number): number {
  let bitsCounter = 0;

  while ((1 << bitsCounter) <= x) {
    bitsCounter += 1;
  }

  return bitsCounter;
}
