const factorial_recursive = (n) => {
    if (n === 1 || n === 0) return 1;
    return n * factorial_recursive(n - 1);
};

//Big-O = O(n)

console.log(factorial_recursive(1));
console.log(factorial_recursive(3));
console.log(factorial_recursive(5));