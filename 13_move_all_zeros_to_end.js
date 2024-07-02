const input = [1,0,2,3,2,0,0,4,5,1];

//Using Two pointers
const moveZeros = (arr) => {
    if(arr.length === 0) return;

    let i = 0;
    let j = 0;
    let len = arr.length;

    while(i < len){
        if(arr[i] !== 0){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
        i++;
    }
    return arr;
}

console.log(moveZeros(input));