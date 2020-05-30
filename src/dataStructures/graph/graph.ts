import { GraphEdge } from './graphEdge';
import { GraphEdgeInterface, GraphInterface, GraphVertexInterface } from './types';

export class Graph implements GraphInterface {
  constructor(isDirected = false) {
    this.vertices = {};
    this.edges = {};
    this.isDirected = isDirected;
  }

  private readonly vertices: { [key: string]: GraphVertexInterface; };

  private readonly edges: { [key: string]: GraphEdgeInterface; };

  public readonly isDirected: boolean;

  public addVertex(vertex: GraphVertexInterface): GraphVertexInterface {
    let newVertex = this.getVertex(vertex);
    if (!newVertex) {
      this.vertices[vertex.value] = vertex;
      newVertex = vertex;
    }
    return newVertex;
  }

  public hasVertex(vertex: GraphVertexInterface | string): boolean {
    return Object.prototype.hasOwnProperty.call(this.vertices, String(vertex));
  }

  public getVertex(vertex: string | GraphVertexInterface): GraphVertexInterface | null {
    return this.hasVertex(vertex) ? this.vertices[String(vertex)] : null;
  }

  public getNeighbors(vertex: GraphVertexInterface | string): GraphVertexInterface[] {
    const newVertex = this.getVertex(vertex);
    if (!newVertex) {
      return [];
    }

    return newVertex.getNeighbors();
  }

  public getAllVertices(): GraphVertexInterface[] {
    return Object.values(this.vertices);
  }

  public getAllEdges(): GraphEdgeInterface[] {
    return Object.values(this.edges);
  }

  public addEdge(edge: GraphEdgeInterface): GraphEdgeInterface {
    let startVertex = this.getVertex(edge.startVertex);
    let endVertex = this.getVertex(edge.endVertex);

    if (!startVertex) {
      this.addVertex(edge.startVertex);
      startVertex = edge.startVertex;
    }

    if (!endVertex) {
      this.addVertex(edge.endVertex);
      endVertex = edge.endVertex;
    }

    let newEdge = this.getEdge(edge);
    if (!newEdge) {
      newEdge = new GraphEdge(startVertex, endVertex, edge.weight);
      this.edges[String(edge)] = newEdge;

      if (this.isDirected) {
        startVertex.addEdge(newEdge);
      } else {
        startVertex.addEdge(newEdge);
        endVertex.addEdge(newEdge);
      }
    }

    return newEdge;
  }

  public deleteEdge(edge: GraphEdgeInterface | string): GraphEdgeInterface | null {
    const newEdge = this.getEdge(edge);

    if (newEdge) {
      delete this.edges[String(edge)];
      newEdge.startVertex.deleteEdge(newEdge);
      newEdge.endVertex.deleteEdge(newEdge);
    }

    return newEdge;
  }

  public hasEdge(edge: GraphEdgeInterface | string): boolean {
    return Object.prototype.hasOwnProperty.call(this.edges, String(edge));
  }

  public getEdge(edge: GraphEdgeInterface | string): GraphEdgeInterface | null {
    if (!this.hasEdge(edge)) {
      return null;
    }

    return this.edges[String(edge)];
  }

  public findEdge(startVertex: GraphVertexInterface | string, endVertex: GraphVertexInterface | string): GraphEdgeInterface | null {
    const newStartVertex = this.getVertex(startVertex);
    const newEndVertex = this.getVertex(endVertex);

    if (!newStartVertex || !newEndVertex) {
      return null;
    }

    return newStartVertex.findEdge(newEndVertex);
  }

  public getWeight(): number {
    return this.getAllEdges()
      .reduce((weight, graphEdge: GraphEdgeInterface) => weight + graphEdge.weight, 0);
  }

  public reverse(): this {
    this.getAllEdges()
      .forEach((edge: GraphEdgeInterface) => {
        this.deleteEdge(edge);
        edge.reverse();
        this.addEdge(edge);
      });

    return this;
  }

  public getVerticesIndices(): { [key: string]: number; } {
    return this.getAllVertices()
      .reduce((prev, vertex: GraphVertexInterface, index) => {
        prev[vertex.value] = index;
        return prev;
      }, {});
  }

  public getAdjacencyMatrix(): any[] {
    const vertices = this.getAllVertices();
    const verticesIndices = this.getVerticesIndices();

    const adjacencyMatrix = Array(vertices.length)
      .fill(null)
      .map(() => Array(vertices.length)
        .fill(Infinity));

    vertices.forEach((vertex: GraphVertexInterface, vertexIndex) => {
      vertex.getNeighbors()
        .forEach((neighbor) => {
          const neighborIndex = verticesIndices[neighbor.value];
          adjacencyMatrix[vertexIndex][neighborIndex] = this.findEdge(vertex, neighbor).weight;
        });
    });

    return adjacencyMatrix;
  }

  public toString() {
    return Object.keys(this.vertices)
      .toString();
  }
}
