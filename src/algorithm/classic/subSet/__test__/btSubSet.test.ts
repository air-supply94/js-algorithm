import { btSubSet } from '../btSubSet';

describe('btPowerSet', () => {
  it('should calculate power set of given set using backtracking approach', () => {
    expect(btSubSet([1]))
      .toEqual([
        [],
        [1],
      ]);

    expect(btSubSet([
      1,
      2,
      3,
    ]))
      .toEqual([
        [],
        [1],
        [2],
        [
          1,
          2,
        ],
        [3],
        [
          1,
          3,
        ],
        [
          2,
          3,
        ],
        [
          1,
          2,
          3,
        ],
      ]);
  });
});
