## Problem
> write a function that takes an array of integers and sort them from smallest to biggest using bubble sort algorithm
### Example1
> input: [5, 7, 3, 4, 20]
> output: [3, 4, 5, 7, 20]

### Example2
> input: [5, 7, 15, 25 12, 37, 19, 17, 27, 34]
> output [5, 7, 12, 15, 17,  19, 25, 27, 34, 37]

## idea behind algorithm
> bubble sort, sorts the array by carrying bigger numbers up the end of the array over and over again until the array is sorted

## Pseudo

1. Write a function that takes arr as input
2. write a loop i that starts from arr.length to 0
  - creat a variable call noSwap to true inside the outer loop.
  - write a nested  loop j that starts from 0 but less than i
  - if arr[j] < arr[j-1]: swap arr[j] to arr[j-1]
     - Also set noSwap to false if there is a swap
  - break out of the outer loop if noSwap so as to avoid unnecessary loop after array is already sorted
3. return arr at the end

## BigO of bubbleSort Solution
Time complexity
> O(n)
space complexity
> O(1)