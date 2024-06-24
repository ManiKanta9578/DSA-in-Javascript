const str = "Hello world";

const reverseString = (str) => {
    if(str.length === 0) return;
    if(str.length === 1) return str[0];

    let reverseStr = "";

    for(let i = str.length - 1; i >= 0; i--){
        if(str[i] === " "){
            continue; //remove space
        }
        reverseStr += str[i];
    }

    return reverseStr;
}

console.log(reverseString(str));