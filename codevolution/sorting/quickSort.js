const quickSort = (arr) => {
    if (arr.length < 2) return arr;

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
};

//worst case - O(n^2)
//average case - O(nlogn)

let arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr));