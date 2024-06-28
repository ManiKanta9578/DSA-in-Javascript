// Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.

let arr1 = [1,2,3];
let arr2 = [1,4,9];

const sameFrequency = (arr1, arr2) => {

    if(arr1.length !== arr2.length) return;

    const freqCounter1 = {};
    const freqCounter2= {};

    for(const val of arr1){
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }
    for(const val of arr2){
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }

    for (const key in freqCounter1) {
        if (!(key ** 2 in freqCounter2)) {
            return false;
        }
        if (freqCounter2[key ** 2] !== freqCounter1[key]) {
            return false;
        }
    }

    return true;

}

let result = sameFrequency(arr1,arr2);
console.log(result);