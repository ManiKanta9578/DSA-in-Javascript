// Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?

const mergeTwoArrays = (arr1, arr2) => {
    let mergeArray = [...arr1, ...arr2];

    return mergeArray.sort((a,b) => a - b);
}

let arr1 = [0,3,4,31];
let arr2 = [4,6,30];

console.log(mergeTwoArrays(arr1,arr2));