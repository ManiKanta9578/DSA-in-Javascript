// Find pairs from given input ? 
// input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; input2 = 10; 
// output = [[4, 6], [3, 7], [2, 8], [1, 9]]
const findPairs = (arr, target) => {
    let pairs = [];
    let seen = new Set();

    for (let num of arr) {
        let compliment = target - num;
        if (seen.has(compliment)) {
            pairs.push([compliment, num]);
        }

        seen.add(num);
    }
    return pairs;
}

let input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let input2 = 10;
console.log(findPairs(input1, input2))