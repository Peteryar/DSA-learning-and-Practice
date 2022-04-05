function pivot(arr, start = 0, end = arr.length) {
    let pivotIndex = start;
    let pivotItem = arr[start];
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivotItem) {
            pivotIndex++;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];

    return pivotIndex
}

function quickSort(arr, left = 0, right = arr.length) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex);
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

const data = Array.apply(null, {length:10000000}).map(a=>Math.floor(Math.random()*100))
console.log('mergeSortData===>', data)
console.log(quickSort(data))