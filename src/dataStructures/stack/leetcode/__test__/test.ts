import { balanceSymbol } from '../balanceSymbol';
import { postfix } from '../postfix';
import { hannuo } from '../hannuo';
import { calPoints } from '../calPoints';
import { backspaceCompare } from '../backspaceCompare';
import { removeDuplicates } from '../removeDuplicates';
import { maxSlidingWindow } from '../maxSlidingWindow';

describe('leetcode stack', () => {
  it('balanceSymbol', () => {
    expect(balanceSymbol('(aaa)[]['))
    .toBeFalsy();
    expect(balanceSymbol('[aaa)[]]'))
    .toBeFalsy();
    expect(balanceSymbol('}]aaa()[]'))
    .toBeFalsy();
    expect(balanceSymbol('([({})[{}]])aaa()[]'))
    .toBeTruthy();
  });

  it('postfix', () => {
    expect(postfix([
      6,
      5,
      2,
      3,
      '+',
      '/',
      '-',
      null,
      8,
      '+',
      3,
      '*',
    ]))
    .toBe(9);
  });

  it('hannuo', () => {
    hannuo(4, 'a', 'b', 'c');
    hannuo(0, 'a', 'b', 'c');
  });

  it('calPoints', () => {
    expect(calPoints([
      5,
      -2,
      4,
      'test',
      'C',
      'D',
      9,
      '+',
      '+',
    ]))
    .toBe(27);
  });

  it('backspaceCompare', () => {
    expect(backspaceCompare('ab#c', 'ad#c'))
    .toBeTruthy();
    expect(backspaceCompare('ab##', 'c#d#'))
    .toBeTruthy();
  });

  it('removeDuplicates', () => {
    expect(removeDuplicates('abbaca'))
    .toBe('ca');
  });

  it('maxSlidingWindow', () => {
    expect(maxSlidingWindow([], 10)
    .toString())
    .toBe('');

    expect(maxSlidingWindow([
      1,
      2,
    ], 10)
    .toString())
    .toBe('2');

    expect(maxSlidingWindow([
      1,
      3,
      -1,
      -3,
      5,
      3,
      6,
      7,
    ], 3)
    .toString())
    .toBe('3,3,5,5,6,7');
  });
});
