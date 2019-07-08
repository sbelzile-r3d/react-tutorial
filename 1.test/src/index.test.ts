import { getChange } from ".";

test('0.00', () => {
  expect(getChange(0.00)).toEqual([0, 0, 0, 0, 0]);
});

test('0.01', () => {
  expect(getChange(0.01)).toEqual([0, 0, 0, 0, 1]);
});

test('0.02', () => {
  expect(getChange(0.02)).toEqual([0, 0, 0, 0, 2]);
});

test('0.05', () => {
  expect(getChange(0.05)).toEqual([0, 0, 0, 1, 0]);
});

test('0.20', () => {
  expect(getChange(0.20)).toEqual([0, 0, 2, 0, 0]);
});

test('0.50', () => {
  expect(getChange(0.50)).toEqual([0, 2, 0, 0, 0]);
});

test('2.00', () => {
  expect(getChange(2.00)).toEqual([2, 0, 0, 0, 0]);
});

test('4.06', () => {
  expect(getChange(4.06)).toEqual([4, 0, 0, 1, 1]);
});

test('5.35', () => {
  expect(getChange(5.35)).toEqual([5, 1, 1, 0, 0]);
});

test('0.89', () => {
  expect(getChange(0.89)).toEqual([0, 3, 1, 0, 4]);
});

test('0.99', () => {
  expect(getChange(0.99)).toEqual([0, 3, 2, 0, 4]);
});