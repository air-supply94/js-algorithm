import { DisjointSet } from '../disjointSet';

describe('DisjointSet', () => {
  it('should throw error when trying to union and check not existing sets', () => {
    const disjointSet = new DisjointSet();
    disjointSet.makeSet('a');
    disjointSet.makeSet('a');
    expect(disjointSet.union('A', 'B'))
      .toBeNull();
    expect(disjointSet.inSameSet('A', 'B'))
      .toBeFalsy();
  });

  it('should do basic manipulations on disjoint set', () => {
    const disjointSet = new DisjointSet();

    expect(disjointSet.find('A'))
      .toBeNull();
    expect(disjointSet.find('B'))
      .toBeNull();

    disjointSet.makeSet('A');

    expect(disjointSet.find('A'))
      .toBe('A');
    expect(disjointSet.find('B'))
      .toBeNull();

    disjointSet.makeSet('B');

    expect(disjointSet.find('A'))
      .toBe('A');
    expect(disjointSet.find('B'))
      .toBe('B');

    disjointSet.makeSet('C');

    expect(disjointSet.inSameSet('A', 'B'))
      .toBe(false);

    disjointSet.union('A', 'B');

    expect(disjointSet.find('A'))
      .toBe('A');
    expect(disjointSet.find('B'))
      .toBe('A');
    expect(disjointSet.inSameSet('A', 'B'))
      .toBe(true);
    expect(disjointSet.inSameSet('B', 'A'))
      .toBe(true);
    expect(disjointSet.inSameSet('A', 'C'))
      .toBe(false);

    disjointSet.union('A', 'A');

    disjointSet.union('B', 'C');

    expect(disjointSet.find('A'))
      .toBe('A');
    expect(disjointSet.find('B'))
      .toBe('A');
    expect(disjointSet.find('C'))
      .toBe('A');

    expect(disjointSet.inSameSet('A', 'B'))
      .toBe(true);
    expect(disjointSet.inSameSet('B', 'C'))
      .toBe(true);
    expect(disjointSet.inSameSet('A', 'C'))
      .toBe(true);

    disjointSet.makeSet('E');
    disjointSet.makeSet('F');
    disjointSet.makeSet('G');
    disjointSet.makeSet('H');
    disjointSet.makeSet('I');

    disjointSet.union('E', 'F');
    disjointSet.union('F', 'G');
    disjointSet.union('G', 'H');
    disjointSet.union('H', 'I');

    expect(disjointSet.inSameSet('A', 'I'))
      .toBe(false);
    expect(disjointSet.inSameSet('E', 'I'))
      .toBe(true);

    disjointSet.union('I', 'C');

    expect(disjointSet.find('I'))
      .toBe('E');
    expect(disjointSet.inSameSet('A', 'I'))
      .toBe(true);
  });

  it('should union smaller set with bigger one making bigger one to be new root', () => {
    const disjointSet = new DisjointSet();

    disjointSet.makeSet('A');
    disjointSet.makeSet('B');
    disjointSet.makeSet('C');
    disjointSet.union('B', 'C');
    disjointSet.union('A', 'C');

    expect(disjointSet.find('A'))
      .toBe('B');
  });

  it('should do basic manipulations on disjoint set with custom key extractor', () => {
    const keyExtractor = (value) => value.key;

    const disjointSet = new DisjointSet(keyExtractor);

    const itemA = {
      key: 'A',
      value: 1,
    };
    const itemB = {
      key: 'B',
      value: 2,
    };
    const itemC = {
      key: 'C',
      value: 3,
    };

    expect(disjointSet.find(itemA))
      .toBeNull();
    expect(disjointSet.find(itemB))
      .toBeNull();

    disjointSet.makeSet(itemA);

    expect(disjointSet.find(itemA))
      .toBe('A');
    expect(disjointSet.find(itemB))
      .toBeNull();

    disjointSet.makeSet(itemB);

    expect(disjointSet.find(itemA))
      .toBe('A');
    expect(disjointSet.find(itemB))
      .toBe('B');

    disjointSet.makeSet(itemC);

    expect(disjointSet.inSameSet(itemA, itemB))
      .toBe(false);

    disjointSet.union(itemA, itemB);

    expect(disjointSet.find(itemA))
      .toBe('A');
    expect(disjointSet.find(itemB))
      .toBe('A');
    expect(disjointSet.inSameSet(itemA, itemB))
      .toBe(true);
    expect(disjointSet.inSameSet(itemB, itemA))
      .toBe(true);
    expect(disjointSet.inSameSet(itemA, itemC))
      .toBe(false);

    disjointSet.union(itemA, itemC);

    expect(disjointSet.find(itemA))
      .toBe('A');
    expect(disjointSet.find(itemB))
      .toBe('A');
    expect(disjointSet.find(itemC))
      .toBe('A');

    expect(disjointSet.inSameSet(itemA, itemB))
      .toBe(true);
    expect(disjointSet.inSameSet(itemB, itemC))
      .toBe(true);
    expect(disjointSet.inSameSet(itemA, itemC))
      .toBe(true);
  });
});
