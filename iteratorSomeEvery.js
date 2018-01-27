
/*
    .some() method checks to see if there are ANY match against check condition to return true or false
    .every() method checks ALL elements in array against check condition to return true or false
 */

let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(function(word) {
  return word.length < 6;
}));

// Use filter to create a new array
let interestingWords = words.filter(word => word.length >5);


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every(word => word.length > 5));