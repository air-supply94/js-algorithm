import { DoubleLinkedList } from '../../doubleLinkedList';

export interface GraphEdgeInterface<T = string> {
  startVertex: GraphVertexInterface<T>;
  endVertex: GraphVertexInterface<T>;
  readonly weight: number;
  readonly value: string;
  reverse: () => this;
}

export interface GraphVertexInterface<T = string> {
  readonly value: T;
  readonly edges: DoubleLinkedList<GraphEdgeInterface<T>>;
  addEdge: (edge: GraphEdgeInterface<T>) => GraphEdgeInterface<T>;
  deleteEdge: (edge: GraphEdgeInterface<T>) => null | GraphEdgeInterface<T>;
  getNeighbors: () => Array<GraphVertexInterface<T>>;
  getEdges: () => Array<GraphEdgeInterface<T>>;
  getDegree: () => number;
  hasEdge: (requiredEdge: GraphEdgeInterface<T>) => boolean;
  hasNeighbor: (vertex: GraphVertexInterface<T>) => boolean;
  findEdge: (vertex: GraphVertexInterface<T>) => GraphEdgeInterface<T> | null;
  deleteAllEdges: () => void;
}

export interface GraphInterface<T = string> {
  readonly vertices: {[key: string]: GraphVertexInterface<T>; };
  readonly edges: {[key: string]: GraphEdgeInterface<T>; };
  readonly isDirected: boolean;
  hasVertex: (vertex: GraphVertexInterface<T> | string) => boolean;
  addVertex: (vertex: GraphVertexInterface<T>) => GraphVertexInterface<T>;
  getVertex: (vertex: GraphVertexInterface<T> | string) => GraphVertexInterface<T> | null;
  getNeighbors: (vertex: GraphVertexInterface<T> | string) => Array<GraphVertexInterface<T>>;
  getAllVertices: () => Array<GraphVertexInterface<T>>;
  getAllEdges: () => Array<GraphEdgeInterface<T>>;
  hasEdge: (edge: GraphEdgeInterface<T> | string) => boolean;
  getEdge: (edge: GraphEdgeInterface<T> | string) => GraphEdgeInterface<T> | null;
  addEdge: (edge: GraphEdgeInterface<T>) => GraphEdgeInterface<T>;
  deleteEdge: (edge: GraphEdgeInterface<T> | string) => GraphEdgeInterface<T> | null;
  findEdge: (startVertex: GraphVertexInterface<T> | string, endVertex: GraphVertexInterface<T> | string) => GraphEdgeInterface<T> | null;
  getWeight: () => number;
  reverse: () => this;
  getVerticesIndices: () => {[key: string]: number; };
  getAdjacencyMatrix: () => number[][];
}
