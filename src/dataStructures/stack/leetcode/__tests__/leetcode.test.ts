import { backspaceCompare } from '../backspaceCompare';
import { balanceSymbol } from '../balanceSymbol';
import { calPoints } from '../calPoints';
import { decodeString } from '../decodeString';
import { postfix } from '../postfix';
import { removeDuplicates } from '../removeDuplicates';

test('balanceSymbol', () => {
  expect(balanceSymbol('(aaa)[]['))
    .toBeFalsy();
  expect(balanceSymbol('[aaa)[]]'))
    .toBeFalsy();
  expect(balanceSymbol('}]aaa()[]'))
    .toBeFalsy();
  expect(balanceSymbol('([({})[{}]])aaa()[]'))
    .toBeTruthy();
});

test('postfix', () => {
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

test('calPoints', () => {
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

test('backspaceCompare', () => {
  expect(backspaceCompare('ab#c', 'ad#c'))
    .toBeTruthy();
  expect(backspaceCompare('ab##', 'c#d#'))
    .toBeTruthy();
});

test('removeDuplicates', () => {
  expect(removeDuplicates('abbaca'))
    .toBe('ca');
});

test('decodeString', () => {
  expect(decodeString('[]'))
    .toBe('');
  expect(decodeString('a[]'))
    .toBe('a');

  expect(decodeString('3[a]2[bc]'))
    .toBe('aaabcbc');
  expect(decodeString('3[a]c[bc]'))
    .toBe('aaac');
  expect(decodeString('3[a2[c]]'))
    .toBe('accaccacc');
  expect(decodeString('2[abc]3[cd]ef'))
    .toBe('abcabccdcdcdef');
});
