console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
let name = 'Nicole!';
function helloName( name ) {
  return name;
}
console.log(helloName( name));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result


function addNumbers( firstNumber, secondNumber ) {
  firstNumber = 20;
  secondNumber = 30;
  return firstNumber + secondNumber;
}

console.log(addNumbers());



// 4. Function to multiply three numbers & return the result
//patty's comments: I created variables 'firstDigit', 'secondDigit', 'third' and assigned a value below to repurpose the function.
function multiplyThree( firstDigit, secondDigit, thirdDigit ){
  firstDigit = 6;
  secondDigit = 5;
  thirdDigit = 4;
  return firstDigit * secondDigit * thirdDigit
}

console.log(multiplyThree());

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  number = -2;//change this number to a postive value for true OR negative for false
  if ( number > 0 ){
    return true;
  } else if (number < 0){
    return false;
  }
}

console.log(isPositive());

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
function isPositive( number ) {
  number = 3;//change this number to a postive value for true OR negative for false
  if ( number > 0 ){
    return true;
  } else if (number <= 0){
    return false;
  }
}
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  array = [];
  return getLast = array[array.length -1]
  if(array = 0) {
  return undefined
  }
}

console.log(getLast());

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
//function find( value, array ){
  i = 6;
  array = [2, 5, 6, 7, 9, 4];
  array.forEach(function find( value, array ) {
    if(array[i] === 6) {
    return true
  } else {
    return false
  }
})
  /*for (i=0; i < array.length; i++){
    if(array[i] === 5) {
    return true
  } else
    return false
  }
}*/
console.log(find());

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
