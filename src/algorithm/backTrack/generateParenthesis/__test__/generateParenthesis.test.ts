import { generateParenthesis } from '../generateParenthesis';

test('generateParenthesis', () => {
  expect(generateParenthesis(1))
    .toEqual(['()']);
  expect(generateParenthesis(2))
    .toEqual([
      '(())',
      '()()',
    ]);
  expect(generateParenthesis(3))
    .toEqual([
      '((()))',
      '(()())',
      '(())()',
      '()(())',
      '()()()',
    ]);
});
