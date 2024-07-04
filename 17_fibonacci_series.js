//upto n terms
const fibonacciSeries_n_terms = (num) => {
    let n1 = 0, n2 = 1, nextTerm;
    
    for(let i = 0; i <= num; i++){
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
};

fibonacciSeries_n_terms(5);

//upto n numbers
const fibonacciSeriesUpto_n_numbers = (num) => {
    let n1 = 0, n2 = 1, nextTerm;

    console.log(n1);
    console.log(n2);
    nextTerm = n1 + n2;

    while(nextTerm <= num){
        console.log(nextTerm);
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }
};

fibonacciSeriesUpto_n_numbers(10);