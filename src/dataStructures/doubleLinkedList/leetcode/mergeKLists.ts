import { Comparator } from '../../../utils';
import { Heap } from '../../heap';
import { DoubleLinkedListNode } from '../doubleLinkedList';

export function mergeKLists<T = unknown>(lists: Array<DoubleLinkedListNode<T>>, comparator: Comparator): DoubleLinkedListNode<T> | null {
  const deathHead: DoubleLinkedListNode<T> = new DoubleLinkedListNode<T>(null);
  let currentNode: DoubleLinkedListNode<T> = deathHead;

  const minHeap = new Heap<DoubleLinkedListNode<T>>((a: DoubleLinkedListNode<T>, b: DoubleLinkedListNode<T>) => {
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

    currentNode.next = node;
    node.previous = currentNode;
    node.next = null;
    currentNode = currentNode.next;
  }

  if (deathHead.next) {
    const head = deathHead.next;
    head.previous = null;
    deathHead.next = null;
    return head;
  } else {
    return null;
  }
}
