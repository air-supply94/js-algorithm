export function longestSubstring(str: string): string {
  let result = '';
  let tmp = {};
  let i = 0;

  function setSubstring() {
    const length = Object.keys(tmp).length;
    if (length > result.length) {
      result = str.slice(i - length, i);
    }
    tmp = {};
  }

  for (; i < str.length; i++) {
    if (tmp[str[i]]) {
      setSubstring();
    } else {
      tmp[str[i]] = str[i];
    }
  }

  setSubstring();

  return result;
}
