//ArrayFromRange
//Write a function that take two parameters(min, max)
// and display the numbers from min up to max

function ArrayFromRange(min, max) {
  let output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

console.log(ArrayFromRange(1, 4));
