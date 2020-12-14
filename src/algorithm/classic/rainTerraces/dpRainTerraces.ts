export function dpRainTerraces(terraces: number[]): number {
  let amount = 0;

  const leftMax = new Array(terraces.length).fill(0);
  const rightMax = new Array(terraces.length).fill(0);

  let leftTmp = 0;
  for (let i = 0; i < terraces.length; i++) {
    leftTmp = leftMax[i] = Math.max(
      terraces[i],
      leftTmp
    );
  }

  let rightTmp = 0;
  for (let i = terraces.length - 1; i >= 0; i--) {
    rightTmp = rightMax[i] = Math.max(
      terraces[i],
      rightTmp
    );
  }

  for (let i = 0; i < terraces.length; i++) {
    const dx = Math.min(leftMax[i], rightMax[i]) - terraces[i];

    amount += dx > 0 ? dx : 0;
  }

  return amount;
}
