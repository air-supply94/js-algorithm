import { balanceSymbol } from '../balanceSymbol';

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
});
