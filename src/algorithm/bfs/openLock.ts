// https://leetcode-cn.com/problems/open-the-lock/
// 752
export function openLock(dead: string[], target: string): number {
  const deadMap = new Map<string, boolean>();
  const enqueueMap = new Map<string, boolean>();
  for (let i = 0; i < dead.length; i++) {
    deadMap.set(dead[i], true);
  }

  let level = 0;
  const queue: string[] = [];
  queue.push('0000');
  enqueueMap.set('0000', true);

  while (queue.length) {
    level++;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const current = queue.shift();
      if (!deadMap.has(current)) {
        if (target === current) {
          return level - 1;
        }

        for (let j = 0; j < 4; j++) {
          const up = getUp(current, j);
          if (!deadMap.has(up) && !enqueueMap.has(up)) {
            queue.push(up);
            enqueueMap.set(up, true);
          }

          const down = getDown(current, j);
          if (!deadMap.has(down) && !enqueueMap.has(down)) {
            queue.push(down);
            enqueueMap.set(down, true);
          }
        }
      }
    }
  }

  return -1;
}

function getUp(current: string, index: number): string {
  const array = current.split('')
    .filter(Boolean);

  if (array[index] === '9') {
    array[index] = '0';
  } else {
    array[index] = `${Number(array[index]) + 1}`;
  }

  return array.join('');
}

function getDown(current: string, index: number): string {
  const array = current.split('')
    .filter(Boolean);

  if (array[index] === '0') {
    array[index] = '9';
  } else {
    array[index] = `${Number(array[index]) - 1}`;
  }

  return array.join('');
}
