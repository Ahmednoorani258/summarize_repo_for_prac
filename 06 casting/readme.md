# type casting

> Type casting in TypeScript is a way to explicitly tell the compiler that you know the type of a value and treat it as that specific type.

let userInput: any = "Hello";
let strLength: number = (userInput as string).length;



# more about casting

> Type casting in TypeScript is primarily used when you have a value of a more general type (any, or a union type) and you want to treat it as a more specific type. There are two main syntaxes for type casting:

let userInput: any = "Hello";
let strLength: number = (userInput as string).length;

let userInput: any = "Hello";
let strLength: number = (<string>userInput).length;

type ID = number | string;
function processID(id: ID) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

let userInput: any = "Hello";
let strLength: number = (userInput as string).length;
