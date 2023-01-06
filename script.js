// 0036. Write a function that takes in an array of numbers and returns the sum of all the elements.
    // WAY - 01
const numbers = [12, 52, 11, 9, 5, 35, 55];

const myFunction = (total, value) => {
  return total + value;
};

const totalNumber = numbers.reduce(myFunction);
console.log(totalNumber);

    // WAY - 02
const getPlusNumber = (numArray) => {
  let totalNumber = 0;

  for (let i = 0; i < numArray.length; i++) {
    totalNumber += numArray[i];
  }
  return totalNumber;
};
console.log(getPlusNumber([12, 52, 11, 9, 5, 35, 55]));

    // WAY - 03
const numberss = [12, 52, 11, 9, 5, 35, 55];
let total = 0;

numberss.forEach(function (value) {
  total += value;
});

console.log(total);




// 0037. Write a function that takes in an array of strings and returns the longest string.
const getLongestString = (stringArray) => {
  let longestString = "";

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > longestString.length) {
      longestString = stringArray[i];
    }
  }
  return longestString;
};
console.log(
  getLongestString([
    "Bangladesh",
    "United States of America",
    "United Kingdom",
    "Pakistan",
    "Poland",
  ])
);




// 0038. Find the largest number in an array: Write a function that takes an array of numbers and returns the largest number.
const getLongestNumber = (numbersArray) => {
  let longestNumber = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > longestNumber) {
      longestNumber = numbersArray[i];
    }
  }
  return longestNumber;
};
console.log(getLongestNumber([1, 5, 6, 8, 2, 3]));




// 0039. Write a function that takes in an array of numbers and returns a new array with all the elements in the original array squared.
const getSquaredNumber = (normalArray) => {
  let squaredArray = [];

  for (let i = 0; i < normalArray.length; i++) {
    squaredArray.push(normalArray[i] ** 2);
  }

  return squaredArray;
};
console.log(getSquaredNumber([1, 5, 6, 8, 2, 3]));




// 0040. Remove duplicates from an array: Write a function that takes an array and returns a new array with all of the duplicate elements removed.
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
