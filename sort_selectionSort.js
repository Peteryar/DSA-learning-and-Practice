//write a function that takes an array and sort the items from smallest to largest using selection sort algorithm

//Pseudo algo
//loop through the array from i=0 to i<array.length
//create a variable call minIndex inside the outer loop
//Have a nested array from j = i+1 to array.length
//compare  arr[i] to arr[j] in the nested loop
//set the minimum value index btw the comparison to minIndex
//at the end of the each outer loop, check  if the minIndex change, if does swipe the minIndex value to the value in index i


function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) { //outer loop for each item in the array
        let minIndex;
        for (let j = i; j < arr.length; j++) {//nested loop that runs through for each outer loop run

            //set the value of min to arr[j] if arr[j] is smaller, note min will be arr[j] for the first run
            minIndex = arr[j] < arr[minIndex] ? j : minIndex || j

            //console.log(arr[minIndex], arr[j])
        }
        if (i !== minIndex) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
}

console.log(selectionSort([5, 2, 3, 1, 9, 0]))

//[1, 2, 3, 5]

