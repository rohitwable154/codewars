import bowling from './index';

test('bowling', () => {
  expect(bowling([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(300);
  expect(bowling([8, 0, 8, 2, 10, 10, 7, 3, 9, 1, 7, 2, 10, 10, 9, 0])).toBe(
    177,
  );
  expect(bowling([10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10])).toBe(
    200,
  );
  expect(
    bowling([10, 0, 10, 7, 2, 10, 10, 10, 8, 2, 9, 1, 7, 2, 10, 10, 5]),
  ).toBe(194);
  expect(
    bowling([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]),
  ).toBe(80);
  expect(
    bowling([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]),
  ).toBe(150);
});