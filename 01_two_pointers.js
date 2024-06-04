const isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = s.length - 1;

    while(left < right){
        if(s[left] !== s[right]){
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

    while(left < right){
        let curr = nums[left] + nums[right];

        if(curr == target){
            return [nums[left], nums[right]];
        }

        if(curr > target){
            right--;
        }else{
            left++;
        }
    }
    return false;
}

let nums = [1,2,4,6,8,9,14,15];
let target = 13;
console.log(checkForTarget(nums, target));