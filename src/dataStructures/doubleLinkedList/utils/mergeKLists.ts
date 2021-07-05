import { Comparator } from '../../../utils';
import { Heap } from '../../heap';
import { DoubleLinkedListNode } from '../doubleLinkedListNode';
import { DoubleLinkedListNodeInterface } from '../types';

export function mergeKLists<T = unknown>(lists: Array<DoubleLinkedListNodeInterface<T>>, comparator: Comparator): DoubleLinkedListNodeInterface<T> | null {
  const deathHead: DoubleLinkedListNodeInterface<T> = new DoubleLinkedListNode<T>(null);
  let currentNode: DoubleLinkedListNodeInterface<T> = deathHead;

  const minHeap = new Heap<DoubleLinkedListNodeInterface<T>>((a: DoubleLinkedListNodeInterface<T>, b: DoubleLinkedListNodeInterface<T>) => {
    return comparator.lessThanOrEqual(a.value, b.value);
  });

  lists.forEach((item) => {
    if (item) {
      minHeap.add(item);
    }
  });

  while (!minHeap.isEmpty()) {
    const node = minHeap.poll();
    if (node.next) {
      minHeap.add(node.next);
    }

    currentNode.setNext(node);
    node.setPrevious(currentNode)
      .setNext(null);
    currentNode = currentNode.next;
  }

  if (deathHead.next) {
    const head = deathHead.next;
    head.setPrevious(null);
    deathHead.setNext(null);
    return head;
  } else {
    return null;
  }
}
