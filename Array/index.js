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

//Write a function called move, and use it to move an element in an array
// takes a parameters of an array, index of an element we want to move and an offset.

const numbers2 = [1, 2, 3, 4];
const output2 = move(numbers2, 0, 2);
console.log(output2);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid offset");
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}

//Create a function called count occurences
// It takes an array and search element
// and returns the number of times that search element has occured in the array
// implement it first in the simplest you know then try to use reduce after.

const numbers3 = [1, 2, 3, 4, 1];
const count = countOccurences(numbers3, 1);
console.log(count);

// function countOccurences(array, searchElement) {
//   let count = 0;
//   for (let element of array) if (element === searchElement) count++;
//   return count;
// }

//Using reduce
function countOccurences(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    // console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}

//Create a function getMax that takes an array
// and returns the largest number in the array
// implement it first in the simplest you know then try to use reduce after.

const numbers4 = [1, 2, 3, 4, 5];
const max = getMax(numbers4);
console.log(max);

// function getMax(array) {
//   if(array.length === 0) return undefined;
//   let max = array[0];
//   for (let element of array) if (element >= max) max = element;
//   return max;
// }

//Using reduce
function getMax(array) {
  if (array.length === 0) return undefined;

  return array.reduce((accumulator, current) => {
    return accumulator > current ? accumulator : current;
  });
}

//the cleaner code version
// function getMax(array) {
//   if (array.length === 0) return undefined;
//   return array.reduce((a, b) => a > b ? a : b);
// }

//Movies
const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

//Get all movies in 2018 with rating > 4
//Sort them by their rating
//Descending order
//Pick their title and display it in the console.

const titles = movies
  .filter((m) => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(titles);
