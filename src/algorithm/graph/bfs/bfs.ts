import { Graph, GraphVertex } from '../../../dataStructures/graph';
import { Queue } from '../../../dataStructures/queue';

interface CallbackParams {
  previousVertex: GraphVertex | null;
  currentVertex: GraphVertex;
  nextVertex: GraphVertex;
}

interface CallbackConfig {
  allowTraversal: (params: CallbackParams) => boolean;
  enterVertex: (params: Omit<CallbackParams, 'nextVertex'>) => void;
  leaveVertex: (params: Omit<CallbackParams, 'nextVertex'>) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function defaultEnterVertex(params: Omit<CallbackParams, 'nextVertex'>): void {
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function defaultLeaveVertex(params: Omit<CallbackParams, 'nextVertex'>): void {
}

export function bfs(graph: Graph, startVertex: null | GraphVertex, callbackConfig?: Partial<CallbackConfig>) {
  const visitedVertices: {[key: string]: boolean; } = Object.keys(graph.vertices)
    .reduce((prev: {[key: string]: boolean; }, current) => {
      prev[current.toString()] = false;
      return prev;
    }, {});

  function defaultAllowTraversal(params: CallbackParams): boolean {
    if (visitedVertices[String(params.nextVertex)] === true) {
      return false;
    } else {
      visitedVertices[String(params.nextVertex)] = true;
      return true;
    }
  }

  const enterVertex = callbackConfig && callbackConfig.enterVertex ? callbackConfig.enterVertex : defaultEnterVertex;
  const leaveVertex = callbackConfig && callbackConfig.leaveVertex ? callbackConfig.leaveVertex : defaultLeaveVertex;
  const allowTraversal = callbackConfig && callbackConfig.allowTraversal ? callbackConfig.allowTraversal : defaultAllowTraversal;
  const vertexQueue = new Queue<GraphVertex>();

  vertexQueue.enqueue(startVertex);

  let previousVertex: GraphVertex | null = null;

  while (!vertexQueue.isEmpty()) {
    const currentVertex = vertexQueue.dequeue();
    enterVertex({
      currentVertex,
      previousVertex,
    });

    graph.getNeighbors(currentVertex)
      // eslint-disable-next-line no-loop-func
      .forEach((nextVertex) => {
        if (allowTraversal({
          previousVertex,
          currentVertex,
          nextVertex,
        })) {
          vertexQueue.enqueue(nextVertex);
        }
      });

    leaveVertex({
      currentVertex,
      previousVertex,
    });

    previousVertex = currentVertex;
  }
}
