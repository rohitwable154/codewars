# Coloured Triangles

`Games` `Language Fundamentals` `Strings`

[View on Edabit](https://edabit.com/challenge/9ahp527hHdHwXy7H9)

A coloured triangle is created from different rows of colours (Red, Green or Blue). Successive rows, each containing one fewer colour than the last, are generated by considering the two touching colours in the previous row. If these colours are identical, the same colour is used in the new row. If colours are different, the missing colour is used in the new row. This process continues untill a single colour is generated in the final row.

Different possibilities of colours are:

```
Colours Touching:        G G        B G        R G        B R
New colour:               G          R          B          G
```

With a bigger example:

```
R R G B R G B B
 R B R G B R B
  G G B R G G
   G R G B G
    B B R R
     B G R
      R B
       G
```

### Goal

- Create a function which takes **first row** of the triangle as an input and returns the **final colour** which would appear at the bottom row. In above example, given input "RRGBRGBB" will return "G".
- If you are only given one colour as the input, return that colour.
- There will be no exception handling case.

### Examples

```js
colouredTriangle("B") ➞ "B"

colouredTriangle("GB") ➞ "R"

colouredTriangle("RBRGBRB") ➞ "G"
```

### Notes

N/A
