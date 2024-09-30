// Given an array,return an array where the each value is the product of the next two items [3, 4, 5] -> [20, 15, 12]

function productOfNextTwo(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let next1 = arr[(i + 1) % arr.length];
        let next2 = arr[(i + 2) % arr.length];
        result.push(next1 * next2);
    }
    return result;
}

const arr = [3, 4, 5];
console.log(productOfNextTwo(arr)); 