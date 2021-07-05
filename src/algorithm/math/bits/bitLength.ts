export function bitLength(x: number): number {
  let bitsCounter = 0;

  while ((1 << bitsCounter) <= x) {
    bitsCounter++;
  }

  return bitsCounter;
}
