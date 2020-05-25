import { DoubleLinkedListInterface } from '../../doubleLinkedList/types';

export interface GraphEdgeInterface {
  startVertex: GraphVertexInterface;
  endVertex: GraphVertexInterface;
  weight: number;
  readonly value: string;
  reverse(): this;
}

export interface GraphVertexInterface {
  value: string;
  edges: DoubleLinkedListInterface<GraphEdgeInterface>;
  addEdge(edge: GraphEdgeInterface): GraphEdgeInterface;
  deleteEdge(edge: GraphEdgeInterface): null | GraphEdgeInterface;
  getNeighbors(): GraphVertexInterface[];
  getEdges(): GraphEdgeInterface[];
  getDegree(): number;
  hasEdge(requiredEdge: GraphEdgeInterface): boolean;
  hasNeighbor(vertex: GraphVertexInterface): boolean;
  findEdge(vertex: GraphVertexInterface): GraphEdgeInterface | null;
  deleteAllEdges(): void;
}

export interface GraphInterface {
  isDirected: boolean;
  hasVertex(vertex: GraphVertexInterface | string): boolean;
  addVertex(vertex: GraphVertexInterface): GraphVertexInterface | null;
  getVertex(vertex: GraphVertexInterface | string): GraphVertexInterface | null;
  getNeighbors(vertex: GraphVertexInterface | string): GraphVertexInterface[];
  getAllVertices(): GraphVertexInterface[];
  getAllEdges(): GraphEdgeInterface[];
  hasEdge(edge: GraphEdgeInterface | string): boolean;
  getEdge(edge: GraphEdgeInterface | string): GraphEdgeInterface | null;
  addEdge(edge: GraphEdgeInterface): GraphEdgeInterface | null;
  deleteEdge(edge: GraphEdgeInterface | string): GraphEdgeInterface | null;
  findEdge(startVertex: GraphVertexInterface | string, endVertex: GraphVertexInterface | string): GraphEdgeInterface | null;
  getWeight(): number;
  reverse(): this;
  getVerticesIndices(): { [key: string]: number };
  getAdjacencyMatrix(): number[][];
}
