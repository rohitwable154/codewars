/*  

Hexadecimal Color Mixer

In this challenge, you have to mix two or more colors to get a brand new color from their average rgb values.

Each color will be represented in its hexadecimal notation, and so as a string starting with # containing three pairs of alphanumeric characters, equals to the three rgb values (in base 16) of red, green and blue.

To obtain the new color, you need to get the arithmetic average of the sums of the individual red, green and blue values of each given color. When the average is a float number, you have to round it to the nearest integer (rounding up for decimal parts equal to 0.5).

Mixing yellow and red:

Hexadecimal code of yellow = "#FFFF00"
Hexadecimal code of red = "#FF0000"

yellow to RGB = Red: ["FF" = 255], Green: ["FF" = 255], Blue: ["00", 0]
red to RGB = Red: [""FF = 255], Green: ["00" = 0], Blue: ["00" = 0]

Average of Red values = (255 + 255) / 2 = 255
Average of Green values = (255 + 0) / 2 = 127.5 = 128
Average of Blue values = (0 + 0) / 2 = 0 = 0

Rgb of new color = [255, 128, 0]
Hexadecimal conversion = [255 = "FF"], [128 = "80"], [0 = "00"]

New color = "#FF8000" (orange)
Given an array of strings colors containing a series of hexadecimal codes, implement a function that returns the hexadecimal code of the new color, as a new string.

Examples
hexColorMixer(["#FFFF00", "#FF0000"]) ➞ "#FF8000"
// Orange

hexColorMixer(["#FFFF00", "#0000FF"]) ➞ "#808080"
// Medium gray

hexColorMixer(["#B60E73", "#0EAEB6"]) ➞ "#625E95"
// Lavender


Notes
Remember to round to the nearest integer the average of the rgb values.
You can test the color codes in any hexadecimal-colors utility site, such as this one that I used for testing cases.
All the given hexadecimal strings are valid; there are no exceptions to handle.
If you're interested in rgb colors and their validation, you can give also try this challenge made by @Pustur (open this link in a new tab to avoid issues due to the refresh of the page)

*/





//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function hexColorMixer(colors) {
    let rgbArr = [];

    let currentRGB;
    for (let color of colors) {
        currentRGB = [0, 0, 0];

        currentRGB[0] = parseInt(color.slice(1, 3), 16);
        currentRGB[1] = parseInt(color.slice(3, 5), 16);
        currentRGB[2] = parseInt(color.slice(5), 16);

        rgbArr.push(currentRGB);
    }

    let sumRed = 0;
    let sumGreen = 0;
    let sumBlue = 0;
    for (let i = 0; i < rgbArr.length; i++) {
        sumRed += rgbArr[i][0];
        sumGreen += rgbArr[i][1];
        sumBlue += rgbArr[i][2];
    }

    let avgRed = Math.round(sumRed / rgbArr.length).toString(16).toUpperCase();
    avgRed.length === 1 ? avgRed = "0" + avgRed : null;
    let avgGreen = Math.round(sumGreen / rgbArr.length).toString(16).toUpperCase();
    avgGreen.length === 1 ? avgGreen = "0" + avgGreen : null;
    let avgBlue = Math.round(sumBlue / rgbArr.length).toString(16).toUpperCase();
    avgBlue.length === 1 ? avgBlue = "0" + avgBlue : null;

    return `#${avgRed}${avgGreen}${avgBlue}`;
}

/*
Tools: parseInt(num, 10) hex => dec
			 number.toString(16) dec => hex
			 
1. Split colors elements into red, green, and blue pairs
2. convert all to decimal
3. take average of both reds, greens, and blues
4. convert averages to hex
5. return string with red, green, blue hex values
*/





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


const sum = arr => arr.reduce((total, num) => total + num, 0);

const mean = arr => sum(arr) / arr.length;

const transposeMatrix = arr => arr[0].map((_, y) => arr.map(row => row[y]));

const hexColorMixer = colors => {
    const rgbColors = colors.map(color => {
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);

        return [r, g, b];
    });
    const mixedColor = transposeMatrix(rgbColors)
        .map(channel =>
            Math.round(mean(channel))
            .toString(16)
            .padStart(2, '0'),
        )
        .join('');

    return `#${mixedColor}`.toUpperCase();
};




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


const hexColorMixer = colors => {
    let total = [0, 0, 0];

    for (const color of colors) {
        color
            .match(/(?!#).{2}/g)
            .map(num => parseInt(num, 16))
            .forEach((num, i) => total[i] += num);
    }

    const res = total
        .map(num =>
            Math.round(num / colors.length)
            .toString(16)
            .padStart(2, '0')
            .toUpperCase())
        .join('');

    return `#${res}`;
}






/*  


//Tests
Test.assertEquals(hexColorMixer(["#FFFF00", "#FF0000"]), "#FF8000", "Example #1")
Test.assertEquals(hexColorMixer(["#FFFF00", "#0000FF"]), "#808080", "Example #2")
Test.assertEquals(hexColorMixer(["#B60E73", "#0EAEB6"]), "#625E95", "Example #3")
Test.assertEquals(hexColorMixer(["#FF0000", "#00FF00", "#0000FF"]), "#555555")
Test.assertEquals(hexColorMixer(["#99CC00", "#663399", "#1A8191"]), "#5E8063")
Test.assertEquals(hexColorMixer(["#918381", "#D53B21", "#A54C83", "#DEFACF"]), "#BA817D")
Test.assertEquals(hexColorMixer(["#140A23", "#46B31E", "#CFDF08", "#263534", "#EAD1FB", "#235E02"]), "#65803F")
Test.assertEquals(hexColorMixer(["#FFFFFF", "#000000", "#000000", "#FFFFFF"]), "#808080")
Test.assertEquals(hexColorMixer(["#CCCCCC"]), "#CCCCCC")


//Console Output
Test Passed: Value == '#FF8000'
Test Passed: Value == '#808080'
Test Passed: Value == '#625E95'
Test Passed: Value == '#555555'
Test Passed: Value == '#5E8063'
Test Passed: Value == '#BA817D'
Test Passed: Value == '#65803F'
Test Passed: Value == '#808080'
Test Passed: Value == '#CCCCCC'


*/