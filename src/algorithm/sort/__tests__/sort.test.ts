import { Comparator } from '../../../utils';
import { bubbleSort } from '../bubbleSort';
import { insertionSort } from '../insertionSort';
import { quickSortExchange } from '../quickSort/quickSortExchange';
import { quickSortInPlace } from '../quickSort/quickSortInPlace';
import { selectionSort } from '../selectionSort';
import { shellSort } from '../shellSort';

describe('sortBase', () => {
  const sortCollection = [
    bubbleSort,
    insertionSort,
    quickSortExchange,
    selectionSort,
    shellSort,
    quickSortInPlace,
  ];

  for (const sort of sortCollection) {
    test(`sort ${sort.toString()} comparator`, () => {
      expect(sort([
        3,
        4,
        2,
        1,
        0,
        0,
        4,
        3,
        4,
        2,
      ], new Comparator()))
        .toEqual([
          0,
          0,
          1,
          2,
          2,
          3,
          3,
          4,
          4,
          4,
        ]);
    });

    test(`sort ${sort.toString()} small length`, () => {
      expect(sort([1]))
        .toEqual([1]);
    });

    test(`sort ${sort.toString()} number`, () => {
      expect(sort([
        3,
        4,
        2,
        1,
        0,
        0,
        4,
        3,
        4,
        2,
      ]))
        .toEqual([
          0,
          0,
          1,
          2,
          2,
          3,
          3,
          4,
          4,
          4,
        ]);
    });

    test(`sort ${sort.toString()} string`, () => {
      expect(sort([
        3,
        4,
        2,
        1,
        0,
        0,
        4,
        3,
        4,
        2,
      ].map((value) => String(value))))
        .toEqual([
          0,
          0,
          1,
          2,
          2,
          3,
          3,
          4,
          4,
          4,
        ].map((value) => String(value)));
    });

    test(`sort ${sort.toString()} object`, () => {
      const arr = [
        { age: 1 },
        { age: 30 },
        { age: 20 },
        { age: 5 },
        { age: 7 },
        { age: 25 },
      ];

      function compareCallback(a: { age: number; }, b: { age: number; }) {
        if (a.age === b.age) {
          return 0;
        }
        return a.age < b.age ? -1 : 1;
      }

      expect(sort(arr, compareCallback))
        .toEqual(
          [
            { age: 1 },
            { age: 5 },
            { age: 7 },
            { age: 20 },
            { age: 25 },
            { age: 30 },
          ]
        );
    });
  }
});
