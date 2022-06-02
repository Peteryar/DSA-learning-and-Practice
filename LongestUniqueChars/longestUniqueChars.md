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

## Pseudo 1

> naive Aproach

1. Write a function that takes str as input call getLongestUniqueChars
2. create a variable call long set to an empty string
3. create a variable call counter set to an empty {}
4. create two variables p1 and p2 set initial to  0
5. create a variable call temp;
6. write a while loop that run while p2 is less than str.length
  - if there is no key of str[p2] in the counter object
    - add it to the the counter object and set its value to be p2+1
    - increament p2 by 1
    - set temp to be str.slice(p1, p2)
  - if there is a key of str[p2] in the counter object
    - check if the value of counter[str[p2]] > i
    - set i to be:
      1. if the value of str[counter[str[j]]] == str[j], set i to j
      2. else set i to be counter[str[j]];
    - increament p2 by 1
    - set temp to be str.slice(i, j);
  - set long to be temp if temp is greater than long else let it remain long.
7. return long

## BigO of Algorithm

> Time complexity O(n)

> Space complexity O(k) where k is the size of the counter;
