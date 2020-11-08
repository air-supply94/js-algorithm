export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return '';
  }

  let endIndex = 0;
  const strCount = strs.length;
  const strLength = Math.min.apply(null, strs.map((item) => item.length));
  // eslint-disable-next-line no-labels
  outer:for (let i = 0; i < strLength; i++) {
    for (let j = 1; j < strCount; j++) {
      if (strs[j][i] !== strs[0][i]) {
        // eslint-disable-next-line no-labels
        break outer;
      }
    }
    endIndex++;
  }

  return strs[0].slice(0, endIndex);
}
