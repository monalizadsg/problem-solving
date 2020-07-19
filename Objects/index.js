//EXERCISES

//Address Object
//Create a function that takes an address object with 3 params
// street, city and zipcode
// diplay all the properties of the object along with their values.
const address = {
  street: "Marang Street",
  city: "Quezon City",
  zipCode: 4141,
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);

//Create Factory and Constructor Function

//Factory Function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let myAddress = createAddress("a", "b", "c");
console.log(myAddress);

//Constructor
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let currentAddress = new Address("a", "b", "c");
console.log(currentAddress);

//Object Equality
//Create two address using constructor function above and compare them if they're equal
//Create two functions that:
// areEqual() checks if two objects have the same reference
// areSame() checks if two objects are pointing to the exact same object
// return true or false

let address1 = new Address("a", "b", "c");
let address2 = new Address("a", "b", "c");
let address3 = address1;

console.log(areEqual(address1, address2)); //true
console.log(areSame(address1, address2)); //false
console.log(areSame(address1, address3)); //true because they are referencing to the same object in memory .

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

areEqual(address1, address2);

function areSame(address1, address2) {
  return address1 === address2;
}

//Blog post
//Create a blog post object with params:
// title, body, author, views, comments (author, body), isLive

let post = {
  title: "abc",
  body: "abcdefg",
  author: "mm",
  views: 1,
  comments: [
    { author: "nd", body: "abdcdefg" },
    { author: "nm", body: "hjkshd" },
  ],
  isLive: false,
};

console.log(post);

//Create a constructor function to create a post object
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

//Note: Aim to have a functions with fewer parameters. The more parameters a function has,
// the harder it gets to use.

const newPost = new Post("a", "b", "c");
console.log(newPost);

//Price Range Objects
// Based on Yelp PriceRangeButton Create an array of objects, each object is a price range object
// think of properties of each object should have

let priceRanges = [
  { label: "$", toolTip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", toolTip: "Moderate", minPerPerson: 10, maxPerPerson: 20 },
  { label: "$$$", toolTip: "Inexpensive", minPerPerson: 21, maxPerPerson: 50 },
];

//the priceRangeObject can be used in filtering restaurants
let restaurants = [{ averagePerPerson: 5 }];
