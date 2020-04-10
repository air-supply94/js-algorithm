import { LinkedHashTable } from '../linkedHashTable';

describe('HashTable', () => {

  it('should set, read and delete data with collisions', () => {
    const hashTable = new LinkedHashTable();
    const size = LinkedHashTable.size;

    hashTable.set(size + 1, 'sky-old');
    hashTable.set(size + 1, 'sky');
    hashTable.set(2, 'sea');
    hashTable.set(3, 'earth');
    hashTable.set(4, 'ocean');

    expect(hashTable.get(1))
    .toBeNull();
    expect(hashTable.get(size * 2 + 1))
    .toBeNull();
    expect(hashTable.has(0))
    .toBe(false);
    expect(hashTable.has(2))
    .toBe(true);
    expect(hashTable.has(3))
    .toBe(true);

    expect(hashTable.get(size + 1))
    .toBe('sky');
    expect(hashTable.get(4))
    .toBe('ocean');
    expect(hashTable.get('x'))
    .toBeNull();

    hashTable.delete(size + 1);

    expect(hashTable.delete('not-existing'))
    .toBe(null);

    expect(hashTable.get(size + 1))
    .toBeNull();
    expect(hashTable.get(4))
    .toBe('ocean');

    hashTable.set(4, 'ocean-new');
    expect(hashTable.get(4))
    .toBe('ocean-new');
  });

  it('should be possible to add objects to hash table', () => {
    const hashTable = new LinkedHashTable<string, { prop1: string; prop2: string }>();

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
    const hashTable = new LinkedHashTable();

    hashTable.set('a', 'sky-old');
    hashTable.set('a', 'sky');
    hashTable.set('b', 'sea');
    hashTable.set('c', 'earth');
    hashTable.set('d', 'ocean');

    expect(hashTable.keys)
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
