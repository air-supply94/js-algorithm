import { Queue } from '../queue';

describe('Queue', () => {
  test('should create empty queue', () => {
    const queue = new Queue();
    expect(queue.dequeue())
      .toBeNull();
    expect(queue.peek())
      .toBeNull();

    expect(queue)
      .not
      .toBeUndefined();
    queue.enqueue(1);
  });

  test('should be possible to enqueue/dequeue objects', () => {
    const queue = new Queue<{ value: string; key: string; }>();

    queue.enqueue({
      value: 'test1',
      key: 'key1',
    });
    queue.enqueue({
      value: 'test2',
      key: 'key2',
    });

    expect(queue.dequeue().value)
      .toBe('test1');
    expect(queue.dequeue().value)
      .toBe('test2');
  });

  test('should peek data from queue', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek())
      .toBe(1);
    expect(queue.peek())
      .toBe(1);
  });

  test('should check if queue is empty', () => {
    const queue = new Queue();

    expect(queue.isEmpty())
      .toBe(true);

    queue.enqueue(1);

    expect(queue.isEmpty())
      .toBe(false);
  });

  test('should dequeue from queue in FIFO order', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue())
      .toBe(1);
    expect(queue.dequeue())
      .toBe(2);
    expect(queue.isEmpty())
      .toBe(true);
  });
});
