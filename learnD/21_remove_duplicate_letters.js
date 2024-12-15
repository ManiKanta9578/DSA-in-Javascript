const str = 'manikanta';

//using map
const removeDuplicateLetters = (str) => {
    let map = new Map();
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (!map.has(str[i])) {
            map.set(str[i], true);
            result += str[i];
        }
    }
    return result;
}

//using Set
const removeDuplicateLetters2 = (str) => {
    let set = new Set();
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (!set.has(str[i])) {
            set.add(str[i]);
            result += str[i];
        }        
    }
    return result;
}

console.log(removeDuplicateLetters2(str));  