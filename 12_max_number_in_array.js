// 11. Write a JavaScript program to find the maximum number in an array.
// 12. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
// 13. Write a JavaScript function to check if a given number is prime.
// 14. Write a JavaScript program to find the largest element in a nested array.

let input = [20, 10, 20, 4, 100];

//Using Brute force Approach
const maxNumber = (arr) => {
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

//using Math.max() and apply();

const maxNumber2 = (arr) => {
    if(arr.length === 0) {
        console.log("Array is empty");
    }
    return Math.max
}

console.log(maxNumber(input));

