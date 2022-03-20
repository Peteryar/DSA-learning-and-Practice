function selectionSort(arr){
    for(let i = 0; i<arr.length; i++){
        let smallIndex = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[smallIndex] > arr[j]){
                index = j
            }
        }
        [arr[i], arr[smallIndex]] = [arr[smallIndex], arr[i]];
    }
    return arr
}

const data = Array.apply(null, {length:100000}).map(a=>Math.floor(Math.random()*1000000))
console.log('mergeSortData===>', data)

console.log(selectionSort(data));