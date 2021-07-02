export function divingBoard(shorter: number, longer: number, count: number): number[] {
  if (count <= 0) {
    return [];
  }

  if (shorter === longer) {
    return [shorter * count];
  }

  const result = [];
  for (let i = 0; i <= count; i++) {
    result.push((count - i) * shorter + i * longer);
  }
  return result;
}
