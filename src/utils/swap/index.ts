export function swap<T>(data: T[], first: number, second: number): T[] {
  const t = data[first];
  data[first] = data[second];
  data[second] = t;
  return data;
}
