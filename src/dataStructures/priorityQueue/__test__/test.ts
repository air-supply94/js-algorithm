import { PriorityQueue } from '../priorityQueue';

describe('PriorityQueue', () => {
  it('should create default priority queue', () => {
    const priorityQueue = new PriorityQueue();

    expect(priorityQueue)
    .toBeDefined();
    expect(priorityQueue.isEmpty())
    .toBeTruthy();
  });

  it('should insert items to the queue and respect priorities', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10, 1);
    expect(priorityQueue.peek().value)
    .toBe(10);

    priorityQueue.add(5, 2);
    expect(priorityQueue.peek().value)
    .toBe(10);

    priorityQueue.add(100);
    expect(priorityQueue.peek().value)
    .toBe(100);

    priorityQueue.removeAll(200);
    expect(priorityQueue.peek().value)
    .toBe(100);

    priorityQueue.removeAll(100);
    expect(priorityQueue.peek().value)
    .toBe(10);
    priorityQueue.removeAll(10);
    expect(priorityQueue.peek().value)
    .toBe(5);
    priorityQueue.removeAll(5);
    expect(priorityQueue.peek())
    .toBeUndefined();
  });

  it('should poll from queue with respect to priorities', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);

    expect(priorityQueue.poll().value)
    .toBe(100);
    expect(priorityQueue.poll().value)
    .toBe(200);
    expect(priorityQueue.poll().value)
    .toBe(10);
    expect(priorityQueue.poll().value)
    .toBe(5);
  });

  it('should be possible to change priority of internal nodes', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);

    priorityQueue.changeAllPriority(100, 10);
    priorityQueue.changeAllPriority(10, 20);
    expect(priorityQueue.poll().value)
    .toBe(200);
    expect(priorityQueue.poll().value)
    .toBe(5);
    expect(priorityQueue.poll().value)
    .toBe(100);
    expect(priorityQueue.poll().value)
    .toBe(10);
  });

  it('should be possible to change priority of head node', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);

    priorityQueue.changeAllPriority(200, 10);
    priorityQueue.changeAllPriority(10, 20);

    expect(priorityQueue.poll().value)
    .toBe(100);
    expect(priorityQueue.poll().value)
    .toBe(5);
    expect(priorityQueue.poll().value)
    .toBe(200);
    expect(priorityQueue.poll().value)
    .toBe(10);
  });

  it('should be possible to change priority along with node addition', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);

    priorityQueue.changeAllPriority(300, 10);
    priorityQueue.changeAllPriority(200, 10);
    priorityQueue.changeAllPriority(10, 20);

    priorityQueue.add(15, 15);

    expect(priorityQueue.poll().value)
    .toBe(100);
    expect(priorityQueue.poll().value)
    .toBe(5);
    expect(priorityQueue.poll().value)
    .toBe(200);
    expect(priorityQueue.poll().value)
    .toBe(15);
    expect(priorityQueue.poll().value)
    .toBe(10);
  });

  it('should be possible to search in priority queue by value', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);
    priorityQueue.add(15, 15);
    expect(priorityQueue.has(70))
    .toBe(false);
    expect(priorityQueue.has(15))
    .toBe(true);
    expect(priorityQueue.sort()
    .toString())
    .toBe('100,200,10,5,15');
  });
});
