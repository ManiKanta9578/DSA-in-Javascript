// Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?

const mergeTwoArrays = (arr1, arr2) => {
    let mergeArray = [...arr1, ...arr2];

    return mergeArray.sort((a, b) => a - b);
}

let arr1 = [0, 3, 4, 31];
let arr2 = [4, 6, 30];

console.log(mergeTwoArrays(arr1, arr2));

// Alternative

const mergeSort = (arr1, arr2) => {
    let mergedArr = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
    }

    return mergedArr;
}

console.log(mergeSort([0,3,4,31],[4,6,30]));