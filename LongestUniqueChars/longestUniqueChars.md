## Problem
> write a function that takes in a string and return the first longest sequence of unique characters in the string

### Example1
> input : school

> output scho

### Example 2

> input : blackberry

> output : lackber

### Example 3

> input : examination

> output : examin

## Pseudo

1. Write a function that takes str as input call getLongestUniqueChars
2. create a variable call longStr set to an empty string
3. create a variable call counter set to an empty {}
3. write a loop i that starts from 0 but less than arr.length;
  - create a variable call tempLongChars set to str[i]
  - write a nested  loop j that starts from i+1 but less than arr.length
    - write a condition that check if 
  - swap the smallest number to arr[i] position
  - repeat until the whole array in sorted
3. return arr at the end

## BigO of selectionSort Solution

>Time complexity O(n^2)

>Space complexity O(1)