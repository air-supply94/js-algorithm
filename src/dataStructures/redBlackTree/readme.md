## 红黑规则

- 节点不是黑色,就是红色
- 根节点为黑色
- 一个节点如果为红色,那么其父节点和子节点只能是黑色
- 每个节点到叶子节点的所有路径,都包含相同数目的黑色节点

## 插入平衡

初始插入的都是红节点

1. node 为空直接返回
2. node.parent 为空(为 root),将 node 设置为黑色
3. node.parent 为黑色直接返回
4. 如果 uncle 存在且为红节点,将 node.parent 和 uncle 设置为黑节点,node.parent.parent 设置为红节点.递归 node.parent.parent
5. 左左型、左右型、右右型、右左型判断及旋转(颜色很好处理,黑-红-红)

## 删除平衡

### 前置处理

1. 查找替换节点
2. 替换节点为空直接返回
3. 替换节点为 root,将 root 设置为空返回
4. 替换节点颜色为红色,将节点直接删除并返回
5. 替换节点为黑色,首先红黑树平衡,将节点直接删除并返回

### 红黑树平衡

左右是对称操作,只说明一侧

1. 循环条件 currentNode.parent && currentNode.color === 黑色
2. 判断 currentNode 是在那一侧(左侧)
   1. sibling 为红色
      1. 将 sibling 设置为黑色
      2. 将 currentNode.parent 设置为红色
      3. 将 currentNode.parent 右右旋
   2. sibling 为黑色且(sibling 为叶子节点或者 sibling 有 2 个黑色子节点)
      1. 将 sibling 设置为红色
      2. 将 currentNode 设置为 currentNode.parent
   3. sibling 为黑色且 sibling 有右节点且右节点为红色
      1. 设置 sibling 的颜色为 currentNode.parent 的颜色
      2. 设置 currentNode.parent 和 sibling 右节点颜色为黑色
      3. 将 currentNode.parent 右右旋
      4. 将 currentNode 设置为 root 节点
   4. sibling 为黑色且 sibling 有左节点且左节点为红色
      1. 通过 currentNode.parent 的右左旋调整成 3 的颜色和形状
      2. 再执行一遍 3
3. 类比 2(右侧)
4. 将 currentNode 设置为黑色
