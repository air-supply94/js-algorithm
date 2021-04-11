export function bfRainTerraces(terraces: number[]): number {
  let amount = 0;

  for (let i = 0; i < terraces.length; i++) {
    let leftMaxPrevious = 0;
    for (let j = 0; j <= i; j++) {
      leftMaxPrevious = Math.max(leftMaxPrevious, terraces[j]);
    }

    let rightMaxPrevious = 0;
    for (let j = i; j < terraces.length; j++) {
      rightMaxPrevious = Math.max(rightMaxPrevious, terraces[j]);
    }

    const dx = Math.min(leftMaxPrevious, rightMaxPrevious) - terraces[i];
    amount += dx > 0 ? dx : 0;
  }

  return amount;
}
