## Problem
> write a function that takes in a string of  characters abc, and reduced the string to the lowest posible term of the 
the following condition: oncurrence of two unique characters change to the the third character. two repetitive occurence
does not change. the function should return the last inreducable state of the string length.

### Example1
> input : abcabc

> output 2

this is becus ab chage to c which makes the string to be ccabc, cc can't change, ca change to b, which reduced the 
string to be cbbc, cb change to a which reduced string to be abc, which change to cc and return 2

input2: cccc
output: 4
