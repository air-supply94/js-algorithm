// https://leetcode-cn.com/problems/cheapest-flights-within-k-stops/
// 787
export function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
  const commonFromFlights: number[][][] = Array(n).fill(null)
    .map(() => []);

  for (let i = 0; i < flights.length; i++) {
    commonFromFlights[flights[i][0]]
      .push(flights[i]);
  }

  let level = 0;
  let result = Infinity;
  const queue: Array<[number, number]> = [
    [
      src,
      0,
    ],
  ];

  while (queue.length && level <= k + 1) {
    level++;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const currentItem = queue.shift();
      const neighbor = commonFromFlights[currentItem[0]];

      if (currentItem[0] === dst) {
        result = Math.min(result, currentItem[1]);
      }

      for (let j = 0; j < neighbor.length; j++) {
        if (result === Infinity || currentItem[1] + neighbor[j][2] < result) {
          queue.push([
            neighbor[j][1],
            currentItem[1] + neighbor[j][2],
          ]);
        }
      }
    }
  }

  return result === Infinity ? -1 : result;
}
