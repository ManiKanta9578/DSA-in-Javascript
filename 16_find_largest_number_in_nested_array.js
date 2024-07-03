// find the largest element in a nested array.

function findLargestElement(arr) {
    let largest = -Infinity;
  
    function findLargest(arr) {
      for (let element of arr) {
        if (Array.isArray(element)) {
          findLargest(element);
        } else if (element > largest) {
          largest = element;
        }
      }
    }
  
    findLargest(arr);
    return largest;
  }
  
  const nestedArray = [1, [2, [3, 4], 5], [6, [7, 8]], 9, [10]];
  const largestElement = findLargestElement(nestedArray);
  console.log('The largest element is:', largestElement); 