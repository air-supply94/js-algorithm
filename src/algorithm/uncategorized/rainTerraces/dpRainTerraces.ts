export function dpRainTerraces(terraces: number[]): number {
  let waterAmount = 0;

  const leftMaxLevels = new Array(terraces.length).fill(0);
  const rightMaxLevels = new Array(terraces.length).fill(0);

  leftMaxLevels[0] = terraces[0];
  for (let terraceIndex = 1; terraceIndex < terraces.length; terraceIndex++) {
    leftMaxLevels[terraceIndex] = Math.max(
      terraces[terraceIndex],
      leftMaxLevels[terraceIndex - 1]
    );
  }

  rightMaxLevels[terraces.length - 1] = terraces[terraces.length - 1];
  for (let terraceIndex = terraces.length - 2; terraceIndex >= 0; terraceIndex--) {
    rightMaxLevels[terraceIndex] = Math.max(
      terraces[terraceIndex],
      rightMaxLevels[terraceIndex + 1]
    );
  }

  for (let terraceIndex = 0; terraceIndex < terraces.length; terraceIndex++) {
    const currentTerraceBoundary = Math.min(
      leftMaxLevels[terraceIndex],
      rightMaxLevels[terraceIndex]
    );

    if (currentTerraceBoundary > terraces[terraceIndex]) {
      waterAmount += currentTerraceBoundary - terraces[terraceIndex];
    }
  }

  return waterAmount;
}
