const countOccurrence = (str) => {
    let result = {};

    for(let i = 0; i < str.length; i++){
        let char = str.charAt(i);
        if(!result[char]){
            result[char] = 1;
        }else{
            result[char] += 1;
        }
    }

    return result;
}

console.log(countOccurrence('Manikanta'));