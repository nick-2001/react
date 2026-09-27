# JavaScript Basics

JavaScript was invented by Brendan Eich in 1995. Browsers use it to make a page respond: change text, swap an image, or react when someone clicks a button.

HTML is the structure. CSS is the look. JavaScript is the behavior.

## Where the script goes

In `index.html`, the script tag sits near the bottom of the page:

```html
<script src="scripts/main.js"></script>
```

The browser reads a file from top to bottom. If the script runs first and tries to change HTML that has not been read yet, that HTML is not there yet, and the script fails.

Putting the script at the bottom is one fix: the browser builds the page first, then runs the script. Other loading options exist (such as `defer`), but the bottom of the page is the simplest place to start.

## Selecting an element

Working with an element is a lot like a CSS selector. You choose the element first, then change it.

```js
const myImage = document.querySelector("img");
```

`document` is the page. `querySelector("img")` finds the first `<img>` on that page and stores it in `myImage`.

## Variables

A variable is a named container for a value. Declare it with `let` or `const`, then give it a name.

```js
let myVariable;
myVariable = "bob";
```

The first line creates an empty container. The second line stores the text `"bob"` in it.

Use `let` when the value may change later. Use `const` when it should stay the same. A name must be unique in that part of the script. `myButton` and `myHeading` are just labels you choose.

## Types

JavaScript values have types. These five show up early:

| Type | Example | What it holds |
| --- | --- | --- |
| String | `"bob"` | Text |
| Number | `10` | A number |
| Boolean | `true` | Yes or no |
| Array | `["a", "b"]` | An ordered list |
| Object | `{ name: "bob" }` | A group of named values |

A string is written in quotes. A number is not. A boolean is only `true` or `false`.

## What is the DOM?

The DOM (Document Object Model) is the browser's live map of the page. Each tag becomes an object JavaScript can find and change.

When this script runs:

```js
myHeading.textContent = `Hello, ${myName}`;
```

it does not edit the HTML file. It updates the heading that is already on the screen.

## Functions

A function is a block of code with a name. You write it once, then run it whenever you need it.

```js
function setUserName() {
  const myName = prompt("Please enter your name.");
  myHeading.textContent = `Hello, ${myName}`;
}
```

`prompt()` asks the visitor for text. Calling `setUserName()` runs the steps inside the function.

## Anonymous functions and arrow functions

Some functions have no name of their own. They are written where they are used.

A classic anonymous function:

```js
myButton.onclick = function () {
  setUserName();
};
```

An arrow function does the same job with shorter syntax:

```js
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
};
```

Both forms mean: when this thing happens, run this code.

## Events

An event is something that happens on the page. A click is one kind of event. Typing, scrolling, and loading the page are others.

```js
myButton.onclick = function () {
  setUserName();
};
```

`onclick` is the click handler. The function on the right runs each time the button is clicked.
