export function rainTerraces(terraces: number[]): number {
  let amount = 0;
  const dpLeftMax = Array(terraces.length).fill(0);
  const dpRightMax = Array(terraces.length).fill(0);

  let leftMaxPrevious = 0;
  for (let i = 0; i < terraces.length; i++) {
    dpLeftMax[i] = Math.max(terraces[i], leftMaxPrevious);
    leftMaxPrevious = dpLeftMax[i];
  }

  let rightMaxPrevious = 0;
  for (let i = terraces.length - 1; i >= 0; i--) {
    dpRightMax[i] = Math.max(terraces[i], rightMaxPrevious);
    rightMaxPrevious = dpRightMax[i];
  }

  for (let i = 0; i < terraces.length; i++) {
    const dx = Math.min(dpLeftMax[i], dpRightMax[i]) - terraces[i];
    amount += dx > 0 ? dx : 0;
  }

  return amount;
}
