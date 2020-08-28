import { clearBit } from './clearBit';

export function updateBit(x: number, bitPosition: number, bitValue: 0 | 1): number {
  return clearBit(x, bitPosition) | ((bitValue ? 1 : 0) << bitPosition);
}
