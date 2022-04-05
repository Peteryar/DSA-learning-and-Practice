## Problem
> write a function that takes an  integer and a position of a digit and return the digit
### Example1
> input: 5, 0

> output: 5

### Example2
> input: 5141, 2

> output 1

## Implication
> This algorithm is an helper function in the radix sort algorithm

## Pseudo

1. Write a function that takes number and pos as input
2. create a variable call base that equals 10 * 10^pos
3. create a variable call remainder that equals number modulus base
4. if number is less than 0
  - reassign remainder to be -1 * remainder, this is to ensure the negative sign is removed
5. create a variable call digit that equals Math.floor/it's equivalent of remainder divided by 10^pos
6. return digit


## BigO of getDigit Solution
Time complexity
> O(1)
space complexity
> O(1)
