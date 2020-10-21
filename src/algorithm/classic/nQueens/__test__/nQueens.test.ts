import { nQueens } from '../nQueens';

describe('nQueens', () => {
  it('should have solutions for 4 to N queens', () => {
    expect(nQueens(4).length)
      .toBe(2);
    expect(nQueens(5).length)
      .toBe(10);
    expect(nQueens(6).length)
      .toBe(4);
    expect(nQueens(7).length)
      .toBe(40);
    expect(nQueens(8).length)
      .toBe(92);
    expect(nQueens(9).length)
      .toBe(352);
    expect(nQueens(10).length)
      .toBe(724);
    expect(nQueens(11).length)
      .toBe(2680);
  });
});
