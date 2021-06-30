console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say', hello());


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
  return firstNumber + secondNumber;
}

firstNumber = 20;
secondNumber = 30;
console.log(addNumbers(firstNumber, secondNumber));



// 4. Function to multiply three numbers & return the result
//patty's comments: I created variables 'firstDigit', 'secondDigit', 'third' and assigned a value below to repurpose the function.
function multiplyThree( firstDigit, secondDigit, thirdDigit ){
  return firstDigit * secondDigit * thirdDigit
}

firstDigit = 6;
secondDigit = 5;
thirdDigit = 4;
console.log(multiplyThree(firstDigit, secondDigit, thirdDigit));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise

function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } //else if (number < 0){
    return false;
  }

number = 4;//change this number to a postive value for true OR negative for false
console.log(isPositive(number));

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else if (number <= 0){
    return false;
  }
}

number = 0;//change this number to a postive value for true OR negative for false

console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

function getLast() {
  return getLast = colors[colors.length -1];
  if(colors != array[array.length -1]) {
  return undefined;
  }
}

const colors = ['red', 'yellow', 'green', 'blue'];
console.log(getLast());

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
//function find( value, array ){

function find( value, array ) {
  for(const item of array){
    if (value === item) {
      return true;
    }
  }
  return false;
}

  let value = 5;
  let array = [4, 5, 6, 7, 8];
console.log(find(item));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter( letter, string ){
  if(letter === a){
    return true;
  } else return false;
}


let letter = a;
//string = 'apple';
console.log(isFirstLetter(letter));

//console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
//console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let value = 5;
array = [4, 5, 6, 7];

function sumAll() {
  for( const num of array )
  sum += num;
  return sum;
}

console.log(sumAll());

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
