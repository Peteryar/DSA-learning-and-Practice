## Problem
> write a function that takes an array of integers and sort them from smallest to biggest using selection sort algorithm
### Example1
> input: [5, 7, 3, 4, 20]
> output: [3, 4, 5, 7, 20]

### Example2
> input: [5, 7, 15, 25 12, 37, 19, 17, 27, 34]
> output [5, 7, 12, 15, 17,  19, 25, 27, 34, 37]

## idea behind algorithm
> selection sort, sorts the array by selecting the smallest number and taking it to it's actual sorted position

## Pseudo

1. Write a function that takes arr as input
2. write a loop i that starts from 0 but less than arr.length;
  - write a nested  loop j that starts from i+1 but less than arr.length
  - create a variable call smallIndex to track the smallest number in each inner loop run
  - swap the smallest number to arr[i] position
  - repeat until the whole array in sorted
3. return arr at the end

## BigO of selectionSort Solution
Time complexity
> O(n)
space complexity
> O(1)