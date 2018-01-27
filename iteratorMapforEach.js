/*
    <Note: function method has keyword 'function' as well as the {} and 'return' call

    let numbers = [1, 2, 3, 4, 5];

    let bigNumbers = numbers.map(function(number) {
        return number * 10;
     });
 */


let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
let secretMessage = animals.map(firstLetter => firstLetter[0]);


console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
let smallNumbers = bigNumbers.map(visor => visor / 100);


/*
    Example using the function notation --

    let groceries = ['whole wheat flour', 'brown sugar', 'salt', 'cranberries', 'walnuts'];

    groceries.forEach(function(groceryItem) {
    console.log(' - ' + groceryItem);
    });
 */

let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`));


/*
    .filter() refactor or reduce the array membership based on truthy test condition in the function 

 */

let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
let smallNumbers = randomNumbers.filter(function(number) {
  return number < 250;
});

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords = favoriteWords.filter(word => word.length > 7);
