// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

const evenNumbers = (arr) => {
    if(arr.length === 0) return;
      let newArr = [];
      for(let i = 0; i < arr.length; i++){
          if(arr[i] % 2 === 0){
              newArr.push(arr[i]);
          }
      }
      return newArr;
  }
  
  let input = [1,2,3,4,5,6,7,8,9];
  console.log(evenNumbers(input));