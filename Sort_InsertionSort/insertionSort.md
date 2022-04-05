## Problem
> write a function that takes an array of integers and sort them from smallest to biggest using insertion sort algorithm
### Example1
> input: [5, 7, 3, 4, 20]

> output: [3, 4, 5, 7, 20]

### Example2
> input: [5, 7, 15, 25 12, 37, 19, 17, 27, 34]

> output [5, 7, 12, 15, 17,  19, 25, 27, 34, 37]

## idea behind algorithm
> insertion sort, sorts the array by taking each item in the array and inserting it in its actual position

## Pseudo

1. Write a function that takes arr as input
2. loop through each item in the array using i starting from 1 and less than arr.length
3. create a variable call currentEl to get the value of the current Element using arr[i]
4. start a nested loop using j starting from i-1 to 0, the loop only runs and decrease if currentEl < arr[j]
5. if the loop runs, insert the element in arr[j] at index of j+1, this is because
if the loop runs, arr[j] > currentEl
6. At the bottom of the outer loop, set the currentEl to the inner loop last index at which the loop break

7. finally return arr as all element are at their required position.

## BigO of insertionSort Solution

>Time complexity O(n^2)

>Space complexity O(1)
