const nums = [1, 1, 0, 1, 1, 1];

const maxConsecutiveOnes = (nums) => {
    let maxCount = 0;
    let count = 0;

    for(const num of nums){
        if(num === 1){
            count++;
            maxCount = Math.max(maxCount,count);
        }else{
            count = 0;
        }
    }
    return maxCount;
}

let result = maxConsecutiveOnes(nums);
console.log(result);