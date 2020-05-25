import {
  GraphEdgeInterface,
  GraphVertexInterface,
} from './types';

export class GraphEdge implements GraphEdgeInterface {

  constructor(startVertex: GraphVertexInterface, endVertex: GraphVertexInterface, weight = 0) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.weight = weight;
  }

  public startVertex: GraphVertexInterface;
  public endVertex: GraphVertexInterface;
  public weight: number;

  get value(): string {
    return [
      (this.startVertex.value),
      (this.endVertex.value),
    ].join();
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
