import { DoubleLinkedList, DoubleLinkedListInterface } from '../doubleLinkedList';
import { GraphEdgeInterface, GraphVertexInterface } from './types';

function edgeComparator<T>(edgeA: GraphEdgeInterface<T>, edgeB: GraphEdgeInterface<T>) {
  if (edgeA.value === edgeB.value) {
    return 0;
  }

  return edgeA.value < edgeB.value ? -1 : 1;
}

export class GraphVertex<T = string> implements GraphVertexInterface<T> {
  constructor(value: T) {
    this.value = value;
    this.edges = new DoubleLinkedList<GraphEdgeInterface<T>>(edgeComparator);
  }

  public readonly value: T;

  public readonly edges: DoubleLinkedListInterface<GraphEdgeInterface<T>>;

  public addEdge(edge: GraphEdgeInterface<T>): GraphEdgeInterface<T> {
    return this.edges.append(edge).value;
  }

  public deleteEdge(edge: GraphEdgeInterface<T>): null | GraphEdgeInterface<T> {
    const node = this.edges.delete(edge);
    return node ? node.value : null;
  }

  public getNeighbors(): Array<GraphVertexInterface<T>> {
    return this.edges.toArray()
      .map((node) => (node.value.startVertex === this ? node.value.endVertex : node.value.startVertex));
  }

  public getEdges(): Array<GraphEdgeInterface<T>> {
    return this.edges.toArray()
      .map((linkedListNode) => linkedListNode.value);
  }

  public getDegree(): number {
    return this.edges.size;
  }

  public hasEdge(requiredEdge: GraphEdgeInterface<T>): boolean {
    return Boolean(this.edges.find({ value: requiredEdge }));
  }

  public hasNeighbor(vertex: GraphVertexInterface<T>): boolean {
    return Boolean(this.findEdge(vertex));
  }

  public findEdge(vertex: GraphVertexInterface<T>): GraphEdgeInterface<T> | null {
    const edge = this.edges.find({
      callback: (edge) => {
        return edge.startVertex === vertex || edge.endVertex === vertex;
      },
    });

    return edge ? edge.value : null;
  }

  public deleteAllEdges(): void {
    this.edges.clear();
  }

  public toString() {
    return String(this.value);
  }
}
