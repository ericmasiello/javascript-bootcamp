# JavaScript Bootcamp Remote

## Things this course should cover

https://generalassemb.ly/education/javascript-bootcamp-remote-online/washington-dc/126942

- Run JS on command line - Maybe Node?
- Declare variables
  - Simple Data Types
    - String
    - Number
    - Boolean
  - Complex
    - Object
    - Array
    - Function
  - `var` vs. `let` vs. `const`
    - Hoisting (might make sense to talk about this AFTER control flow so you can talk about blocks e.g. if/else/loop)
- Control flow (if / else)
- Loops (for, for of, while)
- Functions
  - Scope
- Interfacing with the DOM
  - What is the DOM
  - Event Handlers
- Write a program in the browser

——
Notes from Slides

- https://github.com/mottaquikarim/JavascriptBootcamp
- https://mottaquikarim.github.io/JavascriptBootcamp/stage/index.html?lecture=0#/
- NOTE TO SELF: do this in code sandbox, teach students about console.log() so they can see the output

Objectives

- Some background about JavaScript
- Understand fundamentals of the JavaScript language
- Using JS in the Browser
- Using JS in Node

## Outline

- Install Stuff
- Small background on JS
- Explain how code works in the browser
- 🚗🚗🚗🚗 Skipping the basics to show how this stuff works 🚗🚗🚗🚗
- Talk about using JavaScript in the browser to build basic interactive sites
  - Basic overview of DOM APIs
  - Talk about how DOM APIs interface with HTML
  - Show how to inject JavScript into an HTML page
  - Brief overview of JS Syntax
  - Explain basic event handling
  - https://codesandbox.io/s/stop-light-6yw3q
- 🕰🕰🕰🕰 Back to Basics 🕰🕰🕰🕰
- Using variables
  - declare variable using `let`
  - assign a value
  - reassign a value
  - `let` vs. `const`
  - `let` vs``var`
- Basic Data Types
  - `string`, `number`, and `boolean`
  - `null` and `undefined`
  - `objects`
  - just talk about basic properties you can assign e.g. `person.name` `person.age`
  - Math operations +, -, /, \*
  - string operations / concatenation
  - `functions`
- Build a Calculator App
  - Steal this from JS 101 but do it on Codesandbox
  - https://codesandbox.io/s/calculator-p6jwe
- Functions
  - basic syntax
  - different ways of writing functions
    - most common: declaration and arrow `function foo() {}` and `const foo = () => {}`
    - other less commonly used expression `const foo = function() {}`
  - arguments & parameters
    - params are the inputs to a function
    - arguments are the _actual_ value passed in
    - the order of the arguments match up with the params
  - invoking functions
  - understanding the execution order of code relative to functions
  - return statement
  - using the return value of a function
  - implicit return with arrow function
- 🚧🚧🚧🚧🚧 NEED AN EXERCISE HERE FOR FUNCTIONS 🚧🚧🚧🚧🚧
- Arrays and Loops
  - Using `console.log` (quick aside)
  - Arrays are a special type of object that works well with loops
  - syntax for arrays
  - use `0` based index
  - arrays have a `.length`
  - adding and removing elements from an array
    - `.push()` and `.pop()` // add at end, remove at end ("u's" add)
    - `.unshift()` and `.shift()` // add at beginning, remove at beginning ("u's" add)
  - demonstrate the above in a codesandbox using `console.log`
  - loops
    - allow you to do some work over the entire array
    - `for` and `for of` - demo codesandbox
    - `while` and `do while` - demo codesandbox
  - Using objects inside of arrays
    - Make a codesandbox of todo objects
    - empty array of todos, create a function that adds a `todo(text, isComplete)`
    - loop over todos and console.log the text and if its is complete or not
    - create a loop that counts how many items are completed or not
- Some more relevant skills towards your magnum opus
  - Handling form submission events
  - event.preventDefault();
- 🚧🚧🚧🚧🚧 CREATE A BASIC TODO APP 🚧🚧🚧🚧🚧
  - WIP https://codesandbox.io/s/todo-app-vh7km
  - User can add a todo when they click an add button
  - todos are always added to the end of the list (push())
  - checking a box should mark the todo as complete (but not remove it)
  - a todo that is done should render a class of "complete"
- Bonus JS in Node
  - Background on what node is
  - Explain that it can be used for servers or command line tools
  - Cannot use DOM APIs
  - write a basic program
  - execute it via `node program.js`

### Install Stuff

- Chrome
- VS Code
- Node - https://nodejs.org/en/ download the “LTS” version (not “Current”)

### About JavaScript

- Front end
  - logic
  - responding to events
  - animation
    - https://mottaquikarim.github.io/JavascriptBootcamp/stage/index.html?lecture=0#/4/5
  - Loading data dynamically
- Backend
  - Run via Node - which is Google Chrome’s v8 engine (this is the JS engine powering Chrome). This allows us to run JS from the terminal for running scripts, or as a server similar to other languages like Java, Ruby, Python, etc.
  - Access file system, manipulate data
  - Talk to a database
  - (Will explore later)
- Terminology (https://mottaquikarim.github.io/JavascriptBootcamp/stage/index.html?lecture=0#/6/1)
  - Program
  - How are programs written?
  - Declarations - typically we can store a retrieves data in variables
  - Expressions.= how code is evaluated e.g. 2+2
    - Show off expressions in Chrome Console
    - Declare F = 32
    - Declare C = (F - 32) / 1.8
  - Syntax
    - Grammar - Rules of the language
- DOM
  - Use my slides
  - https://mottaquikarim.github.io/JavascriptBootcamp/stage/index.html?lecture=25#/4/13
  - Events
- Data Types
  - String,number Boolean, undefined, null, symbol
  - Undefined - it is used to specify if a variable has been given an explicit value
  - Null - similar to undefined by typically used to indicate value is empty - but explicitly
  - Symbol - makes a unique entity that can never be reproduced at runtime - we won’t be using this
  - Everything else is an object
    - Arrays
    - Objects
    - Functions
  - How to declare variables
  - Naming conventions
    - Camel case
    - Spaces are not valid
    - Can you underscores but most use came case
    - Most special characters are invalid except for \$ and \_
    - avoid reserved words like var, function, class, etc - you can tell based on coloring
    - assignment and declarations
    - Math operations +, -, /, \*
    - String operations (concatenation)
    - Template literates
    - Objects
    - Arrays
      - A collection of any other data type
      - Access values in an array by index
      - First element arr[0], last element arr[arr.length - 1]
      - Arrays have a length
      - Work well with loops (we’ll talk about later)
      - Push adds elements to the end of the list
      - Pop removes them from the end of the list
      - unshift adds an element to beginning of the list
      - Shift removes from the beginning of the list
    - Exercises
      - https://github.com/mottaquikarim/PCNWLab-Variables
      - Working with arrays (these are a bit challenging) https://github.com/mottaquikarim/PCNWLab-Arrays
  - Functions
    - Syntax, Parameters / Arguments, Return statement
    - A reusable group of statements that can be used and reused with a program
    - Mantra - DRY
    - Demo the syntax for a function w/o any parameters
    - Two types: function keyword and arrow function
    - How to invoke a function
    - Useful for event handlers
    - Function keyword gets hoisted
    - Parameters / Arguments
      - Params are inputs to our function
      - Arguments are the actual data being passed to our function
      - Default params
    - Return statement
      - The point exits the function even if there’s more lines of code after it
      - If you omit the return statement, your function implicitly returns undefined
    - https://mottaquikarim.github.io/JavascriptBootcamp/stage/index.html?lecture=22#/6
