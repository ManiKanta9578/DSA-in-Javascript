/*
Set

1. A set is a data structure that can hold a collection of values. The  
   values however must be unique.

2. Set can contain a mix of different data types. You can store strings, 
   booleans, numbers or even objects all in the same set

3. Sets are dynamically sized. You don't have to declare the size of a  set before creating it.

4. Sets do not maintain an insertion order.

5. Sets are iterables. They can be used with a for of loop.
*/

/*
Set vs Array

1. Arrays can contain duplicate values whereas Sets cannot

2. Insertion order is maintained in arrays but it is not the case with sets

3. Searching and deleting an element in the set is faster compared to arrays

*/

const set = new Set([1, 2, 3]);

set.add(4);
set.add(4);
console.log(set.has(2));
console.log(set.size);
set.delete(3);
set.clear();

for (const item of set) {
    console.log(item);
}