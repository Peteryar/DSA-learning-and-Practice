//write a function that takes an array and sort the items from smallest to largest using insertion sort algorithm

//pseudo
//-- loop through each item in the array using i starting from 0 and less than arr.length
//--  start a nested loop from i+1 to 0
// compare item at j to j-1 and insert it in it's possible position

function insertionSort(arr){
   for(let i = 1; i<arr.length; i++){
       var currentEl = arr[i]

       for(var j = i-1; j>= 0 && arr[j] > currentEl; j-- ){
          arr[j+1] = arr[j]
          console.log('j', j)
       }
      console.log('arr', arr)
       arr[j] = currentEl
   } 

   return arr
}

console.log(insertionSort([2, 5, 3, 7]))