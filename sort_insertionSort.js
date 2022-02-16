//write a function that takes an array and sort the items from smallest to largest using insertion sort algorithm

// The idea behind sorting by insertion is to take each element in the array and 
// insert them in their actual position

//pseudo
//-- loop through each item in the array using i starting from 0 and less than arr.length
// create a variable call currentEl to get the value of the current Element using arr[i]
//--  start a nested loop using j starting from i-1 to 0
// -- the loop only runs and decrease if currentEl < arr[j]

// -- if the loop runs, insert the element in arr[j] in index j+1, this is because
// -- if the loop runs, arr[j] > currentEl

// At the bottom of the outer loop, set the currentEl to the element in the inner loop last index loop successfully run

// return arr

function insertionSort(arr) {
   for (let i = 1; i < arr.length; i++) {

      var currentEl = arr[i]
      let trackIndex = i;
      for (let j = i - 1; j >= 0 && arr[j] > currentEl; j--) {
         trackIndex = j
         arr[j + 1] = arr[j]
      }
       arr[trackIndex] = currentEl
   }

   return arr
}

console.log(insertionSort([2, 5, 1, 0, 12, 15, 19, 7, 4, 13]))