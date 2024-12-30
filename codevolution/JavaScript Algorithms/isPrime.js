const isPrime = (n) => {
    if(n < 2) return false;

    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
};

//Big-O = O(n)

//optimised solution

const isPrime_Optimised = (n) => {
    if(n < 2) return false;

    for(let i = 2; i < Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
};

//Big-O = O(sqrt(n));

console.log(isPrime(1));
console.log(isPrime(55));
console.log(isPrime(7));