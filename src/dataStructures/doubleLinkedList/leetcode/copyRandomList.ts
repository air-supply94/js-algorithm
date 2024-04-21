class Node {
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }

  public val: number;

  public next: Node | null;

  public random: Node | null;
}

// https://leetcode.cn/problems/copy-list-with-random-pointer/description/?envType=study-plan-v2&envId=top-100-liked
// 138
// top100
export function copyRandomList(head: Node | null): Node | null {
  if (head == null) {
    return null;
  }

  const cache = new Map<Node, Node>();
  let currentNode = head;
  while (currentNode) {
    const currentNewNode = new Node(currentNode.val);
    cache.set(currentNode, currentNewNode);

    currentNode = currentNode.next;
  }

  currentNode = head;
  while (currentNode) {
    cache.get(currentNode).next = cache.get(currentNode.next) || null;
    cache.get(currentNode).random = cache.get(currentNode.random) || null;
    currentNode = currentNode.next;
  }

  return cache.get(head);
}
