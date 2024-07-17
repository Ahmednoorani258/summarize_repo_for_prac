# function
>A function in TypeScript is a block of code designed to perform a particular task. It can be defined using the function keyword.

function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet("Alice"); // Outputs: Hello, Alice!


# optional parameter
>Optional parameters in TypeScript allow you to define parameters that may or may not be provided when calling a function. They are denoted by a ? after the parameter name in the function declaration.

function greet(name?: string): void {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log(`Hello, guest!`);
  }
}

greet(); // Outputs: Hello, guest!
greet("Alice"); // Outputs: Hello, Alice!


# default parameter
>Default parameters in TypeScript allow you to specify default values for parameters that are undefined when calling the function. They are assigned in the function declaration.

function greet(name: string = "guest"): void {
  console.log(`Hello, ${name}!`);
}

greet(); // Outputs: Hello, guest!
greet("Alice"); // Outputs: Hello, Alice!


# rest parameter 
> Rest parameters in TypeScript allow you to represent an indefinite number of arguments as an array. They are denoted by ... followed by the parameter name.

function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Outputs: 6
console.log(sum(1, 2, 3, 4, 5)); // Outputs: 15


# overloads
> Function overloading in TypeScript allows a function to have multiple signatures. TypeScript selects the appropriate signature when calling the function based on the number and types of arguments provided.

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2)); // Outputs: 3
console.log(add("Hello", " TypeScript")); // Outputs: Hello TypeScript


# async await
> Async functions and the await operator in TypeScript provide a syntax for writing asynchronous code that looks synchronous. Async functions return a Promise, and the await keyword is used inside async functions to wait for the resolution of a Promise.

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function greetAsync(name: string): Promise<void> {
  await delay(1000);
  console.log(`Hello, ${name}!`);
}

greetAsync("Alice"); // Outputs after 1 second: Hello, Alice!


# arrow functions

>Arrow functions are a concise way to write functions in TypeScript. They are often used for inline functions or when you need to preserve the lexical scope of this.

let add = (a: number, b: number): number => {
  return a + b;
};

// Shortened version:
let square = (x: number): number => x * x;


# Higher-Order Functions:

>Higher-order functions in TypeScript are functions that either take other functions as arguments or return functions as their result.

function applyOperation(num: number, operation: (x: number) => number): number {
  return operation(num);
}

let square = (x: number): number => x * x;
console.log(applyOperation(3, square)); // Outputs: 9

# Callback Functions:

> Callback functions in TypeScript are functions that are passed as arguments to other functions and are executed after some operation is completed.

function fetchData(url: string, callback: (data: any) => void) {
  // Simulate fetching data
  let data = { name: "Alice", age: 30 };
  callback(data);
}

fetchData("https://example.com/data", (result) => {
  console.log(result); // Outputs: { name: "Alice", age: 30 }
});


# Anonymous Functions:

>Anonymous functions in TypeScript are functions without a name. They are often used as arguments to other functions or as immediately invoked function expressions (IIFE).

let add = function(a: number, b: number): number {
  return a + b;
};

// Immediately invoked function expression (IIFE)
(function() {
  console.log("Hello, TypeScript!");
})();

# Closures:

>Closures in TypeScript allow functions to retain access to variables from their containing lexical scope even when the function is executed outside that scope.

function createCounter() {
  let count = 0;
  return {
    increment: () => count++,
    decrement: () => count--,
    getCount: () => count
  };
}

let counter = createCounter();
console.log(counter.getCount()); // Outputs: 0
counter.increment();
console.log(counter.getCount()); // Outputs: 1

# Currying:

> Currying in TypeScript is a technique of translating a function that takes multiple arguments into a sequence of functions that each take a single argument..

function add(a: number): (b: number) => number {
  return function(b: number): number {
    return a + b;
  };
}

let add5 = add(5);
console.log(add5(3)); // Outputs: 8
