## Problem
> write a function that takes a number and return the number of digits it has
### Example1
> input: 50

> output: 2

### Example2
> input: 1010

> output 4

### Example3
> input: 0

> output 1

## idea behind algorithm
This algorithm is required in the radix sort algorithm

## Pseudo

1. write a function that takes numb as parameter
2. create a variable call counter assigned  to 1
3. create a variable call tempVal assigned to numb
4. write a while loop that runs as far as tempVal/10 >= 1
    - increament counter by 1
    - reassign tempVal to be tempVal/10
## BigO of quickSort Solution

>Time complexity O(n) where n is the length of the number

>Space complexity O(1)
