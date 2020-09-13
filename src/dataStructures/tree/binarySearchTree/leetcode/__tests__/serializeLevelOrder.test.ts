import { serializeLevelOrder } from '../serializeLevelOrder';

describe('serializeLevelOrder', () => {
  test('should serializeLevelOrder', () => {
    expect(serializeLevelOrder([]))
      .toBeNull();
    expect(serializeLevelOrder([1]).value)
      .toBe(1);
    expect(serializeLevelOrder([
      2,
      null,
    ]).left)
      .toBeNull();

    const root = serializeLevelOrder([
      2,
      1,
      4,
      null,
      null,
      3,
      5,
      null,
      null,
      null,
      null,
    ]);

    expect(root.left.value)
      .toBe(1);
    expect(root.right.value)
      .toBe(4);
    expect(root.toString())
      .toBe('1,2,3,4,5');
  });
});
