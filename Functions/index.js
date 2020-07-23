//Create a function called sum that takes a varying number of arguments
// and returns their sum. Check also if the arguments is an array.
// If array, you still have the same sum output from the args that is not array
function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
  console.log(items);
  return items.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4]));
