//ArrayFromRange
//Write a function that take two parameters(min, max)
// and display the numbers from min up to max

function ArrayFromRange(min, max) {
  let output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

console.log(ArrayFromRange(1, 4));

//Create a function called includes that takes an array and a search element.
// if search element exist, return true; otherwise return false.

const numbers = [1, 2, 3, 4];
function includes(array, searhElement) {
  for (let num of array) if (num === searhElement) return true;
  return false;
}

console.log(includes(numbers, 4));
