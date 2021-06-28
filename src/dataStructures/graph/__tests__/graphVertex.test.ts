import { GraphEdge } from '../graphEdge';
import { GraphVertex } from '../graphVertex';

describe('GraphVertex', () => {
  test('should create graph vertex', () => {
    const vertex = new GraphVertex('A');

    expect(vertex)
      .toBeDefined();
    expect(vertex.value)
      .toBe('A');
    expect(vertex.toString())
      .toBe('A');
    expect(vertex.value)
      .toBe('A');
    expect(vertex.edges.toString())
      .toBe('');
    expect(vertex.getEdges())
      .toEqual([]);
  });

  test('should add edges to vertex and check if it exists', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');

    const edgeAB = new GraphEdge(vertexA, vertexB);
    vertexA.addEdge(edgeAB);

    expect(vertexA.hasEdge(edgeAB))
      .toBe(true);
    expect(vertexB.hasEdge(edgeAB))
      .toBe(false);
    expect(vertexA.getEdges().length)
      .toBe(1);
    expect(vertexA.getEdges()[0]
      .value)
      .toBe([
        'A',
        'B',
      ].join());
  });

  test('should delete edges from vertex', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeAC = new GraphEdge(vertexA, vertexC);
    vertexA.addEdge(edgeAB);
    vertexA.addEdge(edgeAC);

    expect(vertexA.hasEdge(edgeAB))
      .toBe(true);
    expect(vertexB.hasEdge(edgeAB))
      .toBe(false);

    expect(vertexA.hasEdge(edgeAC))
      .toBe(true);
    expect(vertexC.hasEdge(edgeAC))
      .toBe(false);

    expect(vertexA.getEdges().length)
      .toBe(2);

    expect(vertexA.getEdges()[0]
      .value)
      .toBe([
        'A',
        'B',
      ].join());
    expect(vertexA.getEdges()[1]
      .value)
      .toBe([
        'A',
        'C',
      ].join());

    vertexA.deleteEdge(edgeAB);
    expect(vertexA.hasEdge(edgeAB))
      .toBe(false);
    expect(vertexA.hasEdge(edgeAC))
      .toBe(true);
    expect(vertexA.getEdges()[0]
      .value)
      .toBe([
        'A',
        'C',
      ].join());

    vertexA.deleteEdge(edgeAC);
    expect(vertexA.hasEdge(edgeAB))
      .toBe(false);
    expect(vertexA.hasEdge(edgeAC))
      .toBe(false);
    expect(vertexA.getEdges().length)
      .toBe(0);
  });

  test('should delete all edges from vertex', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeAC = new GraphEdge(vertexA, vertexC);
    vertexA.addEdge(edgeAB);
    vertexA.addEdge(edgeAC);

    expect(vertexA.hasEdge(edgeAB))
      .toBe(true);
    expect(vertexB.hasEdge(edgeAB))
      .toBe(false);

    expect(vertexA.hasEdge(edgeAC))
      .toBe(true);
    expect(vertexC.hasEdge(edgeAC))
      .toBe(false);

    expect(vertexA.getEdges().length)
      .toBe(2);

    vertexA.deleteAllEdges();

    expect(vertexA.hasEdge(edgeAB))
      .toBe(false);
    expect(vertexB.hasEdge(edgeAB))
      .toBe(false);

    expect(vertexA.hasEdge(edgeAC))
      .toBe(false);
    expect(vertexC.hasEdge(edgeAC))
      .toBe(false);

    expect(vertexA.getEdges().length)
      .toBe(0);
  });

  test('should return vertex neighbors in case if current node is start one', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeAC = new GraphEdge(vertexA, vertexC);
    vertexA.addEdge(edgeAB);
    vertexA.addEdge(edgeAC);

    expect(vertexB.getNeighbors())
      .toEqual([]);

    const neighbors = vertexA.getNeighbors();

    expect(neighbors.length)
      .toBe(2);
    expect(neighbors[0])
      .toEqual(vertexB);
    expect(neighbors[1])
      .toEqual(vertexC);
  });

  test('should return vertex neighbors in case if current node is end one', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');

    const edgeBA = new GraphEdge(vertexB, vertexA);
    const edgeCA = new GraphEdge(vertexC, vertexA);
    vertexA.addEdge(edgeBA);
    vertexA.addEdge(edgeCA);

    expect(vertexB.getNeighbors())
      .toEqual([]);

    const neighbors = vertexA.getNeighbors();

    expect(neighbors.length)
      .toBe(2);
    expect(neighbors[0])
      .toEqual(vertexB);
    expect(neighbors[1])
      .toEqual(vertexC);
  });

  test('should check if vertex has specific neighbor', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');

    const edgeAB = new GraphEdge(vertexA, vertexB);
    vertexA.addEdge(edgeAB);

    expect(vertexA.hasNeighbor(vertexB))
      .toBe(true);
    expect(vertexA.hasNeighbor(vertexC))
      .toBe(false);
  });

  test('should edge by vertex', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');

    const edgeAB = new GraphEdge(vertexA, vertexB);
    vertexA.addEdge(edgeAB);

    expect(vertexA.findEdge(vertexB))
      .toEqual(edgeAB);
    expect(vertexA.findEdge(vertexC))
      .toBeNull();
  });

  test('should calculate vertex degree', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');

    expect(vertexA.getDegree())
      .toBe(0);

    const edgeAB = new GraphEdge(vertexA, vertexB);
    vertexA.addEdge(edgeAB);

    expect(vertexA.getDegree())
      .toBe(1);

    const edgeBA = new GraphEdge(vertexB, vertexA);
    vertexA.addEdge(edgeBA);

    expect(vertexA.getDegree())
      .toBe(2);

    vertexA.addEdge(edgeAB);
    expect(vertexA.getDegree())
      .toBe(3);

    expect(vertexA.getEdges().length)
      .toEqual(3);
  });
});
