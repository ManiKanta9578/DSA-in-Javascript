function areAnagrams(str1, str2) {

    if (str1.length !== str2.length) return false;

    let charCount1 = {};
    let charCount2 = {};

    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    for (let i = 0; i < str1.length; i++) {
        let char = str2[i];
        charCount2[char] = (charCount2[char] || 0) + 1;
    }


    for (const char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    return true;

}

// Example usage:
const string1 = "listen";
const string2 = "silent";

console.log(areAnagrams(string1, string2));  // Output: true

const string3 = "hello";
const string4 = "bello";

console.log(areAnagrams(string3, string4));  // Output: false
