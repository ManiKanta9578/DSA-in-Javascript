/* Find the longest common prefix among all strings in given array ['flower', 'flow', 'flight']*/

const longestCommonPrefix = (arr) => { 
    if(arr.length === 0) return '';

    let prefix = arr[0]; // Start with the first string as the prefix

    for(let i = 1; i < arr.length; i++){
        while (arr[i].indexOf(prefix) !== 0) {
            //Reduce the prefix by one character from the end until it matches
            prefix = prefix.substring(0, prefix.length - 1);
            if(prefix === '') return ''; // If no common prefix
        }
    }
    return prefix;

};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));                           
