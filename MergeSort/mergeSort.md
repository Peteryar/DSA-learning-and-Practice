## Problem
> write a function that takes an array of integers and sort them from smallest to biggest using merge sort algorithm
### Example1
> input: [5, 7, 3, 4, 20]
> output: [3, 4, 5, 7, 20]

### Example2
> input: [5, 7, 15, 25 12, 37, 19, 17, 27, 34]
> output [5, 7, 12, 15, 17,  19, 25, 27, 34, 37]

## Pseudo

1. Write a function that takes arr as input
2. write or import your mergeTwoSorted array algorithm as we will be using it here
3. create a variable call newArr set to an empty array
4. split input array items down to array of  each item as an array
   - This can be done using for loop that loops through each item in the array and push it as an array into newArr
5. write a recursive function that takes in new Array
6. Recursive function should
     - return newArr[0] if newArr.length  is less than or equal zero
     - sets newArr to an empty array
     - if newArr.length > 1, run a forLoop that starts by 0 and increament itself by 2 until it hits the length of newArr
        - push into newArr what is return from passing newArr[i] and newArr[i+1]|| emptyArr if newArr[i+1] is undefined into MergedTwoSorted Array
    -  return the function by passing newArr as argument, this will only run if newArr.length is still greater than 1

## BigO of mergeSort Solution

> O(nlogn)
