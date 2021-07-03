console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log(hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName( name ) {
  return `Hello, ${name}`;
}

let name = 'Nicole!';
console.log(helloName(name));
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
  //function will return true if a number is positive
  if ( number > 0 ){
    //conditional statement that evaluates if a number is greater than zero
    return true;
    //if number is greater than zero return true
    } //else if (number < 0)
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
let colors = ['red', 'yellow', 'green', 'blue'];

function getLast( items ) {
  //function to obtain the last item in an array
  if(items.length > 0){
    //if the array's length is greater than zero --if the array is NOT empty
    return items[items.length-1]
    //return the last item in the array
  }
}

console.log(getLast(colors));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

function find( value, array ) {
  //function to find a value within an array
  for(const item of array){
    //for of loop to filter through each element from the array
    if (value === item) {
      //if value passed exists as an item filtered through the array in the loop
      return true;
      //return true
    }
    return false;
    //if the value is not in the array return false
  }
}

  let value = 5;
  let array = [4, 5, 6, 7, 8];
console.log(find(value, array));

// ----------------------
// Stretch Goals

// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise


function isFirstLetter( letter, string ){
  if(letter === string[0]){
    return true;
  }
  return false;
}

let letter = 'b';
let string = 'books';
console.log(isFirstLetter('b', 'books'));

//console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
//console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  //function that returns the sum of an array
  let sum = 0;
  //Declaring the variable sum
  for( const num of array ){
    //a for of loop to run every number in the array
    sum += num;
    //sum = sum + num--the sum of all of the numbers
  }
  return sum;
}

let numberArray = [4, 5, 6, 7];
console.log(sumAll(numberArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.


prompt('What are your coordinates?');


function getPositives(numbers){
  // function that takes user input of all numbers
  let newArray = [];
  //creation of a new array to store postive numbers from user input
  for(let number of numbers){
    //for of loop to iterate through user input array
    if(number > 0){
      //if statement to filter out postive numbers from user inputt list
      newArray.push(number)
      //push function to add postive numbers into new array of postive numbers
    }

  }
    return newArray
    //returning a new array of postive numbers from a user input array

}//end getPositives

let i = [5, 4, 3, 2, -2];
console.log(getPositives(i));



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//Create a function that takes two numbers as arguments and 'return'
//their sum.
//addition (3, 2)
//addition (-3, -6)
//addition (7, 3)

function sumThreeTwo(a, b) {
  return a + b;
}

let a = 3;
let b = 2;
console.log(sumThreeTwo(3, 2));


function sumThreeSix(c, d) {
  return c + d;
}

let c = -3;
let d = -6;
console.log(sumThreeSix(-3, -6));



function sumSevenThree(e, f) {
  return e + f;
}

let e = 7;
let f = 3;
console.log(sumSevenThree(7, 3));
