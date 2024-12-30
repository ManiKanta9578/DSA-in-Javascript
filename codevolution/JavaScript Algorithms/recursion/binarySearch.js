const recursiveBinarySearch = (arr, target) => {
    return search(arr, target, 0, arr.length - 1);
};

const search = (arr, target, left, right) => {
    if (left > right) return -1;

    let mid = Math.floor((left + right) / 2);

    if (target === arr[mid]) return mid;

    if (target > arr[mid]) {
        return search(arr, target, mid + 1, right);
    } else {
        return search(arr, target, left, mid - 1);
    }
};

//Big-O = O(logn);

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));