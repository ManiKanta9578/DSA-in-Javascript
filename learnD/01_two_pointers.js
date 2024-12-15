const isPalindrome = function (s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;

};

let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));


const checkForTarget = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let curr = nums[left] + nums[right];

        if (curr == target) {
            return [nums[left], nums[right]];
        }

        if (curr > target) {
            right--;
        } else {
            left++;
        }
    }
    return false;
}

let nums = [1, 2, 4, 6, 8, 9, 14, 15];
let target = 13;
console.log(checkForTarget(nums, target));

//Given two arrays arr1 and arr2, both of which are sorted in non-decreasing order, 
// merge them into a single sorted array. The resulting array should be in non-decreasing order 
// and include all the elements from both arr1 and arr2.

const sortedData = (arr1, arr2) => {
    let mergedArray = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }

console.log(sortedData([1, 3, 4, 5], [2, 6, 8, 9]));