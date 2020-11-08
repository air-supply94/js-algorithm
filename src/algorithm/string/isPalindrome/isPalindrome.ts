export function isPalindrome(str: string): boolean {
  return str.split('')
    .reverse()
    .join('') === str;
}
