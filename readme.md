# 递归算法分析

## 迭代法

- 假设递归函数的运行时间是 T(n)
- 每次递归使问题规模减少多少
- T(n)和 T(n-x)的关系
- 用迭代法将 T(n)进行展开

```text
T(n) = 2 * T(n - 1)
T(n - 1) = 2 * T(n - 2) ===> T(n) = 2 * 2 * T(n - 2)
T(n - 2) = 2 * T(n - 3) ===> T(n) = 2 * 2 * 2 * T(n - 3)
...
T(n) = 2^k * T(n - k)
```

## 公式法

- 当递归函数的时间执行函数满足如下的关系式时,可以利用公式法:T(n) = a \* T(n / b) + f(n)
- f(n)是每次递归完毕之后额外的计算执行时间
- a 一般是递归次数,b 是一次递归减少的规模
- 当参数 a、b 都确定的时候,递归部分的时间复杂度就是: n^log(b)a
  - 当 n^log(b)a 大于 f(n),时间复杂度为 n^log(b)a
  - 当 n^log(b)a 小于 f(n),时间复杂度为 f(n)
  - 当 n^log(b)a 等于 f(n),时间复杂度为(n^log(b)a) \* log(n)
