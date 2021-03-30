import { getBit } from './getBit';

export function fullAdder(a: number, b: number): number {
  let result = 0;
  let rest = 0;

  for (let i = 0; i < 32; i++) {
    const ai = getBit(a, i);
    const bi = getBit(b, i);
    const bitSum = ai ^ bi ^ rest;

    rest = rest ? ai | bi : ai & bi;

    result |= (bitSum << i);
  }

  return result;
}
