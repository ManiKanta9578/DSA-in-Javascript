//Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

const linearSearch = (arr, target) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
};

console.log(linearSearch([9,7,5,2,4,6,8], 2));
console.log(linearSearch([9,7,5,2,4,6,8], 8));
console.log(linearSearch([9,7,5,2,4,6,8], 1));