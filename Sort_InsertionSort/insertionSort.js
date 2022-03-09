function insertionSort(arr){
    for(let i=1; i<arr.length; i++){

        let currentVal = arr[i];

        for(var j=i-1; j>=0 && arr[j]>currentVal; j--){
            arr[j+1] = arr[j]
        }

        arr[j+1] = currentVal
    }
    return arr;
}

const data = Array.apply(null, {length:100}).map(a=>Math.floor(Math.random()*100))
console.log('mergeSortData===>', data)

console.log(insertionSort(data))