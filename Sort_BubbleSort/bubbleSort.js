function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        let noSwap = true;
        for (let j = 1; j < i; j++) {
            if (arr[j] < arr[j - 1]) {
                noSwap = false;
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            }
        }
        if (noSwap) {
            break;
        }
        console.log('arr', arr)
    }
    return arr
}

console.log(bubbleSort([
    0, 1, 3, 6, 7,
    4, 5, 8, 2, 9
  ]))