# union types

>Union types in TypeScript allow a variable to hold values of multiple types.
let value: string | number;
value = "Hello";
value = 42;

# Narrowing

>Narrowing in TypeScript is refining the type of a variable to a more specific type using type checks.
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}


# literal types

>Literal types in TypeScript restrict a variable to a specific value.
let direction: "up" | "down";
direction = "up"; // Valid
direction = "left"; // Error


# truthiness narrowing

>Truthiness narrowing in TypeScript refines the type based on whether a value is truthy or falsy.
function processValue(value: string | null) {
  if (value) {
    console.log(value.toUpperCase()); // 'value' is now definitely a string
  } else {
    console.log("No value");
  }
}
 

# type aliases

>Type aliases in TypeScript create custom names for types.
type StringOrNumber = string | number;
let value: StringOrNumber;
value = "Hello";
value = 42;


# type assertion

>Type assertion in TypeScript tells the compiler to treat a value as a specific type.
let value: any = "Hello";
let strLength: number = (value as string).length;


# interfaces

>Interfaces in TypeScript define the structure of an object.
interface Person {
  name: string;
  age: number;
}

const john: Person = { name: "John", age: 30 };


# literal inference

>Literal inference in TypeScript refers to TypeScript's ability to infer literal types (specific values) based on the assigned value.
let status = "success"; // TypeScript infers 'status' as type "success"
let errorCode = 404; // TypeScript infers 'errorCode' as type 404 (number)


# what is difference between type aliases and interface

>Syntax and Usage:
Type Aliases: Used to create a name for any type, including primitive types, unions, tuples, and intersections.
Interfaces: Primarily used to describe the shape of an object or class instance.

>Extensibility:
Type Aliases: Cannot be extended or implemented.
Interfaces: Can be extended by other interfaces and implemented by classes.

>Declaration Merging:
Type Aliases: Cannot be merged.
Interfaces: Can be merged to extend their declarations.

>Compatibility with Union and Intersection Types:
Type Aliases: Can define union types, intersection types, and more complex types.
Interfaces: Primarily used for defining object shapes but can also be used in union and intersection types.

// Type Alias
type Point = {
  x: number;
  y: number;
};

// Interface
interface Shape {
  name: string;
  sides: number;
}

// Interface Extending Another Interface
interface Square extends Shape {
  size: number;
}
