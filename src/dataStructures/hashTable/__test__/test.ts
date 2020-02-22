import { HashTable } from '../index';

describe('HashTable', () => {

  it('should set, read and delete data with collisions', () => {
    const hashTable = new HashTable(3);

    hashTable.set('a', 'sky-old');
    hashTable.set('a', 'sky');
    hashTable.set('b', 'sea');
    hashTable.set('c', 'earth');
    hashTable.set('d', 'ocean');

    expect(hashTable.has('x'))
    .toBe(false);
    expect(hashTable.has('b'))
    .toBe(true);
    expect(hashTable.has('c'))
    .toBe(true);

    expect(hashTable.get('a'))
    .toBe('sky');
    expect(hashTable.get('d'))
    .toBe('ocean');
    expect(hashTable.get('x'))
    .toBeNull();

    hashTable.delete('a');

    expect(hashTable.delete('not-existing'))
    .toBe(null);

    expect(hashTable.get('a'))
    .toBeNull();
    expect(hashTable.get('d'))
    .toBe('ocean');

    hashTable.set('d', 'ocean-new');
    expect(hashTable.get('d'))
    .toBe('ocean-new');
  });

  it('should be possible to add objects to hash table', () => {
    const hashTable = new HashTable<{ prop1: string; prop2: string }>();

    hashTable.set('objectKey', {
      prop1: 'a',
      prop2: 'b',
    });

    const object = hashTable.get('objectKey');
    expect(object)
    .toBeDefined();
    expect(object.prop1)
    .toBe('a');
    expect(object.prop2)
    .toBe('b');
  });

  it('should track actual keys', () => {
    const hashTable = new HashTable(3);

    hashTable.set('a', 'sky-old');
    hashTable.set('a', 'sky');
    hashTable.set('b', 'sea');
    hashTable.set('c', 'earth');
    hashTable.set('d', 'ocean');

    expect(hashTable.getKeys())
    .toEqual([
      'a',
      'b',
      'c',
      'd',
    ]);
    expect(hashTable.has('a'))
    .toBe(true);
    expect(hashTable.has('x'))
    .toBe(false);

    hashTable.delete('a');

    expect(hashTable.has('a'))
    .toBe(false);
    expect(hashTable.has('b'))
    .toBe(true);
    expect(hashTable.has('x'))
    .toBe(false);
  });
});
