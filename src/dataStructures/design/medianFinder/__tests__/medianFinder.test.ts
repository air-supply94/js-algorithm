import { MedianFinder } from '../medianFinder';

test('MedianFinder', () => {
  const medianFinder = new MedianFinder();
  expect(medianFinder.findMedian())
    .toBeNaN();

  medianFinder.addNum(1);
  expect(medianFinder.findMedian())
    .toBe(1);

  medianFinder.addNum(2);
  expect(medianFinder.findMedian())
    .toBe(1.5);

  medianFinder.addNum(3);
  expect(medianFinder.findMedian())
    .toBe(2);

  medianFinder.addNum(4);
  expect(medianFinder.findMedian())
    .toBe(2.5);

  medianFinder.addNum(5);
  expect(medianFinder.findMedian())
    .toBe(3);

  medianFinder.addNum(6);
  expect(medianFinder.findMedian())
    .toBe(3.5);

  medianFinder.addNum(7);
  expect(medianFinder.findMedian())
    .toBe(4);

  medianFinder.addNum(8);
  expect(medianFinder.findMedian())
    .toBe(4.5);

  medianFinder.addNum(9);
  expect(medianFinder.findMedian())
    .toBe(5);

  medianFinder.addNum(10);
  expect(medianFinder.findMedian())
    .toBe(5.5);
});
