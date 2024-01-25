console.log("This is script 2")

if(salary >= 70.000 && salary <= 90.000);

/*
"===" = equal to
"!==" = not equal to
">" = greater than
">=" = greater than or equal to
"<" = less than
"<=" = less than or equal to
"=" = assignment operator, assignes a value to a variable
*/

console.log(7 === 7) // Output: True
console.log(7 === 10) // Output: False

var myNumber = 7;

// is myNumber greater than 8?
console.log(myNumber > 8) // Output: False

7 === "7";
// false

7 == "7";
// true
/*
The === operator checks that both the values and type of the variables being compared are equal, 
whereas == only checks that the value and not the type are equal.
*/

// Boolean - "is", "has"
var isLoggedIn = true;

if (isLoggedIn === true) {
  console.log("The user is logged in");
} else {
  console.log("The user is logged out");
}
//if a certain condition is true, run this code. else, run this other code.

var inputIsValid = false;

if (inputIsValid === false) {
  // show error message
} else {
  // hide error message
}

var answer = 8;
var guessedNumber = 10;

if(guessedNumber === answer) {
    console.log("Correct guess");
}
else {
    console.log("Incorrect answer");
}

//If.. else if..else
var grade = 7;
var letterGrade;

if (grade === 10) {
  letterGrade = "A";
} else if (grade === 9) {
  letterGrade = "A";
} else if (grade === 8) {
  letterGrade = "B";
} else if (grade === 7) {
  letterGrade = "C";
} else {
  letterGrade = "Unkown";
}

/*Reading multiple "else if"s becomes difficult, as seen in the code above. In this scenario we can turn to 
"switch" statements.*/

var grade = 7;
var letterGrade;

switch (grade) {
  case 10:
  case 9:
    letterGrade = "A";
    break;
  case 8:
    letterGrade = "B";
    break;
  case 7:
    letterGrade = "C";
    break;
  case 6:
    letterGrade = "D";
    break;
  case 5:
    letterGrade = "E";
    break;
  default:
    letterGrade = "Fail";
}

console.log(letterGrade);
/*The "switch" statements receives a variable to check in the parenthesis (round brackets)*/
switch (grade) {
case 8:
    letterGrade = "B";
    break;
}
/*
Inside the "curly braces" "{" are several "case" blocks.
In the "case" of "grade" being equal to 8. run the code after the colon ":" and before the "break"
This is equal to the following:
*/
if (grade === 8) {
    letterGrade = "B";
  }

/*
If you find yourself writing more than one else if statement, consider using a switch instead.
*/

/*
Loops are used to doing the same thing repeatedly, and this action is called iteration.
*/
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

/*
Const - constante - cant change
Let = This value can be reassigned a value.

*/

// Object
const cat = {
  firstName: "Meep",
  isDomestic: true,
  hasFourLegs: true,
  age: 16, 
  foodTheyLike: {
    favourite: "Lasagna",
    dislikes: "fish",
  },
};


// Null, objects abd arrays of objects
// Thruthiness and Falsiness
/*
- undefined, the variable is empty and has never been set. It is ‘new’ or ‘pristine’.
- null, the variable is empty but has been purposefully set to empty.
- 0, the variable stores an empty quantity.
- "", the variable stores an empty string.
*/

// A convenient way to test whether a value is truthy or falsy is by using the Boolean method:
console.log(Boolean("")); // false, therefore falsy
console.log(Boolean("abc")); // true, therefore truthy

// A truthy value represents any positive information. To put it simply: There is something here

/*
Some of the truthy values may be surprising or seem counterintuitive:
[], an empty array
{}, an empty object
"0", the string of the number zero
*/

console.log(Boolean([])); // true, therefore truthy
console.log(Boolean({})); // true, therefore truthy
console.log(Boolean("0")); // true, therefore truthy

// Objects
/*
An object is a data structure that groups values together under a variable name.

Values are stored inside an object by creating a property within the object:
*/
var exampleObject = {
  exampleProperty: "exampleValue",
};


/*
An object can have zero or more properties, and it can store any kind of value type. Including other objects
such as: string, number, boolean, undefined, null, array, object.

This code explains what "dog"s name is, breed, owner and number of legs (which is three apparently).
*/
var dog = {
  name: "Tripod",
  breed: "labrador",
  numberOfLegs: 3,
  owner: null,
};

// Note the difference:
console.log(dog.owner);
// "null"

console.log(dog.colour);
// "undefined"

// The colour has not been disclosed, and we know that there is no owner.


var animal = {
  type: "elephant",
  colour: "grey",
  numberOfLegs: 4,
  domesticated: false,
};

console.log(animal);

var vehicle = {
  category: "car",
  colour: "pink",
  numberOfWheels: 4,
  numberOfWings: null,
};

console.log(vehicle);

// Finding objects in an array:
var searchString = "Wrench";
var myObject = products.find(function (product) {
  return product.name === searchString;
});
console.log(myObject);

// Filtering objects in an array:
// For example, if the user wants to see products that are less than $60, we should exclude product 1:
var maximumPrice = 60.0;
var myFilteredArray = products.filter(function (product) {
  return product.price < maximumPrice;
});
console.log(myFilteredArray);

// Functions
// To declare a function we use the "function" keyword and a name of our choice (we named this function "logWord"):
function logWord() {
  // the code we want the function to run goes here
}

/*
The contents of a function live between the curly braces { }. We don’t have any code there except a comment, so our function doesn’t 
do anything at the moment. We will look at the purpose of the parenthesis (round brackets) () a bit later.
*/

function logWord() {
  console.log("one");
}

// Now the function logs a string to the console. The code inside the function won’t run until we call (or execute or invoke *) the function.

// We call a function using its name and round brackets ().

logWord();

// Now the "logWord" function will run.

/*
We can make the function far more useful by passing variables into it so that the code inside the function can use them.

The variables that we pass into functions are called arguments. We place them inside the ().
*/

// Let’s add an argument called theWord to the logWord function:

function logWord(theWord) {
  console.log("one");
}

logWord();

/*
We can use the variables we pass in, the arguments, inside the function just like any other variable. Let’s pass in a value as 
the theWord argument and then log that value:
*/

function logWord(theWord) {
  console.log(theWord);
}

logWord("hello");

// If we change the value:

function logWord(theWord) {
  console.log(theWord);
}

logWord(50);

//50 will now be logged.

// declare a function with two arguments
function AddTwoNumbers(number1, number2) {
  var sum = number1 + number2;
  console.log(sum);
}

// call the function and pass two arguments in
AddTwoNumbers(3, 4);
// 7

// To return a value from inside a function, we use the keyword return.
function addTwoNumbers(number1, number2) {
  var sum = number1 + number2;
  return sum;
}

// No code after a return keyword will run. As soon as a return keyword is encountered, the function will exit with the value provided.

