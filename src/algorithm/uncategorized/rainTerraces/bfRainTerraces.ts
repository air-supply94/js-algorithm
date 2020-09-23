export function bfRainTerraces(terraces: number[]): number {
  let waterAmount = 0;

  for (let terraceIndex = 0; terraceIndex < terraces.length; terraceIndex++) {
    let leftHighestLevel = 0;
    for (let leftIndex = 0; leftIndex <= terraceIndex; leftIndex++) {
      leftHighestLevel = Math.max(leftHighestLevel, terraces[leftIndex]);
    }

    let rightHighestLevel = 0;
    for (let rightIndex = terraceIndex; rightIndex < terraces.length; rightIndex++) {
      rightHighestLevel = Math.max(rightHighestLevel, terraces[rightIndex]);
    }

    const terraceBoundaryLevel = Math.min(leftHighestLevel, rightHighestLevel);
    if (terraceBoundaryLevel > terraces[terraceIndex]) {
      waterAmount += Math.min(leftHighestLevel, rightHighestLevel) - terraces[terraceIndex];
    }
  }

  return waterAmount;
}
