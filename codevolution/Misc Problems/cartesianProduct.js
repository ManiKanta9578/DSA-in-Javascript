const cartesianProduct = (arr1, arr2) => {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]]);
        }
    }
    return result;
};

let arr1 = [1, 2];
let arr2 = [3, 4, 5];
console.log(cartesianProduct(arr1, arr2));

//arr1.length not equal to arr2.length so

//Big-O = O(mn)