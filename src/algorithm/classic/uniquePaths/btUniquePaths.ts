export function btUniquePaths(w: number, h: number, posW = 0, posH = 0, totalSteps = 0): number {
  if (posW === w - 1 && posH === h - 1) {
    return totalSteps + 1;
  }

  let rightUniqueSteps = 0;
  let downUniqueSteps = 0;

  if (posW < w - 1) {
    rightUniqueSteps = btUniquePaths(w, h, posW + 1, posH, totalSteps);
  }

  if (posH < h - 1) {
    downUniqueSteps = btUniquePaths(w, h, posW, posH + 1, totalSteps);
  }

  return rightUniqueSteps + downUniqueSteps;
}
