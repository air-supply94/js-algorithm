import { Comparator } from '../../../utils';
import { MinHeap } from '../../heap';
import { DoubleLinkedListNode } from '../doubleLinkedListNode';
import { DoubleLinkedListNodeInterface } from '../types';

export function mergeKLists<T = unknown>(lists: Array<DoubleLinkedListNodeInterface<T>>, comparator: Comparator): DoubleLinkedListNodeInterface<T> | null {
  const deathHead: DoubleLinkedListNodeInterface<T> = new DoubleLinkedListNode<T>(null);
  let currentNode: DoubleLinkedListNodeInterface<T> = deathHead;

  const minHeap = new MinHeap<DoubleLinkedListNodeInterface<T>>((a: DoubleLinkedListNodeInterface<T>, b: DoubleLinkedListNodeInterface<T>) => {
    if (comparator.lessThan(a.value, b.value)) {
      return -1;
    } else if (comparator.equal(a.value, b.value)) {
      return 0;
    } else {
      return 1;
    }
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
