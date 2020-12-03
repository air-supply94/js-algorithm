import { GraphInterface, GraphVertexInterface } from '../../../dataStructures/graph';

interface CallbackParams {
  previousVertex: GraphVertexInterface | null;
  currentVertex: GraphVertexInterface;
  nextVertex: GraphVertexInterface;
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

export function dfs(graph: GraphInterface, startVertex: GraphVertexInterface, callbackConfig?: Partial<CallbackConfig>) {
  const visitedVertices = Object.keys(graph.vertices)
    .reduce((prev, current) => {
      prev[String[current]] = false;
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

  function depthFirstSearchRecursive(currentVertex, previousVertex) {
    enterVertex({
      currentVertex,
      previousVertex,
    });

    currentVertex.getNeighbors()
      .forEach((nextVertex) => {
        if (allowTraversal({
          previousVertex,
          currentVertex,
          nextVertex,
        })) {
          depthFirstSearchRecursive(nextVertex, currentVertex);
        }
      });

    leaveVertex({
      currentVertex,
      previousVertex,
    });
  }

  depthFirstSearchRecursive(startVertex, null);
}
