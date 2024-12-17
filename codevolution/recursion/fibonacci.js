//find the nth number of fibonacci

const fibonacci_Recursion = (n) => {
    if (n < 2) return n;

    return fibonacci_Recursion(n - 1) + fibonacci_Recursion(n - 2);
};

//O(n) = Iterative
//O(n^2) = recursive

console.log(fibonacci_Recursion(0));
console.log(fibonacci_Recursion(2));
console.log(fibonacci_Recursion(6));