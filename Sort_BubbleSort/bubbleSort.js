function bubbleSort(arr) {
    for (let i = arr.length; i >= 0; i--) {
        let noSwap = true;
        for (let j = 1; j < i; j++) {
            if (arr[j] < arr[j-1]) {
                noSwap = false;
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            }
        }
        if(noSwap){
            break
        }
    }
    return arr
}
const data = Array.apply(null, { length: 100000 }).map(a => Math.floor(Math.random() * 100000))
console.log('bubbleSortData===>', data)
console.log(bubbleSort(data))