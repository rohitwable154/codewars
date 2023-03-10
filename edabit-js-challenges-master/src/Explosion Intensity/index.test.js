import boomIntensity from './index';

test('boomIntensity', () => {
  expect(boomIntensity(0)).toBe('boom');
  expect(boomIntensity(1)).toBe('boom');
  expect(boomIntensity(2)).toBe('Boom!');
  expect(boomIntensity(3)).toBe('Booom');
  expect(boomIntensity(4)).toBe('Boooom!');
  expect(boomIntensity(5)).toBe('BOOOOOM');
  expect(boomIntensity(6)).toBe('Boooooom!');
  expect(boomIntensity(7)).toBe('Booooooom');
  expect(boomIntensity(8)).toBe('Boooooooom!');
  expect(boomIntensity(9)).toBe('Booooooooom');
  expect(boomIntensity(10)).toBe('BOOOOOOOOOOM!');
  expect(boomIntensity(11)).toBe('Booooooooooom');
  expect(boomIntensity(12)).toBe('Boooooooooooom!');
  expect(boomIntensity(13)).toBe('Booooooooooooom');
  expect(boomIntensity(14)).toBe('Boooooooooooooom!');
  expect(boomIntensity(15)).toBe('BOOOOOOOOOOOOOOOM');
  expect(boomIntensity(16)).toBe('Boooooooooooooooom!');
  expect(boomIntensity(17)).toBe('Booooooooooooooooom');
  expect(boomIntensity(18)).toBe('Boooooooooooooooooom!');
  expect(boomIntensity(19)).toBe('Booooooooooooooooooom');
  expect(boomIntensity(20)).toBe('BOOOOOOOOOOOOOOOOOOOOM!');
  expect(boomIntensity(21)).toBe('Booooooooooooooooooooom');
  expect(boomIntensity(22)).toBe('Boooooooooooooooooooooom!');
  expect(boomIntensity(23)).toBe('Booooooooooooooooooooooom');
  expect(boomIntensity(24)).toBe('Boooooooooooooooooooooooom!');
  expect(boomIntensity(25)).toBe('BOOOOOOOOOOOOOOOOOOOOOOOOOM');
  expect(boomIntensity(26)).toBe('Boooooooooooooooooooooooooom!');
  expect(boomIntensity(27)).toBe('Booooooooooooooooooooooooooom');
  expect(boomIntensity(28)).toBe('Boooooooooooooooooooooooooooom!');
  expect(boomIntensity(29)).toBe('Booooooooooooooooooooooooooooom');
  expect(boomIntensity(30)).toBe('BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!');
  expect(boomIntensity(31)).toBe('Booooooooooooooooooooooooooooooom');
  expect(boomIntensity(32)).toBe('Boooooooooooooooooooooooooooooooom!');
  expect(boomIntensity(33)).toBe('Booooooooooooooooooooooooooooooooom');
  expect(boomIntensity(34)).toBe('Boooooooooooooooooooooooooooooooooom!');
  expect(boomIntensity(35)).toBe('BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM');
  expect(boomIntensity(36)).toBe('Boooooooooooooooooooooooooooooooooooom!');
  expect(boomIntensity(37)).toBe('Booooooooooooooooooooooooooooooooooooom');
  expect(boomIntensity(38)).toBe('Boooooooooooooooooooooooooooooooooooooom!');
  expect(boomIntensity(39)).toBe('Booooooooooooooooooooooooooooooooooooooom');
  expect(boomIntensity(40)).toBe('BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!');
  expect(boomIntensity(41)).toBe('Booooooooooooooooooooooooooooooooooooooooom');
  expect(boomIntensity(42)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(43)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(44)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(45)).toBe(
    'BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM',
  );
  expect(boomIntensity(46)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(47)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(48)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(49)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(50)).toBe(
    'BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!',
  );
  expect(boomIntensity(51)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(52)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(53)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(54)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(55)).toBe(
    'BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM',
  );
  expect(boomIntensity(56)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(57)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(58)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(59)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(60)).toBe(
    'BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!',
  );
  expect(boomIntensity(61)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(62)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(63)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(64)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(65)).toBe(
    'BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM',
  );
  expect(boomIntensity(66)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(67)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(68)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(69)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(70)).toBe(
    'BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!',
  );
  expect(boomIntensity(71)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(72)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(73)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(74)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(75)).toBe(
    'BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM',
  );
  expect(boomIntensity(76)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(77)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(78)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(79)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(80)).toBe(
    'BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!',
  );
  expect(boomIntensity(81)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(82)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(83)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(84)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(85)).toBe(
    'BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM',
  );
  expect(boomIntensity(86)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(87)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(88)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(89)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(90)).toBe(
    'BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!',
  );
  expect(boomIntensity(91)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(92)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(93)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(94)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(95)).toBe(
    'BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM',
  );
  expect(boomIntensity(96)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(97)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(98)).toBe(
    'Boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom!',
  );
  expect(boomIntensity(99)).toBe(
    'Booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooom',
  );
  expect(boomIntensity(100)).toBe(
    'BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!',
  );
});
