import gameOfLife from './index';

test('gameOfLife', () => {
  const example1 = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];
  const example2 = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
  ];
  const example3 = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];
  const example4 = [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 0],
  ];
  const glider = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ];
  const rowOf10 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  const smallExploder = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  const exploder = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];
  const lightweightSpaceship = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];
  const checkerboard = [
    [1, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 0, 1],
  ];
  const tumbler = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  const bigShape = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  expect(gameOfLife(example1)).toBe('░░░\n░░░\n░░░');
  expect(gameOfLife(example2)).toBe('███\n█░█\n███');
  expect(gameOfLife(example3)).toBe('░░░\n░█░\n░░░');
  expect(gameOfLife(example4)).toBe('░░░\n░█░\n░░░');
  expect(gameOfLife(glider)).toBe('░░░░░\n░░░░░\n░█░█░\n░░██░\n░░█░░');
  expect(gameOfLife(rowOf10)).toBe('░░████████░░\n░░████████░░\n░░████████░░');
  expect(gameOfLife(smallExploder)).toBe(
    '░░░░░\n░███░\n░█░█░\n░█░█░\n░░█░░\n░░░░░',
  );
  expect(gameOfLife(exploder)).toBe(
    '░░░░░░░\n░░█░█░░\n██░░░██\n███░███\n██░░░██\n░░█░█░░\n░░░░░░░',
  );
  expect(gameOfLife(lightweightSpaceship)).toBe(
    '░░░██░░\n░░████░\n░░██░██\n░░░░██░\n░░░░░░░\n░░░░░░░',
  );
  expect(gameOfLife(checkerboard)).toBe(
    '░███████░\n█░░░░░░░█\n█░░░░░░░█\n█░░░░░░░█\n█░░░░░░░█\n█░░░░░░░█\n░███████░',
  );
  expect(gameOfLife(tumbler)).toBe(
    '░░░░░░░░░\n░░██░██░░\n░░░░░░░░░\n░░░█░█░░░\n░░░█░█░░░\n██░█░█░██\n░██░░░██░\n░░░░░░░░░',
  );
  expect(gameOfLife(bigShape)).toBe(
    '░░░░░░░░░█░░░░░\n░░██░░░░█░█░░░░\n░░██░░░░█░░░░░░\n░█░░█░░██░░█░░░\n░█░██░░░█░█░█░░\n░░█░░░░░░░░███░\n░░░██░░░░█░░██░\n░░░░██░░░░░░░░░\n░░░░░█░░█░░░░░░\n░░░░░░░░░░░░░░░',
  );
});