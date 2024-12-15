function convertToObject(keyString, value) {
    let keys = keyString.split('.');
    let newObj = {};
    let temp = newObj;

    for (let i = 0; i < keys.length - 1; i++) {
        temp[keys[i]] = {};
        temp = temp[keys[i]];
    }
    temp[keys[keys.length - 1]] = value;
    return newObj;
}

const result = convertToObject("a.b.c", "someValue");

console.log(result);