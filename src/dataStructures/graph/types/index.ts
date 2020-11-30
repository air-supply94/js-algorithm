import { DoubleLinkedListInterface } from '../../doubleLinkedList/types';

export interface GraphEdgeInterface<T = string> {
  startVertex: GraphVertexInterface<T>;
  endVertex: GraphVertexInterface<T>;
  readonly weight: number;
  readonly value: string;
  reverse: () => this;
}

export interface GraphVertexInterface<T = string> {
  readonly value: T;
  readonly edges: DoubleLinkedListInterface<GraphEdgeInterface<T>>;
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

export interface GraphInterface {
  isDirected: boolean;
  hasVertex: (vertex: GraphVertexInterface | string) => boolean;
  addVertex: (vertex: GraphVertexInterface) => GraphVertexInterface;
  getVertex: (vertex: GraphVertexInterface | string) => GraphVertexInterface | null;
  getNeighbors: (vertex: GraphVertexInterface | string) => GraphVertexInterface[];
  getAllVertices: () => GraphVertexInterface[];
  getAllEdges: () => GraphEdgeInterface[];
  hasEdge: (edge: GraphEdgeInterface | string) => boolean;
  getEdge: (edge: GraphEdgeInterface | string) => GraphEdgeInterface | null;
  addEdge: (edge: GraphEdgeInterface) => GraphEdgeInterface;
  deleteEdge: (edge: GraphEdgeInterface | string) => GraphEdgeInterface | null;
  findEdge: (startVertex: GraphVertexInterface | string, endVertex: GraphVertexInterface | string) => GraphEdgeInterface | null;
  getWeight: () => number;
  reverse: () => this;
  getVerticesIndices: () => { [key: string]: number; };
  getAdjacencyMatrix: () => number[][];
}
