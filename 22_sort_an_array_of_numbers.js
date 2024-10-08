//Ascending order

const bubbleSortAsc = (arr) => {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSortAsc(arr));

//Descending order

const bubbleSortDes = (arr) => {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const arr2 = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSortDes(arr2));