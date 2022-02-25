## Problem
> write a function that takes two sorted array and return a new sorted array of all the items in array 1 and 2

### Example1
> input: [6, 10, 12, 13, 21], [5, 15]
> output: [5, 6, 10, 12, 13, 15, 21]

### Example2
> input: [5, 7, 15, 25], [12, 17, 27, 34]
> output [5, 7, 12, 15, 17, 25, 27, 34]

## Pseudo

1. Write a function that takes two arrays, let say arr1 and arr2
2. Create two variables i and j to access items in arr1 and arr2
3. create a variable call newArr, which is the new sorted array we will return
4. Write a while loop that stops if arr1[i] and arr2[j] return undefined
5. Inside your while loop check if arr1[i] is less than arr2[j]
     - if so push arr1[i] to newArr and increament i by one
     - else push arr2[j] to newArr and increment j by one
6. return the newArr at the end of the function

## BigO of mergeTwoSortedArray Solution

> O(n+m)
