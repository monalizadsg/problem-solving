//Create a stopwatch constructor function and create object from it.

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started");

    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not yet started");

    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw1 = new Stopwatch();

//Prototypical Inheritance Exercise
//Create a HtmlElement constructor with a method of click, and add a prototype with a method of focus
//Create a HtmlSelectElement constructor with a property (items), and methods (addItems, removeItems)
//Then inherit the instance/method of HtmlElement and its prototype without using the extend method(Object.create());

//comment it out because i will use it to next exercise
// function HtmlElement() {
//   this.click = function () {
//     console.log("clicked");
//   };
// }

// HtmlElement.prototype.focus = function () {
//   console.log("focused");
// };

// const e = new HtmlElement();
// console.log(e);

// function HtmlSelectElement(items = []) {
//   this.items = items;

//   this.addItems = function (item) {
//     this.items.push(item);
//   };

//   this.removeItems = function (item) {
//     this.items.splice(this.items.indexOf(item), 1);
//   };
// }

// //inherit the HtmlElement by making a new instance
// HtmlSelectElement.prototype = new HtmlElement();
// HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// const s = new HtmlSelectElement();
// console.log(s);

//Polymorphism Exercise
//Create different objects tha have the same parent(from the previous exercise)
// and they all have a render method that behaves differently
// You have multiple forms of the render method

function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItems = function (item) {
    this.items.push(item);
  };

  this.removeItems = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };

  this.render = function () {
    return `<select>${this.items
      .map((item) => `<option>${item}</option>`)
      .join("")}
      </select>`;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// const s = new HtmlSelectElement([1, 2, 3]);
// console.log(s.render());

function HtmlImageElement(src) {
  this.src = src;

  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

// const img = new HtmlImageElement();
// img.src = "http://";
// console.log(img.render());

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement("http://"),
];

for (let element of elements) console.log(element.render());
