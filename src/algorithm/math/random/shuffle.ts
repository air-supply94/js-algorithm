function random(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1));
}

export function shuffle(array: unknown[]): unknown[] {
  const length = array.length;
  const last = length - 1;

  for (let i = 0; i < array.length; i++) {
    const rand = random(i, last);
    const temp = array[i];
    array[i] = array[rand];
    array[rand] = temp;
  }

  return array;
}
