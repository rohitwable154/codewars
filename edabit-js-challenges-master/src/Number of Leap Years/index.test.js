import numLeapYears from './index';

test('numLeapYears', () => {
  expect(numLeapYears('35-602')).toBe(137);
  expect(numLeapYears('2000-2020')).toBe(6);
  expect(numLeapYears('1980-1984')).toBe(2);
  expect(numLeapYears('38-1709')).toBe(405);
  expect(numLeapYears('1600-2000')).toBe(98);
  expect(numLeapYears('772-1849')).toBe(262);
  expect(numLeapYears('107-1821')).toBe(416);
  expect(numLeapYears('1325-1409')).toBe(20);
  expect(numLeapYears('801-2232')).toBe(347);
  expect(numLeapYears('1813-4354')).toBe(616);
  expect(numLeapYears('1803-3828')).toBe(492);
  expect(numLeapYears('295-6278')).toBe(1451);
  expect(numLeapYears('2912-6566')).toBe(887);
  expect(numLeapYears('2665-3338')).toBe(163);
  expect(numLeapYears('1886-3577')).toBe(410);
  expect(numLeapYears('2951-4523')).toBe(381);
  expect(numLeapYears('2036-3126')).toBe(264);
  expect(numLeapYears('1285-5033')).toBe(908);
  expect(numLeapYears('1716-4551')).toBe(688);
  expect(numLeapYears('385-7421')).toBe(1706);
  expect(numLeapYears('925-8529')).toBe(1844);
  expect(numLeapYears('2642-5884')).toBe(787);
  expect(numLeapYears('1084-4877')).toBe(921);
  expect(numLeapYears('2934-6071')).toBe(761);
  expect(numLeapYears('647-6876')).toBe(1512);
  expect(numLeapYears('478-9783')).toBe(2256);
  expect(numLeapYears('1561-3415')).toBe(449);
  expect(numLeapYears('2535-4282')).toBe(424);
  expect(numLeapYears('2920-6439')).toBe(854);
  expect(numLeapYears('728-6018')).toBe(1284);
  expect(numLeapYears('2489-3010')).toBe(125);
  expect(numLeapYears('1224-8090')).toBe(1666);
  expect(numLeapYears('2486-7607')).toBe(1241);
  expect(numLeapYears('2228-7099')).toBe(1182);
  expect(numLeapYears('1349-6325')).toBe(1206);
  expect(numLeapYears('1006-5181')).toBe(1013);
  expect(numLeapYears('2876-9210')).toBe(1536);
  expect(numLeapYears('1189-5481')).toBe(1041);
  expect(numLeapYears('2651-7572')).toBe(1194);
  expect(numLeapYears('1602-6986')).toBe(1306);
  expect(numLeapYears('1265-7254')).toBe(1452);
  expect(numLeapYears('2630-7508')).toBe(1183);
  expect(numLeapYears('1127-5813')).toBe(1137);
  expect(numLeapYears('1154-6034')).toBe(1184);
  expect(numLeapYears('1378-8971')).toBe(1841);
  expect(numLeapYears('1399-9450')).toBe(1952);
  expect(numLeapYears('2031-7773')).toBe(1393);
  expect(numLeapYears('1790-7283')).toBe(1332);
  expect(numLeapYears('2074-8842')).toBe(1641);
  expect(numLeapYears('2609-9866')).toBe(1760);
  expect(numLeapYears('1601-9234')).toBe(1851);
  expect(numLeapYears('1664-8395')).toBe(1632);
  expect(numLeapYears('2768-9052')).toBe(1525);
});
