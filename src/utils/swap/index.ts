export default function swap(data: any[], first: number, second: number): any[] {
  const t = data[first];
  data[first] = data[second];
  data[second] = t;
  return data;
}
