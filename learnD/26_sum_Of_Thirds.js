/* Given an array of integers arr, your task is to calculate the sum of every third number in the array, 
starting from the first one. Specifically, you should sum the elements at indices 0, 3, 6, 9, and so on.*/


const sumOfThirds = (arr) => {
    let result = 0;

    for (let i = 0; i < arr.length; i += 3) {
        result += arr[i];
    }
    return result;
};

console.log(sumOfThirds([1, 2, 3, 4, 5, 6, -10]));

