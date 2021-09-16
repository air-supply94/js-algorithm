// https://leetcode-cn.com/problems/number-of-islands/
// 200
export function numIslands(grid: string[][]): number {
  if (!grid.length || !grid[0].length) {
    return 0;
  }

  const height = grid.length;
  const width = grid[0].length;

  const f: number[] = Array(width * height).fill(null);
  let count = f.length;
  let waterCount = 0;
  for (let i = 0; i < f.length; i++) {
    f[i] = i;
  }

  function find(x: number): number {
    if (f[x] === x) {
      return x;
    } else {
      f[x] = find(f[x]);
      return f[x];
    }
  }

  function union(x: number, y: number): void {
    if (find(x) !== find(y)) {
      count--;
    }

    f[find(x)] = find(y);
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === '1') {
        if (i > 0) {
          if (grid[i - 1][j] === '1') {
            union(i * width + j, (i - 1) * width + j);
          }
        }

        if (i < height - 1) {
          if (grid[i + 1][j] === '1') {
            union(i * width + j, (i + 1) * width + j);
          }
        }

        if (j > 0) {
          if (grid[i][j - 1] === '1') {
            union(i * width + j, i * width + j - 1);
          }
        }

        if (j < width - 1) {
          if (grid[i][j + 1] === '1') {
            union(i * width + j, i * width + j + 1);
          }
        }
      } else {
        waterCount++;
      }
    }
  }

  return count - waterCount;
}
