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

//Write a function that takes an array and another array(in this array, we can add
// the values we want to be excluded from the original array)
// returns a new array without the values that we have passed.

const numbers1 = [1, 2, 3, 4];

const output = except(numbers1, [1, 2]);
console.log(output);

function except(array, excluded) {
  let output = [];
  for (let element of array)
    if (!excluded.includes(element)) output.push(element);
  return output;
}
