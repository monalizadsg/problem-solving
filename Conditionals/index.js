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
