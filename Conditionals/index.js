//FizzBuzz
//Write a function that takes input and convert it to string
// Rules: Divisible by 3 : 'Fizz'
//        Divisible by 5 : 'Buzz'
//        Divisible by both 3&5 : 'FizzBuzz'
//        Not divisible by 3 or 5 : input
//        Not a number : 'Not a number'

const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return "Not a number";
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 5 === 0) return "Buzz";
  if (input % 3 === 0) return "Fizz";

  return input;
}

//CheckSpeed
//Rules:
//    Speed Limit = 70
//    Every 5 beyond limit -> 1 point
//    Use Math.floor to convert into whole number
//    12 points -> suspended

checkSpeed(180);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License suspended");
  else console.log("Points", points);
}

//showNumbers
//write a function that takes a parameter and display numbers from 0 up to the given parameter
//if even -> number 'EVEN'
//if odd -> number 'ODD'

//mysolution
showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++)
    if (i % 2 === 0) console.log(i, "EVEN");
    else console.log(i, "ODD");
}

//Other solution: using ternary operator
showNumbersVersionTwo(10);
function showNumbersVersionTwo(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}

//Count Truthy
//Write a function which takes an array and returns a number
//  of truthy elements in the array

//my solution
const array = [0, null, undefined, "", 1, 2, 3];
console.log(countTruthy(array));
function countTruthy(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i]) count++;
  }
  return count;
}

//other solution: using FOR...OF LOOP

function countTruthyVersionTwo(array) {
  let count = 0;
  for (let value of array) {
    if (value) count++;
  }
  return count;
}

//Show Properties
//Create a function that takes an obj and display  all the
// properties of the obj that are of type string
const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

console.log(showProperties(movie));

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") console.log(key, obj[key]);
  }
}

//Sum of Multiples of 3 and 5
//Write a function that takes a limit and returns the sum of all the multiples of 3 and 5
console.log(sum(10));

function sum(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}

//GRADE
//Create a function that calculate average of the given array and
// return the corresponding grade of the computed average
// 1-59 : F
// 60-69 : D
// 70-79 : C
// 80-89 : B
// 90-100 : A
const marks = [80, 80, 50];
console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  //use for...of loop to iterate items
  for (let value of array) sum += value;
  return sum / array.length;
}

//STARS
//Create a function star with a parameter rows and display a star
// depends on the given row
// 1 row - *
// 2 row - ** and so on...

showStars(5);
//mySolution
function showStars(rows) {
  let star = "";
  for (let i = 1; i <= rows; i++) console.log((star += "*"));
}

//other solution; using nested loop
showStarsTwo(5);
function showStarsTwo(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}
