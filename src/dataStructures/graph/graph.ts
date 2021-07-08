import { GraphEdge } from './graphEdge';
import { GraphVertex } from './graphVertex';

export class Graph<T = string> {
  constructor(isDirected = false) {
    this.vertices = {};
    this.edges = {};
    this.isDirected = isDirected;
  }

  public readonly vertices: {[key: string]: GraphVertex<T>; };

  public readonly edges: {[key: string]: GraphEdge<T>; };

  public readonly isDirected: boolean;

  public addVertex(vertex: GraphVertex<T>): GraphVertex<T> {
    if (this.hasVertex(vertex)) {
      return this.getVertex(vertex);
    } else {
      this.vertices[String(vertex)] = vertex;
      return vertex;
    }
  }

  public hasVertex(vertex: GraphVertex<T> | string): boolean {
    return Object.prototype.hasOwnProperty.call(this.vertices, String(vertex));
  }

  public getVertex(vertex: string | GraphVertex<T>): GraphVertex<T> | null {
    return this.hasVertex(vertex) ? this.vertices[String(vertex)] : null;
  }

  public getNeighbors(vertex: GraphVertex<T> | string): Array<GraphVertex<T>> {
    return this.hasVertex(vertex) ? this.getVertex(vertex)
      .getNeighbors() : [];
  }

  public getAllVertices(): Array<GraphVertex<T>> {
    return Object.values(this.vertices);
  }

  public getAllEdges(): Array<GraphEdge<T>> {
    return Object.values(this.edges);
  }

  public addEdge(edge: GraphEdge<T>): GraphEdge<T> {
    const startVertex = this.addVertex(edge.startVertex);
    const endVertex = this.addVertex(edge.endVertex);

    if (!this.hasEdge(edge)) {
      const newEdge = new GraphEdge<T>(startVertex, endVertex, edge.weight);
      this.edges[String(newEdge)] = newEdge;

      if (this.isDirected) {
        startVertex.addEdge(newEdge);
      } else {
        startVertex.addEdge(newEdge);
        endVertex.addEdge(newEdge);
      }
      return newEdge;
    } else {
      return this.getEdge(edge);
    }
  }

  public deleteEdge(edge: GraphEdge<T> | string): GraphEdge<T> | null {
    if (this.hasEdge(edge)) {
      const newEdge = this.getEdge(edge);
      delete this.edges[String(newEdge)];
      newEdge.startVertex.deleteEdge(newEdge);
      newEdge.endVertex.deleteEdge(newEdge);
      return newEdge;
    } else {
      return null;
    }
  }

  public hasEdge(edge: GraphEdge<T> | string): boolean {
    return Object.prototype.hasOwnProperty.call(this.edges, String(edge));
  }

  public getEdge(edge: GraphEdge<T> | string): GraphEdge<T> | null {
    return this.hasEdge(edge) ? this.edges[String(edge)] : null;
  }

  public findEdge(startVertex: GraphVertex<T> | string, endVertex: GraphVertex<T> | string): GraphEdge<T> | null {
    const newStartVertex = this.getVertex(startVertex);
    const newEndVertex = this.getVertex(endVertex);

    return newStartVertex && newEndVertex ? newStartVertex.findEdge(newEndVertex) : null;
  }

  public getWeight(): number {
    return this.getAllEdges()
      .reduce((weight, graphEdge) => weight + graphEdge.weight, 0);
  }

  public reverse(): this {
    this.getAllEdges()
      .forEach((edge) => {
        this.deleteEdge(edge);
        edge.reverse();
        this.addEdge(edge);
      });

    return this;
  }

  public getVerticesIndices(): {[key: string]: number; } {
    return this.getAllVertices()
      .reduce((prev, vertex, index) => {
        prev[String(vertex)] = index;
        return prev;
      }, {});
  }

  public getAdjacencyMatrix(): number[][] {
    const vertices = this.getAllVertices();
    const verticesIndices = this.getVerticesIndices();

    const adjacencyMatrix = Array(vertices.length)
      .fill(null)
      .map(() => Array(vertices.length)
        .fill(Infinity));

    vertices.forEach((vertex, vertexIndex) => {
      vertex.getNeighbors()
        .forEach((neighbor) => {
          const neighborIndex = verticesIndices[String(neighbor)];
          adjacencyMatrix[vertexIndex][neighborIndex] = this.findEdge(vertex, neighbor).weight;
        });
    });

    return adjacencyMatrix;
  }

  public toString(): string {
    return Object.keys(this.vertices)
      .join(',');
  }
}
