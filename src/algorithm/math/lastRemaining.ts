// 剑指offer
// https://www.nowcoder.com/practice/f78a359491e64a50bce2d89cff857eb6
// f(n,m)表示最后一个人的下标
// 假设有n个人,报数m,从0 开始报数,易知出圈的人下标为 m-1
// m-1 出圈后,对剩余人重新编号,即第m个人下标为0,第m+1 下标为1 ......那么重新编号之后,那么最后一个人的下标为f(n-1,m)
// 重新编号之前 m,m+1,m+2,....
// 重新编号之后 0,1,2
// (新编号 + m) % n = 旧编号  ==> f(n,m) = (f(n-1,m)+m) %n
export function lastRemaining(n: number, m: number): number {
  return n === 1 ? 0 : (lastRemaining(n - 1, m) + m) % n;
}
