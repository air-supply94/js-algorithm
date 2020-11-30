import { GraphEdgeInterface, GraphVertexInterface } from './types';

export class GraphEdge<T = string> implements GraphEdgeInterface<T> {
  constructor(startVertex: GraphVertexInterface<T>, endVertex: GraphVertexInterface<T>, weight = 0) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.weight = weight;
  }

  public startVertex: GraphVertexInterface<T>;

  public endVertex: GraphVertexInterface<T>;

  public readonly weight: number;

  public get value(): string {
    return [
      (this.startVertex.value),
      (this.endVertex.value),
    ].join(',');
  }

  public reverse(): this {
    const tmp = this.startVertex;
    this.startVertex = this.endVertex;
    this.endVertex = tmp;

    return this;
  }

  public toString() {
    return this.value;
  }
}
