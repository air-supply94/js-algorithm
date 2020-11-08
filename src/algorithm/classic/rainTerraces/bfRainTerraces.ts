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

    const addLength = Math.min(leftHighestLevel, rightHighestLevel) - terraces[terraceIndex];
    waterAmount += addLength > 0 ? addLength : 0;
  }

  return waterAmount;
}
