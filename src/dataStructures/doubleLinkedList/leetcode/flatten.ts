import { Stack } from '../../stack';
import { DoubleLinkedListNode } from '../doubleLinkedListNode';

export class FlattenDoubleLinkedListNode<T = unknown> extends DoubleLinkedListNode {
  constructor(value: T, next = null, previous = null, child = null) {
    super(value, next, previous);
    this._child = child;
  }

  private _child: this;

  public get child() {
    return this._child;
  }

  public setChild(child) {
    this._child = child;
  }
}

export function flatten<T = unknown>(flattenDoubleLinkedListNode: FlattenDoubleLinkedListNode<T>): null | FlattenDoubleLinkedListNode<T> {
  if (!flattenDoubleLinkedListNode) {
    return null;
  }

  const pseudoHead = new FlattenDoubleLinkedListNode<T>(null);
  let previous = pseudoHead;
  const stack = new Stack<FlattenDoubleLinkedListNode<T>>();
  stack.push(flattenDoubleLinkedListNode);

  while (!stack.isEmpty()) {
    const current = stack.pop();
    previous.setNext(current);
    current.setPrevious(previous);

    if (current.next) {
      stack.push(current.next as FlattenDoubleLinkedListNode<T>);
    }

    if (current.child) {
      stack.push(current.child);
      current.setChild(null);
    }

    previous = current;
  }

  pseudoHead.next.setPrevious(null);
  return flattenDoubleLinkedListNode;
}
