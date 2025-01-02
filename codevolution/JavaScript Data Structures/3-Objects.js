/* 
Object

An object is an unordered collection of key-value pairs. The key must either be a string or symbol data type where as the value can be of any data type.

To retrieve a value, you can use the the corresponding key. This can be achieved using the dot notation or bracket notation.

An object is not an iterable. You cannot use it with a for of loop
*/

let obj = {
    name: 'Mani',
    age: 30,
    'key-three': true,
    sayMyName: function () {
        console.log(this.name);
    }
}
obj.hobby = 'football'
delete obj.hobby

console.log(obj.name);
console.log(obj[age]); // ReferenceError: age is not defined
console.log(obj['age']); // No Error
console.log(obj['key-three']);
console.log(obj);
obj.sayMyName();

//object.keys()  .values()  .entries()


/*
Big-O time complexity

Insert — 0(1)
Remove — 0(1)
Access — 0(1)
Search — O (n)
Object.keys() — O(n)
Object.values() — O(n)
Object.entries() — O(n)
*/