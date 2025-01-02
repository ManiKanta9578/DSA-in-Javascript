/* Array
An array is a data structure that can hold a collection of values
Arrays can contain a mix of different data types. You can store strings, booleans,
numbers or even objects all in the same array
Arrays are resizable. You don't have to declare the size of an array before creating
it
JavaScript arrays are zero-indexed and the insertion order is maintained
Arrays are iterables. They can be used with a for of loop */

let arr = [1, 2, 3, 'Manikanta', true];
arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();

for (const item of arr) {
    console.log(item);
}

//map, filter, reduce, concat, slice and splice

/* 
Array - Big-O time complexity

Insert / remove from end — O(1)
Insert / remove from beginning — O(n)
Access — O(1)
Search — O(n)
Push / pop — 0(1)
Shift / unshift / concat / slice / splice — O(n)
forEach / map / filter / reduce — O(n)
*/