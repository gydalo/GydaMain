// forEach()
function greetNames(names) {
    names.forEach((name) => console.log(`Hello, ${name}!`));
  }
  
  greetNames(['Alice', 'Bob', 'Charlie']);
  // Output: Hello, Alice! Hello, Bob! Hello, Charlie!

//map()
function doubleNumbers(numbers) {
    return numbers.map((number) => number * 2);
  }
  
  console.log(doubleNumbers([1, 2, 3])); 
  // Output: [2, 4, 6]

//filter()
function filterGreaterThanTen(numbers) {
    return numbers.filter((number) => number > 10);
  }
  
  console.log(filterGreaterThanTen([5, 12, 18, 7])); 
  // Output: [12, 18]

//reduce()
function addUpNumbers(numbers) {
    return numbers.reduce((total, current) => total + current, 0);
}

console.log(addUpNumbers([3, 6, 8]));

const redirectButton = document.getElementById('redirectButton');
redirectButton.addEventListener('click', () => {
    window.location.href = 'https://www.noroff.no';
});

const createDivButton = document.getElementById('createDivButton');
createDivButton.addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'Hello, this is a new div!';
    document.body.appendChild(newDiv);
});