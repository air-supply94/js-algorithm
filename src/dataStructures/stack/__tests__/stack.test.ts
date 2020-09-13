import { Stack } from '../stack';

describe('Stack', () => {
  test('should create empty stack', () => {
    const stack = new Stack();
    expect(stack)
      .not
      .toBeNull();
    stack.push(1);
    expect(stack.size)
      .toBe(1);
    expect(stack.has(2))
      .toBeFalsy();
    expect(stack.has(1))
      .toBeTruthy();
    expect(stack.clear())
      .toEqual(stack);
    expect(stack.has(1))
      .toBeFalsy();
  });

  test('should stack data to stack', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.size)
      .toBe(2);
    expect(stack.toString())
      .toBe('1,2');
  });

  test('should peek data from stack', () => {
    const stack = new Stack();

    expect(stack.peek())
      .toBeNull();

    stack.push(1);
    stack.push(2);

    expect(stack.peek())
      .toBe(2);
    expect(stack.peek())
      .toBe(2);
  });

  test('should check if stack is empty', () => {
    const stack = new Stack();

    expect(stack.isEmpty())
      .toBe(true);

    stack.push(1);

    expect(stack.isEmpty())
      .toBe(false);
  });

  test('should pop data from stack', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.size)
      .toBe(2);
    expect(stack.pop())
      .toBe(2);
    expect(stack.size)
      .toBe(1);
    expect(stack.pop())
      .toBe(1);
    expect(stack.size)
      .toBe(0);
    expect(stack.pop())
      .toBeNull();
    expect(stack.isEmpty())
      .toBe(true);
  });

  test('should be possible to push/pop objects', () => {
    const stack = new Stack<{ value: string; key: string; }>();

    stack.push({
      value: 'test1',
      key: 'key1',
    });
    stack.push({
      value: 'test2',
      key: 'key2',
    });

    const stringifier = (value) => `${value.key}:${value.value}`;

    expect(stack.toString(stringifier))
      .toBe('key1:test1,key2:test2');
    expect(stack.pop().value)
      .toBe('test2');
    expect(stack.pop().value)
      .toBe('test1');
  });

  test('should be possible to convert stack to array', () => {
    const stack = new Stack();

    expect(stack.peek())
      .toBeNull();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.toArray())
      .toEqual([
        3,
        2,
        1,
      ]);
  });

  test('add undefined value', () => {
    const stack = new Stack();

    expect(stack.peek())
      .toBeNull();

    stack.push(1);
    stack.push(undefined);

    expect(stack.toArray())
      .toEqual([
        undefined,
        1,
      ]);
    expect(stack.size)
      .toBe(2);
  });
});
