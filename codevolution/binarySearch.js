//Given an sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

// Binary search pseudocode

// If the array is empty, return -1 as the element cannot be found. 
// If the array has elements, find the middle element in the array. 
// If target is equal to the middle element, return the middle element index. 
// If target is less than the middle element, binary search left half of the array. 
// If target is greater than middle element, binary search right half of the

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        }
        if (arr[mid] > target) {
            right = mid - 1;
        }
    }
    return -1;
};

console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));