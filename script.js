// 0036. Write a function that takes in an array of numbers and returns the sum of all the elements.
const numbers = [45, 4, 9, 16, 25];

const myFunction = (total, value) => {
  return total + value;
}

const newNumbers = numbers.reduce(myFunction);
console.log(newNumbers);




// 0037. Write a function that takes in an array of strings and returns the longest string.
const getLongestString = (stringArray) => {
  let longestString = "";

  for(let i = 0; i < stringArray.length; i++){
    if(stringArray[i].length > longestString){
      longestString = stringArray[i];
    }
  }
  return longestString;
}


console.log(getLongestString(["Bangladesh", "India", "Pakistan", "Nepal", "Bhutan"]));




// 0038. Find the largest number in an array: Write a function that takes an array of numbers and returns the largest number.
function getLargestNumber (stringNumbers) {
  let largestNumber = stringNumbers[0];

  for (let i = 1; i < stringNumbers.length; i++){
    if(stringNumbers[i] > largestNumber){
      largestNumber = stringNumbers[i];
    }
  }
  return largestNumber;

}

console.log(getLargestNumber([45, 22, 13, 55, 60]));




// 0039. Write a function that takes in an array of numbers and returns a new array with all the elements in the original array squared.
function squareElements(numbers) {
  let squaredNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    squaredNumbers.push(numbers[i] ** 2);
  }
  return squaredNumbers;
}

console.log(squareElements([1, 2, 3, 4, 5]))





// 40. Remove duplicates from an array: Write a function that takes an array and returns a new array with all of the duplicate elements removed.
function removeDuplicates(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5]));