## Problem
> write a function that takes an array of integers and sort them from smallest to biggest using quick sort algorithm
### Example1
> input: [5, 7, 3, 4, 20]

> output: [3, 4, 5, 7, 20]

### Example2
> input: [5, 7, 15, 25 12, 37, 19, 17, 27, 34]

> output [5, 7, 12, 15, 17,  19, 25, 27, 34, 37]

## idea behind algorithm
> quick sort takes an item in the array using a pivotIndex and ensure all elements in the array that are bigger than the value in the pivotIndex are taken to the right of the item while those smaller than the element are taken to the left of the item in the array, enabling us to position that element in it's actual spot. We repeat this over and over again using a different pivotIndex and stop point until the whole array is sorted. 

## Pseudo

1. write your pivot_helper function; see the pivot helper function folder in this repository to know what it does
2. write a function call quickSort that takes arr, left by default equals 0 and right by default equals arr.length
3. create a variable call pivot assigned to the call of pivot function that takes arr, left and right
4. call quickSort recursively by passing arr, left and pivotIndex, so as to handle the left side
5. call quckSort again recursively by passing arr, pivotIndex+1 and right, so as to handle the right side
6. wrap step 3, 4 and 5 in an if statement block that runs only if left < right
3. return arr outside if block 

## BigO of quickSort Solution

>Time complexity O(nlogn)

>Space complexity O(n)
