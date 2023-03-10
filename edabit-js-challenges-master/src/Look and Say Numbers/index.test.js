/* eslint-disable no-loss-of-precision */

import lookAndSay from './index';

test('lookAndSay', () => {
  expect(lookAndSay(95)).toBe(555555555);
  expect(lookAndSay(231)).toBe('invalid');
  expect(lookAndSay(3132)).toBe(111222);
  expect(lookAndSay(13167)).toBe('invalid');
  expect(lookAndSay(17363)).toBe('invalid');
  expect(lookAndSay(44255)).toBe('invalid');
  expect(lookAndSay(61912)).toBe('invalid');
  expect(lookAndSay(70404)).toBe('invalid');
  expect(lookAndSay(72293)).toBe('invalid');
  expect(lookAndSay(72495)).toBe('invalid');
  expect(lookAndSay(74457)).toBe('invalid');
  expect(lookAndSay(75282)).toBe('invalid');
  expect(lookAndSay(76129)).toBe('invalid');
  expect(lookAndSay(101532)).toBe(5222);
  expect(lookAndSay(103131)).toBe(111111);
  expect(lookAndSay(120520)).toBe(200);
  expect(lookAndSay(123559)).toBe(255599999);
  expect(lookAndSay(151117)).toBe(517);
  expect(lookAndSay(155400)).toBe(544444);
  expect(lookAndSay(156414)).toBe(54444444);
  expect(lookAndSay(162067)).toBe(600777777);
  expect(lookAndSay(163026)).toBe(600066);
  expect(lookAndSay(163210)).toBe(62220);
  expect(lookAndSay(163909)).toBe(6999);
  expect(lookAndSay(169775)).toBe(67777777775555555);
  expect(lookAndSay(180236)).toBe(8666);
  expect(lookAndSay(217241)).toBe(1122222221111);
  expect(lookAndSay(217693)).toBe(116666666333333333);
  expect(lookAndSay(226413)).toBe(224444443);
  expect(lookAndSay(238443)).toBe(33444444443333);
  expect(lookAndSay(270019)).toBe(779);
  expect(lookAndSay(285078)).toBe(88000008888888);
  expect(lookAndSay(285728)).toBe(887777788);
  expect(lookAndSay(296201)).toBe(99222222);
  expect(lookAndSay(296562)).toBe(99555555222222);
  expect(lookAndSay(297807)).toBe(998888888);
  expect(lookAndSay(313317)).toBe(1113337);
  expect(lookAndSay(317137)).toBe(1111111111777);
  expect(lookAndSay(332533)).toBe(33355333);
  expect(lookAndSay(345878)).toBe(444888888888888);
  expect(lookAndSay(346453)).toBe(44444444433333);
  expect(lookAndSay(347173)).toBe(44411111113333333);
  expect(lookAndSay(382177)).toBe(888117777777);
  expect(lookAndSay(392936)).toBe(99999666);
  expect(lookAndSay(404094)).toBe(444444444);
  expect(lookAndSay(417528)).toBe(1111555555588);
  expect(lookAndSay(418145)).toBe(1111111111115555);
  expect(lookAndSay(420899)).toBe(2222999999999);
  expect(lookAndSay(430222)).toBe(333322);
  expect(lookAndSay(436441)).toBe(33334444441111);
  expect(lookAndSay(441746)).toBe(444476666);
  expect(lookAndSay(446972)).toBe(44449999992222222);
  expect(lookAndSay(450718)).toBe(55558);
  expect(lookAndSay(473536)).toBe(7777555666);
  expect(lookAndSay(476240)).toBe(77772222220000);
  expect(lookAndSay(476865)).toBe(7777888888555555);
  expect(lookAndSay(488280)).toBe(88882222222200000000);
  expect(lookAndSay(493000)).toBe(9999000);
  expect(lookAndSay(522767)).toBe(2222277777777);
  expect(lookAndSay(536460)).toBe(33333444444000000);
  expect(lookAndSay(541146)).toBe(4444416666);
  expect(lookAndSay(556470)).toBe(555554444440000000);
  expect(lookAndSay(580787)).toBe(8888877777777);
  expect(lookAndSay(591173)).toBe(9999913333333);
  expect(lookAndSay(613247)).toBe(1111112227777);
  expect(lookAndSay(614193)).toBe(1111111111333333333);
  expect(lookAndSay(614318)).toBe(11111133338);
  expect(lookAndSay(615664)).toBe(11111166666444444);
  expect(lookAndSay(634315)).toBe(33333333335);
  expect(lookAndSay(641719)).toBe(44444479);
  expect(lookAndSay(664940)).toBe(66666699990000);
  expect(lookAndSay(665956)).toBe(6666669999966666);
  expect(lookAndSay(689301)).toBe(888888333333333);
  expect(lookAndSay(701552)).toBe(522222);
  expect(lookAndSay(708543)).toBe(555555553333);
  expect(lookAndSay(724767)).toBe(22222227777777777);
  expect(lookAndSay(725455)).toBe(22222224444455555);
  expect(lookAndSay(729472)).toBe(22222224444444442222222);
  expect(lookAndSay(733257)).toBe(333333322277777);
  expect(lookAndSay(775203)).toBe(777777722222);
  expect(lookAndSay(786497)).toBe(8888888444444777777777);
  expect(lookAndSay(788200)).toBe(888888822222222);
  expect(lookAndSay(798734)).toBe(999999977777777444);
  expect(lookAndSay(818412)).toBe(11111111444444442);
  expect(lookAndSay(826222)).toBe(2222222222222222);
  expect(lookAndSay(830756)).toBe(3333333366666);
  expect(lookAndSay(830926)).toBe(3333333366);
  expect(lookAndSay(832349)).toBe(33333333339999);
  expect(lookAndSay(837641)).toBe(3333333366666661111);
  expect(lookAndSay(842309)).toBe(4444444433);
  expect(lookAndSay(851385)).toBe(55555555355555555);
  expect(lookAndSay(859381)).toBe(5555555533333333311111111);
  expect(lookAndSay(866934)).toBe(66666666999999444);
  expect(lookAndSay(880440)).toBe(888888880000);
  expect(lookAndSay(888322)).toBe(888888883333333322);
  expect(lookAndSay(890917)).toBe(999999997);
  expect(lookAndSay(894468)).toBe(999999994444888888);
  expect(lookAndSay(909861)).toBe(888888888111111);
  expect(lookAndSay(926748)).toBe(2222222227777778888);
  expect(lookAndSay(933525)).toBe(33333333355555);
  expect(lookAndSay(936667)).toBe(333333333666666777777);
  expect(lookAndSay(938773)).toBe(333333333777777773333333);
  expect(lookAndSay(953823)).toBe(55555555588833);
  expect(lookAndSay(976363)).toBe(777777777333333333333);
  expect(lookAndSay(1213141516171819)).toBe(23456789);
});
