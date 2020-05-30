import { DoubleLinkedList, DoubleLinkedListInterface, DoubleLinkedListNodeInterface } from '../doubleLinkedList';
import { GraphEdgeInterface, GraphVertexInterface } from './types';

export class GraphVertex implements GraphVertexInterface {
  constructor(value: string) {
    function edgeComparator(edgeA: GraphEdgeInterface, edgeB: GraphEdgeInterface) {
      if (edgeA.value === edgeB.value) {
        return 0;
      }

      return edgeA.value < edgeB.value ? -1 : 1;
    }

    this.value = value;
    this.edges = new DoubleLinkedList<GraphEdgeInterface>(edgeComparator);
  }

  public readonly value: string;

  public edges: DoubleLinkedListInterface<GraphEdgeInterface>;

  public addEdge(edge: GraphEdgeInterface): GraphEdgeInterface {
    return this.edges.append(edge).value;
  }

  public deleteEdge(edge: GraphEdgeInterface): null | GraphEdgeInterface {
    const node = this.edges.delete(edge);
    return node ? node.value : null;
  }

  public getNeighbors(): GraphVertexInterface[] {
    return this.edges.toArray()
      .map((node: DoubleLinkedListNodeInterface<GraphEdgeInterface>) => (node.value.startVertex === this ? node.value.endVertex : node.value.startVertex));
  }

  public getEdges(): GraphEdgeInterface[] {
    return this.edges.toArray()
      .map((linkedListNode) => linkedListNode.value);
  }

  public getDegree(): number {
    return this.edges.size;
  }

  public hasEdge(requiredEdge: GraphEdgeInterface): boolean {
    return Boolean(this.edges.find({ value: requiredEdge }));
  }

  public hasNeighbor(vertex: GraphVertexInterface): boolean {
    return Boolean(this.edges.find({
      callback(edge: GraphEdgeInterface) {
        return edge.startVertex === vertex || edge.endVertex === vertex;
      },
    }));
  }

  public findEdge(vertex: GraphVertex): GraphEdgeInterface | null {
    const edge = this.edges.find({
      callback: (edge: GraphEdgeInterface) => {
        return edge.startVertex === vertex || edge.endVertex === vertex;
      },
    });

    return edge ? edge.value : null;
  }

  public deleteAllEdges(): void {
    this.edges.clear();
  }

  public toString() {
    return this.value;
  }
}
