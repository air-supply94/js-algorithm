import { deleteValueBase, DoubleLinkedList, find } from '../doubleLinkedList';
import { GraphEdge } from './graphEdge';

function edgeComparator<T>(edgeA: GraphEdge<T>, edgeB: GraphEdge<T>) {
  if (edgeA.value === edgeB.value) {
    return 0;
  }

  return edgeA.value < edgeB.value ? -1 : 1;
}

export class GraphVertex<T = string> {
  constructor(value: T) {
    this.value = value;
    this.edges = new DoubleLinkedList<GraphEdge<T>>(edgeComparator);
  }

  public readonly value: T;

  public readonly edges: DoubleLinkedList<GraphEdge<T>>;

  public addEdge(edge: GraphEdge<T>): GraphEdge<T> {
    return this.edges.append(edge).value;
  }

  public deleteEdge(edge: GraphEdge<T>): null | GraphEdge<T> {
    const node = deleteValueBase(this.edges, 1, edge);
    return node ? node.value : null;
  }

  public getNeighbors(): Array<GraphVertex<T>> {
    return this.edges.toArray()
      .map((node) => (node.value.startVertex === this ? node.value.endVertex : node.value.startVertex));
  }

  public getEdges(): Array<GraphEdge<T>> {
    return this.edges.toArray()
      .map((linkedListNode) => linkedListNode.value);
  }

  public getDegree(): number {
    return this.edges.size;
  }

  public hasEdge(requiredEdge: GraphEdge<T>): boolean {
    return Boolean(find(this.edges.head, { value: requiredEdge }, this.edges.compare));
  }

  public hasNeighbor(vertex: GraphVertex<T>): boolean {
    return Boolean(this.findEdge(vertex));
  }

  public findEdge(vertex: GraphVertex<T>): GraphEdge<T> | null {
    const edge = find(
      this.edges.head,
      {
        callback: (edge) => {
          return edge.startVertex === vertex || edge.endVertex === vertex;
        },
      },
      this.edges.compare
    );

    return edge ? edge.value : null;
  }

  public deleteAllEdges(): void {
    this.edges.clear();
  }

  public toString(): string {
    return String(this.value);
  }
}
