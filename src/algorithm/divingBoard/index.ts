export function divingBoard(shorter: number, longer: number, count: number): number[] {
  [
    shorter,
    longer,
  ] = [
    shorter,
    longer,
  ].sort();

  if (count <= 0) {
    return [];
  }

  if (shorter === longer) {
    return Array(count)
    .fill(shorter);
  }

  const result = [];
  for (let i = 0; i <= count; i++) {
    result.push((count - i) * shorter + i * longer);
  }
  return result;
}
