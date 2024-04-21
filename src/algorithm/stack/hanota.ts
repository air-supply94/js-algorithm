// https://leetcode-cn.com/problems/hanota-lcci/
export function hanota(from: number[], exchangePlace: number[], destination: number[]) {
  function move(from: number[], destination: number[]): void {
    destination.push(from.pop());
  }

  const stack: Array<{ n: number; from: number[]; exchangePlace: number[]; destination: number[] }> = [];
  stack.push({
    n: from.length,
    from,
    destination,
    exchangePlace,
  });

  while (stack.length) {
    const current = stack.pop();
    if (current.n === 1) {
      move(current.from, current.destination);
    } else {
      stack.push({
        n: current.n - 1,
        from: current.exchangePlace,
        exchangePlace: current.from,
        destination: current.destination,
      });
      stack.push({
        n: 1,
        from: current.from,
        exchangePlace: current.exchangePlace,
        destination: current.destination,
      });
      stack.push({
        n: current.n - 1,
        from: current.from,
        exchangePlace: current.destination,
        destination: current.exchangePlace,
      });
    }
  }
}
