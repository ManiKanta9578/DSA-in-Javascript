const bubbleSort = (arr) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                swapped = true;
            }
        }
    } while (swapped)
};

let arr = [-6, 20, 10, -2, 3]
bubbleSort(arr);
console.log(arr);

//Big-O = O(n^2)