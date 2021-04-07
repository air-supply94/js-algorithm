export function lessInterval(tasks: string[], n: number): number {
  const counts = Array(26)
    .fill(0);

  tasks.forEach((str) => {
    counts[str.charCodeAt(0) - 65]++;
  });
  counts.sort((a, b) => b - a);
  let result = 0;
  while (counts[0]) {
    let i = 0;
    while (i < n + 1) {
      if (counts[0] === 0) {
        break;
      }

      if (i < 26 && counts[i]) {
        counts[i]--;
      }

      result++;
      i++;
    }

    counts.sort((a, b) => b - a);
  }
  return result;
}
