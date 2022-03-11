function bubbleSort(arr) {
    for (let i = arr.length; i >= 0; i--) {
        let noSwap = true;
        for (let j = 1; j < i; j++) {
             console.log('compare', arr[j], arr[j-1])
            if (arr[j] < arr[j-1]) {
                noSwap = false;
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            }
        }
        if(noSwap){
            break
        }
        console.log(i, 'arr--------->', arr)
    }
    return arr
}
const data = Array.apply(null, { length: 100000 }).map(a => Math.floor(Math.random() * 10))
console.log('mergeSortData===>', data)
console.log(bubbleSort([5, 3, 2, 1, 6, 7, 8, 4, 9, 10, 12, 13, 14, 19]))