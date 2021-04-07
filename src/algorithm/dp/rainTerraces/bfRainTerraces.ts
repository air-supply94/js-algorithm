export function bfRainTerraces(terraces: number[]): number {
  let amount = 0;

  for (let i = 0; i < terraces.length; i++) {
    let leftMax = 0;
    for (let j = 0; j <= i; j++) {
      leftMax = Math.max(leftMax, terraces[j]);
    }

    let rightMax = 0;
    for (let j = i; j < terraces.length; j++) {
      rightMax = Math.max(rightMax, terraces[j]);
    }

    const dx = Math.min(leftMax, rightMax) - terraces[i];
    amount += dx > 0 ? dx : 0;
  }

  return amount;
}
