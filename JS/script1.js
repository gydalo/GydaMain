console.log("This is script 1")

var firstName = "Gyda";
var lastName = "Lofthus";

var fullName = firstName + " " + lastName;

console.log(fullName);

/*
the console.log sends the code to the console on the page inspect tool.
*/

var pet = "dog";
var petAge = 11;
var isFriendly = false;

console.log(pet);
/* console.log(typeof petAge);
Tells us what type the variable is. petAge is a number. The console will then tell us this. 
*/

var price1 = "5";
var price2 = 4;

var total = price1 + price2;

console.log(total);
/*
If you write a number as a string value (string is with a "" around it), then it will not act as a number
but as a string. Booleans values are eigther "true" or "false".
*/

var result = 5 + 5;

console.log(result);
/*
When a number is a string value "5", then u can use:
var result = 5 + parseInt("5");
This makes the number a numbervalue instead of a stringvalue.

You use parseInt for numbers with no decimals, and parseFloat for numbers with decimals.
*/

var isNumber = isNan(result);

console.log(isNumber);

/*
You can check if the result is a number by writing this. Nan = Not a Number. 
The console will then tell u "false" or "true" based on if it is a number or not.
*/

// It is easier to understand the concept of "for" loops, if we switch out the varible name "i" with "count".

for (var count = 1; count <= 5; count++) {
    console.log(count);
}

for (counter variable; condition; incrementation of counter variable) {
    //code to be executed (also called a statement)
}

// A counter variable set a starting point for looping.  It is often called "i", which stands for integer.

/* 
"count <= 5" is the same as "if(count <= 5) {console.log()}" This means "if "count" is less or equal to "5",
then proceed."
*/

for (var i = 0; i < 5; i++) {
    console.log(i);
}


// ARRAYS
/* 
  An array is a representation of an iterable list of data.
  Arrays are used to represent any categorical information. In the example below, each variable belongs to the category 
  colour. 
*/

var colour1 = "red";
var colour2 = "pink";
var colour3 = "yellow";

// Arrays are written using square brackets [], separating each item with a comma ,.

var colours = ["red", "pink", "yellow"];

// Arrays can be used to store any type of value in any combination.

// Shopping list

// You can count items in an array using "length"

var shoppingList = ["bananas", "a few frogs", "some rats"];
console.log(shoppingList);

console.log("length: ", shoppingList.length);

shoppingList.push("rat poison");
console.log("length: ", shoppingList.length);

// We can add new items to the end of an array using the push

var colours = ["red", "pink", "yellow"];

// add purple to the colours array
colours.push("purple");

// now colours includes purple
console.log(colours);
// ["red", "pink", "yellow", "purple"]

// now the length property will be 4
console.log(colours.length);
// 4

// Array.push() is used for adding items to the beginning of an array.
// Although less commonly used than Array.push(), unshift can be a useful way to update an array.

var posts = ["I travelled to...", "Dear diary...", "My favourite sport is..."];

var newPost = "Today I wrote a blog post";

posts.unshift(newPost);
// posts === ['Today I wrote a blog post', 'I travelled to...', 'Dear diary...', 'My favourite sport is...'];

/*
Removing items from an array using Array.pop()
You can remove an item from the end of an array by using the pop array prototype method.
*/

var example = [1, 2, 3, 4];
var lastItem = example.pop();
// lastItem === 4
// example = [1, 2, 3]

/*
Likewise, you can remove an item from the beginning of an array by using the shift array prototype method.
*/

var example = [1, 2, 3, 4];
var fistItem = example.shift();
// fistItem === 1
// example = [2, 3, 4]

/*
We can access items inside an array using the index of the item.

The index is the position of the item in the array. The first item in the array is at position 0.

We use square brackets to access an item by its index:
*/

var colours = ["red", "pink", "yellow"];

var firstItem = colours[0];
// red

var thirdItem = colours[2];
// yellow

/*
We can use a for loop to access every item in an array.

Because the first item in an array is at index 0, our counter variable will begin at 0, and we will 
execute the loop only while the counter variable is less than the number of items in the array.
*/

var colours = ["red", "pink", "yellow"];

for (var i = 0; i < colours.length; i++) {
    var col = colours[i];
    console.log(col);
}
// red
// pink
// yellow

// Loop
var colours = ["red", "blue", "green", "orange", "yellow"];

for (var i = 0; i < colours.length; i++) {
    var col = colours[i]
    console.log(col);
}