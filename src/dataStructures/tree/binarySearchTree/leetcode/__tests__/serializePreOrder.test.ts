import { serializePreOrder } from '../serializePreOrder';

describe('serializePreOrder', () => {
  it('should serializePreOrder', () => {
    expect(serializePreOrder([]))
      .toBeNull();

    const root = serializePreOrder([
      2,
      1,
      null,
      null,
      4,
      3,
      null,
      null,
      5,
      null,
      null,
    ]);

    expect(root.toString())
      .toBe('1,2,3,4,5');
  });
});
