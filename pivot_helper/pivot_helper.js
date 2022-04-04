function pivot(arr, point) {

    let pivotIndex = 0;
    let pivotItem = arr[point];

    [arr[0], arr[point]] = [arr[point], arr[0]]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivotItem) {
            pivotIndex++;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]
        }
    }
    [arr[pivotIndex], arr[0]] = [arr[0], arr[pivotIndex]]
    return arr
}

console.log(pivot([15, 2, 25, 12, 30, 13, 21, 55, 19, 11, 33, 7, 5, 1, 16], 8));