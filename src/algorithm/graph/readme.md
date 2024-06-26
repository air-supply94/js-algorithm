## 基本概念

- `vertex`: 顶点
- `edge`: 边(弧)
  - `无向边`: v1 和 v2 之间的 edge 没有方向---(v1, v2)
  - `有向边`: v1 和 v2 之间的 edge 有方向---<v1, v2>

## 定义: G = (V, E)

### `简单图`

- vertex 不连接自身
- edge 不重复

### `有向图`

- `定义`: 任意 2 个 vertex 之间的 edge 都是有向边
- `有向完全图`: 在有向图中,任意 2 个 vertex 都存在 edge.边条数: `n*(n - 1)`

### `无向图`

- `定义`: 类比有向图
- `无向完全图`: 在无向图中,任意 2 个 vertex 都存在 edge.边条数: `n*(n - 1) / 2`

### `有权图`

edge 带有`weight`---`网(network)`

### `子图`

类比子树

## vertex 和 edge 的关系

### `无向图`中

- edge(v1, v2),v1 和 v2 互称为邻接点,关联
- `vertex的度(degree)`: 和 vertex 关联的 edge 的数量
- `sum(graph.edge) = sum(graph.degree) / 2`

### `有向图`中

- edge<v1, v2>,称 v1 邻接到 v2
- `OutDegree`: `以v1开头`的 edge 的数量.邻接矩阵横向
- `InDegree`: `以v2结尾`的 edge 的数量.邻接矩阵纵向
- `v1的度(degree)`: `InDegree + OutDegree`
- `sum(graph.edge) = sum(graph.InDegree) = sum(graph.OutDegree)`

### `path`

- `定义`: v1 到 v2 的 vertex 集合
- `路径长`: path 上的 edge 的数目
- `简单路径`: path 上 vertex 各不相同
- `环(Cycle)`: path 存在 vertex 相等
- `简单环`: path 上`只有`第一个 vertex 和最后一个 vertex 相等

## 连通

### 无向图中

- v1 到 v2 有 path,则称 v1 和 v2 连通
- `连通图`: 任意 2 个 vertex 都有 path
- `连通分量`: 也叫`极大连通子图`
  - `子图`
  - `连通子图`
  - `连通子图含有的最大vertex数目`
  - `具有最大vertex数目的连通子图包含依附于这些vertex的所有边`

### 有向图中

- v1 到 v2 有 path 且 v2 到 v1 有 path,则称 v1 和 v2 连通
- `强连通图`: 类比上面
- `强连通分量`: 类比上面

## 生成树

- `图中n个vertex,小于n - 1条边,一定不连通`
- `图中n个vertex,大于n - 1条边,一定有环`
- `无向图`中`连通`, n 个 vertex 且只有 n - 1 条 edge---连通图的生成树
- `有向图`中`,顶点 InDegree 为 0,其余 vertex 的 InDegree 为 1
- 一个有向图由若干`有向树`构成`生成森林`

## 二分图

用两种颜色将图中的所有顶点着色,且使得任意一条边的两个端点的颜色都不相同
