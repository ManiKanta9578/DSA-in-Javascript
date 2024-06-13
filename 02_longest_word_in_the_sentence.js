//using for loop

const findLongestWord = (str) => {
    let strSplit = str.split(' ');
    let longest = 0;
    let word = '';

    for(let i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longest){
            longest = strSplit[i].length;
            word = strSplit[i];
        }
    }
    return [longest,word];
}

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

//using Sort()

const findLongestWord_sort = (str) => {
    const longestWord = str.split(' ').sort((a,b) => b.length - a.length);
    return longestWord[0];
}

//using reduce

const findLongestWord_reduce = (str) => {
    const longestWord = str.split(' ').reduce((longest, currentWord) => currentWord.length > longest.length ? currentWord : longest, "");
    return longestWord;
}

console.log(findLongestWord_reduce('The quick brown fox jumped over the lazy dog'));

