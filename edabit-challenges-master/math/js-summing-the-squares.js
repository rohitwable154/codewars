function squaresSum(n) {
	return (Array.from(new Array(n), (num, i) => (i + 1) ** 2)).reduce((acc, curVal) => acc + curVal)
}

squaresSum(1) // 1
squaresSum(2) // 5
squaresSum(3) // 14
squaresSum(4) // 30
squaresSum(5) // 55
squaresSum(6) // 91
squaresSum(7) // 140
squaresSum(8) // 204
squaresSum(9) // 285
squaresSum(10) // 385
squaresSum(11) // 506
squaresSum(12) // 650
squaresSum(13) // 819
squaresSum(14) // 1015
squaresSum(15) // 1240
squaresSum(16) // 1496
squaresSum(17) // 1785
squaresSum(18) // 2109
squaresSum(19) // 2470
squaresSum(20) // 2870
squaresSum(21) // 3311
squaresSum(22) // 3795
squaresSum(23) // 4324
squaresSum(24) // 4900
squaresSum(25) // 5525
squaresSum(26) // 6201
squaresSum(27) // 6930
squaresSum(28) // 7714
squaresSum(29) // 8555
squaresSum(30) // 9455
squaresSum(31) // 10416
squaresSum(32) // 11440
squaresSum(33) // 12529
squaresSum(34) // 13685
squaresSum(35) // 14910
squaresSum(36) // 16206
squaresSum(37) // 17575
squaresSum(38) // 19019
squaresSum(39) // 20540
squaresSum(40) // 22140
squaresSum(41) // 23821
squaresSum(42) // 25585
squaresSum(43) // 27434
squaresSum(44) // 29370
squaresSum(45) // 31395
squaresSum(46) // 33511
squaresSum(47) // 35720
squaresSum(48) // 38024
squaresSum(49) // 40425
squaresSum(50) // 42925
squaresSum(51) // 45526
squaresSum(52) // 48230
squaresSum(53) // 51039
squaresSum(54) // 53955
squaresSum(55) // 56980
squaresSum(56) // 60116
squaresSum(57) // 63365
squaresSum(58) // 66729
squaresSum(59) // 70210
squaresSum(60) // 73810
squaresSum(61) // 77531
squaresSum(62) // 81375
squaresSum(63) // 85344
squaresSum(64) // 89440
squaresSum(65) // 93665
squaresSum(66) // 98021
squaresSum(67) // 102510
squaresSum(68) // 107134
squaresSum(69) // 111895
squaresSum(70) // 116795
squaresSum(71) // 121836
squaresSum(72) // 127020
squaresSum(73) // 132349
squaresSum(74) // 137825
squaresSum(75) // 143450
squaresSum(76) // 149226
squaresSum(77) // 155155
squaresSum(78) // 161239
squaresSum(79) // 167480
squaresSum(80) // 173880
squaresSum(81) // 180441
squaresSum(82) // 187165
squaresSum(83) // 194054
squaresSum(84) // 201110
squaresSum(85) // 208335
squaresSum(86) // 215731
squaresSum(87) // 223300
squaresSum(88) // 231044
squaresSum(89) // 238965
squaresSum(90) // 247065
squaresSum(91) // 255346
squaresSum(92) // 263810
squaresSum(93) // 272459
squaresSum(94) // 281295
squaresSum(95) // 290320
squaresSum(96) // 299536
squaresSum(97) // 308945
squaresSum(98) // 318549
squaresSum(99) // 328350
squaresSum(100) // 338350

// made by @Joshua Señoron
