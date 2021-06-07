import { FrequencyStack } from '../frequencyStack';

test('frequencyStack', () => {
  const frequencyStack = new FrequencyStack();

  expect(frequencyStack.pop())
    .toBeNull();

  frequencyStack.push(5);
  frequencyStack.push(7);
  frequencyStack.push(5);
  frequencyStack.push(7);
  frequencyStack.push(4);
  frequencyStack.push(5);

  expect(frequencyStack.pop())
    .toBe(5);
  expect(frequencyStack.pop())
    .toBe(7);
  expect(frequencyStack.pop())
    .toBe(5);
  expect(frequencyStack.pop())
    .toBe(4);
  expect(frequencyStack.pop())
    .toBe(7);
  expect(frequencyStack.pop())
    .toBe(5);
  expect(frequencyStack.pop())
    .toBe(null);
});
