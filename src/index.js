var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

const newNumbers = numbers.map(function (m) {
  return m * 2;
});
console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

const newNums = numbers.filter(function (num) {
  return num < 10;
});
console.log(newNums);

//Reduce - Accumulate a value by doing something to each item in an array.

const newSum = numbers.reduce(function (accumulator, currentNumber) {
  console.log("accumulator" + accumulator);
  console.log("currentNumber" + currentNumber);
  console.log("");
  return accumulator + currentNumber;
});
console.log(newSum);

//Find - find the first item that matches from an array.

const firstNumber = numbers.find(function (x) {
  return x > 10;
});
console.log(firstNumber);

//FindIndex - find the index of the first item that matches.

const firstNumberIndex = numbers.findIndex(function (x) {
  return x > 10;
});
console.log(firstNumberIndex);

//applying the map fnction to the emojipedia to return the message with only 100 characters.

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);
