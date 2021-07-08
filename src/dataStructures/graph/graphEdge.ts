import { GraphVertex } from './graphVertex';

export class GraphEdge<T = string> {
  constructor(startVertex: GraphVertex<T>, endVertex: GraphVertex<T>, weight = 0) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.weight = weight;
  }

  public startVertex: GraphVertex<T>;

  public endVertex: GraphVertex<T>;

  public readonly weight: number;

  public get value(): string {
    return [
      this.startVertex,
      this.endVertex,
    ].join(',');
  }

  public reverse(): this {
    const tmp = this.startVertex;
    this.startVertex = this.endVertex;
    this.endVertex = tmp;

    return this;
  }

  public toString(): string {
    return this.value;
  }
}
