import { generateParenthesis } from '../generateParenthesis';

describe('generateParenthesis', () => {
  it('should generateParenthesis', () => {
    expect(generateParenthesis(1)).toEqual(['()']);
    expect(generateParenthesis(2)).toEqual([
      '(())',
      '()()',
    ]);
    expect(generateParenthesis(3)).toEqual([
      '((()))',
      '(()())',
      '(())()',
      '()(())',
      '()()()',
    ]);
  });
});
