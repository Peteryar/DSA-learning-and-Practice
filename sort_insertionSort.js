//write a function that takes an array and sort the items from smallest to largest using insertion sort algorithm

//pseudo
//-- loop through each item in the array using i starting from 0 and less than arr.length
//--  start a nested loop from i+1 to 0
// compare item at j to j-1 and insert it in it's possible position

function insertionSort(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j=i+1; j>0; j--){
            if(!arr[j]){
                break
            }
            if(arr[j] < arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            }
             console.log(arr)
        }
        console.log('outer---------->')
    }

    return arr
}

insertionSort([1, 2, 3, 4, 5])