import { balanceSymbol } from '../balanceSymbol';
import { postfix } from '../postfix';
import { hannuo } from '../hannuo';
import { calPoints } from '../calPoints';
import { backspaceCompare } from '../backspaceCompare';

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
});
