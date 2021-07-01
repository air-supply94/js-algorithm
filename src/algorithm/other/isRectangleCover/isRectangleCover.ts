export function isRectangleCover(rectangles: number[][]): boolean {
  let leftBottomX = Infinity;
  let leftBottomY = Infinity;
  let rightTopX = -Infinity;
  let rightTopY = -Infinity;

  let actualArea = 0;
  const cache = new Map<string, boolean>();

  for (let i = 0; i < rectangles.length; i++) {
    const x1 = rectangles[i][0];
    const y1 = rectangles[i][1];
    const x2 = rectangles[i][2];
    const y2 = rectangles[i][3];

    leftBottomX = Math.min(leftBottomX, x1);
    leftBottomY = Math.min(leftBottomY, y1);
    rightTopX = Math.max(rightTopX, x2);
    rightTopY = Math.max(rightTopY, y2);

    actualArea += (x2 - x1) * (y2 - y1);

    const points = [
      `${x1},${y1}`,
      `${x2},${y1}`,
      `${x2},${y2}`,
      `${x1},${y2}`,
    ];

    for (let j = 0; j < points.length; j++) {
      if (cache.has(points[j])) {
        cache.delete(points[j]);
      } else {
        cache.set(points[j], true);
      }
    }
  }

  const perfectArea = (rightTopX - leftBottomX) * (rightTopY - leftBottomY);

  if (perfectArea === actualArea) {
    if (cache.size === 4) {
      if (cache.has(`${leftBottomX},${leftBottomY}`)) {
        if (cache.has(`${rightTopX},${leftBottomY}`)) {
          if (cache.has(`${rightTopX},${rightTopY}`)) {
            if (cache.has(`${leftBottomX},${rightTopY}`)) {
              return true;
            }
          }
        }
      }
    }
  }

  return false;
}
