## Problem
> write a function that takes an array of integers and a pivot index or point number and return a new array where all the numbers greater than the pivot index value are on the right side while those smaller are on the left side of the pivot index value
### Example1
> input: [5, 7, 3, 4, 20], 0
> output: [3, 4, 5, 7, 20]

### Example2
> input: [5, 7, 15, 25 12, 37, 19, 17, 27, 34], 3

> output [5, 7, 15, 12, 19, 17, 25, 37, 27, 34]

## idea behind algorithm
> This algorithm is helpful in writing quick sort algorithm

## Pseudo

1. Write a function that takes arr and point as input where point is the index in which we use as our pivot
2. create a variable call pivotItem and set it to arr[point], which gives us the value that we are using as our pivot
3. swap the pivotItem and arr[0], so that our pivotItem will be in the zero index of the array, so as to make it easy for us to compare with every value in the array
4. create a variable call pivotIndex and set it to zero
5. write a forloop starting from 1 but stop at arr.length - 1
  - if arr[i] < pivotItem
    - increament pivotIndex by 1 and
    - swap arr[pivotIndex] and arr[i]
6. Outside the forloop swap the arr[0] and arr[pivotIndex]
3. return arr at the end

## BigO of pivot_helper Solution

> Time complexity O(n)

> space complexity O(1)
