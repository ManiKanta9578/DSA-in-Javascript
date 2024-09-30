// Find the 2nd largest element from a given array ? [100,20,112,22]

const secondLargestNumber = (arr) => {
    if (arr.length < 2) return;

    let largest = -Infinity
    let sencondLargest = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            sencondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > sencondLargest && arr[i] !== largest) {
            sencondLargest = arr[i];
        }
    }
    return sencondLargest;
}

let arr = [100, 20, 112, 22];
console.log(secondLargestNumber(arr));